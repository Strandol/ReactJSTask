import React, { Component } from 'react';
import Task from './Task';
import _ from 'lodash';

export default class TaskList extends Component {
    render() {      
        let taskList = _.map(this.props.tasks, (data) => {
            if (data.obj_status === 'active')
                if ((data.id === this.props.selectedTask.id) && this.props.isTaskNameMustHaveSaved) {
                    data.name = this.props.newTaskName;
                }
                return <Task
                    className = { data.is_high_priority ? 'importantTask' : 'task'}
                    key = {data.id}
                    selectTask = {this.props.selectTask}
                    data = {data} 
                />

        })
        
        return(
           <table className='tasksTableInfo'>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Tags</th>
                  <th>Actual effort</th>
                  <th>Estimated effort</th>
                  <th>Due date</th>
              </tr>
              </thead>
              <tbody>
                  {taskList}
              </tbody>
           </table>
        )
    }
}