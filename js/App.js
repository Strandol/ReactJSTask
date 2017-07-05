import React, { Component } from 'react';
import TaskList from './components/TaskList';
import ActiveTask from './components/ActiveTask';
import * as actions from './Actions';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            selectedTask: null,
            isTaskNameMustHaveSaved: false,
            newTaskName: ''
        }
        
        actions.loadData('tasks.json')
        .then((data) => {
            let taskData = JSON.parse(data);            
            this.setState({        
                tasks: taskData,
                selectedTask: taskData[0],
                newTaskName: taskData[0].name
            }) 
        })
    }
      
    render() {
        return (
            <div>
                <ActiveTask
                    saveNewName = { actions.saveNewName.bind(this) }
                    selectedTask = { this.state.selectedTask }
                    newTaskName = { this.state.newTaskName }
                    onChangeHandler = { actions.onChangeHandler.bind(this) }
                />
                <div className='tableWrapper'>
                    <TaskList
                        isTaskNameMustHaveSaved = { this.state.isTaskNameMustHaveSaved }
                        selectTask = { actions.selectTask.bind(this) } 
                        selectedTask = { this.state.selectedTask }
                        newTaskName = { this.state.newTaskName }
                        tasks = { this.state.tasks } 
                    />
                </div>
            </div>
        );
    }
}
