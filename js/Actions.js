export function loadData(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        
        xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;                
            this.status != 200 ? reject() : resolve(xhr.responseText);
        }
        
        xhr.send();
    });
};

export function onChangeHandler(event) {
    this.setState({
        newTaskName: event.target.value
    })
}

export function saveNewName(ev) {
    this.setState({
        tasks: this.state.tasks.map((task) => {
            if (task.id === this.state.selectedTask.id) 
                task.name = this.state.newTaskName;
            
            return task;
        })
    })
}

export function selectTask(task) {
    this.setState({
        selectedTask: task,
        newTaskName: task.name
    })
}