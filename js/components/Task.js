import React, { Component } from 'react';

const DATE_REGEXP = /([0-9-]+)T/;
const TIME_REGEXP = /T((\d{2}\:){2}\d{2})/;

export default class UserData extends Component {  
    onClickHandler(e) {
        this.props.selectTask(this.props.data);
    }
    
    render() {
        const {name, tags, actual_effort, estimated_effort, due_date, is_high_priority} = this.props.data;
        return(
            <tr onClick={this.onClickHandler.bind(this)} className={'task' + (is_high_priority ? ' importantTask' : '')}>
                <td><span className='task__name'>{name}</span></td>
                <td><span className='task__tags'>{tags || '__'}</span></td>
                <td><span className='task__actualEffort'>{actual_effort || '__'}</span></td>
                <td><span className='task__estimatedEffort'>{estimated_effort || '__'}</span></td>
                <td>
                    <span className='task__dueDate'>{due_date ? due_date.match(DATE_REGEXP)[1] : '__'}</span>
                    <span className='task__dueDate'>{due_date ? due_date.match(TIME_REGEXP)[1] : '__'}</span>
                </td>
            </tr>
        )
    }
}