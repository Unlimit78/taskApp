import React, { Component } from 'react'

import AddForm from './AddForm';

export class MainBody extends Component{
    constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
      opened:false,
      activeEl :'',
      openedTask:false



    };


    this.openForm = this.openForm.bind(this);
    this.openTask = this.openTask.bind(this);
    this.CloseTask = this.CloseTask.bind(this);



  }

    componentDidMount() {
    fetch("api/task")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true,

          };
        });
      });
  }

    openForm(){
        const { opened } = this.state;
		this.setState({
			opened: !opened,
            activeEl:''
		});
    }

    openTask(id){

        const { openedTask } = this.state;
		this.setState({
			openedTask: !openedTask,
            opened:false,
            activeEl: id
		});

    }

    CloseTask(){
        this.setState({

            activeEl: ''
		});
    }



    render(){
        var tasks = this.state.data;
        const { opened } = this.state;
        const { openedTask} = this.state;
        const { activeEl } = this.state;
        var  exact_task = tasks.find(task => task.id === activeEl);


        return (
            <div className="container-fluid">
            <div className="row">
                {activeEl &&(
                    <div className="col" id="info-block">
                        <span onClick={this.CloseTask} >Close</span>
                        <p>{exact_task.title}</p>
                        <p>{exact_task.body}</p>
                        <p>{exact_task.updated}</p>
                        <p>{exact_task.status}</p>
                    </div>
                )}

                {opened &&(

                    <AddForm/>
                )}
                <div className="col" id="tasks-block">

                        <button type="button" onClick={this.openForm} className="btn btn-dark btn-block" >Add new task</button>
                        <ul className="list-group ">
                            {this.state.data.map(task =>


                            <li key={task.id} onClick={(id) => this.openTask(task.id)} className="list-group-item justify-content-center align-items-center d-flex" >
                                {task.title}
                                {task.id}
                            </li>

                            )}


                        </ul>

                </div>

            </div>
            </div>
        )
    }
}
export default  MainBody