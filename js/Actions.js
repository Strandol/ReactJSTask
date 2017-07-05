exports.loadData = function(url) {
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

exports.onChangeHandler = function(event) {
    this.setState({
        newTaskName: event.target.value
    })
}

exports.saveNewName = function(ev) {
    this.setState({
        tasks: this.state.tasks.map((task) => {
            if (task.id === this.state.selectedTask.id) 
                task.name = this.state.newTaskName;
            
            return task;
        })
    })
}

exports.selectTask = function(task) {
    this.setState({
        selectedTask: task,
        newTaskName: task.name
    })
}