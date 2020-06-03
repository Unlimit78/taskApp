import React, { Component } from 'react'

export class MainBody extends Component{
    constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event) {
    this.setState({value: event.target.value});
  }
    handleSubmit(event) {
        alert(this.state.data);
        event.preventDefault();
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
              formFields:data.fields
          };
        });
      });
  }
    render(){


        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <h3>Adding new Task</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>



                        <input type="submit" value="Надіслати" />
                    </form>
                </div>
                <div className="col-sm-6">
                    <div>
                        <ul className="list-group ">
                            <li className="list-group-item justify-content-center align-items-center d-flex">
                                Add new task
                            </li>
                            {this.state.data.map(task => {
                    return (

                            <li className="list-group-item justify-content-center align-items-center d-flex">
                                {task.title}
                            </li>

                    )

                })}
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}
export default  MainBody