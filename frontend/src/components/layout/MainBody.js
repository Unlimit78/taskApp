import React, { Component } from 'react'

export class MainBody extends Component{
    constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

    handleClick(){
        alert('hello'+this);
    }
    handleSubmit(){
        e.preventDefault();
        var url ='api/task-create' ;
        fetch(url,{
            method:'POST',

        })
    }

    render(){
        var tasks = this.state.data;

        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col" id="info-block">
                    Hello
                </div>
                <div className="col" id="form-block">
                    <h3>Adding new Task</h3>
                    <form role="form" className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title" className="control-label col-sm-2">Title</label>
	                        <div className="col-sm-10">
                                <input name="title" type="text"  className="form-control" placeholder="Title"/>
	                        </div>


                        </div>
                        <div className="form-group">
                            <label htmlFor="body" className="control-label col-sm-2">Body</label>
                            <div className="col-sm-10">
                                <textarea name="body"  className="form-control" placeholder="Body"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <input type="submit" className="btn btn-dark" value="Send"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col" id="tasks-block">

                        <button type="button" onClick={this.handleClick} className="btn btn-dark btn-block" >Add new task</button>
                        <ul className="list-group ">
                            {tasks.map(function(task,index){
                                return (

                            <li key={index} className="list-group-item justify-content-center align-items-center d-flex">
                                {task.title}
                            </li>
                              )
                            })}


                        </ul>

                </div>

            </div>
            </div>
        )
    }
}
export default  MainBody