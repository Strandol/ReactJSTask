import React, { Component } from 'react';

export default class ActiveTask extends Component {  
    render() {
        if (!this.props.selectedTask) {
            return(
                <h3 className='headerOfEmptyResult'>Nothing found...</h3>
            )
        }

        return(
            <div className='selectedTask'>
                <div className='selectedTask__name'>
                    <span>Name</span>
                    <textarea onChange={this.props.onChangeHandler} value={this.props.newTaskName}/>
                    <button onClick={this.props.saveNewName} className='saveNameBtn'>Save</button>               
                </div>
                <hr />
                <div className='selectedTask__name'>
                    <span>Description:</span>
                    <p>{this.props.selectedTask.description || 'No description...'}</p>                
                </div>
            </div>
        )
    }
}