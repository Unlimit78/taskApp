import React, { Component } from 'react'

export class MainBody extends Component{
    constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
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
            loaded: true
          };
        });
      });
  }
    render(){
        return (
            <div>
                {this.state.data.map(user => {
                    return (
                    <p>
                        {user.title}
                    </p>)
                })
                }

            </div>
        )
    }
}
export default  MainBody