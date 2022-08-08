import {ReactNode, useState}  from 'react'
import {taskInfo} from  '../../interfaces/taskList'
import {useEffect} from 'react'

type TaskProps = {
	task : taskInfo;
	ToggleTaskStatus: (id: number) => void;
}

let Task : React.FC<TaskProps> =  function Taskhandler ({task, ToggleTaskStatus}){
	function checkboxToggler(): void  {
		ToggleTaskStatus(task.id)
	}

	return (
		<div className={task.completed == true  ? "tasks-list-elem--completed" : "tasks-list-elem"}>
			<button className={task.completed == true ? "custom-checkbox" : "custom-checkbox--checked"} onClick={checkboxToggler}/>		
			<div className="tasks-list-elem__item">{task.taskText}</div>
		</div>
	)
}

export default Task;