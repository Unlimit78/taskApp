import React, { Component } from 'react'

export class AddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };

    }








    render(){



        return (


                <div className="col" id="form-block">
                    <h3>Adding new Task</h3>
                    <form role="form" className="form-horizontal" >
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



        )
    }
}
export default  AddForm