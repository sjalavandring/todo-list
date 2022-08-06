import {ReactNode, useState}  from 'react'
import {taskInfo} from  '../../interfaces/taskList'
import {useEffect} from 'react'

type TaskProps = {
	task : taskInfo;
	ToggleTaskStatus: (id: number) => void;
}

let Task : React.FC<TaskProps> =  function Taskhandler ({task, ToggleTaskStatus}){
	let [taskCompleteStatus , setTaskStatus] = useState(false)
	function checkboxToggler(): void  {
		setTaskStatus(true)
		ToggleTaskStatus(task.id)
		console.log(task);
	}

	return (
		<div className={taskCompleteStatus ? "tasks-list-elem--completed" : "tasks-list-elem"}>
			<button className={taskCompleteStatus ? "custom-checkbox" : "custom-checkbox--checked"} onClick={checkboxToggler}/>		
			<div className="tasks-list-elem__item">{task.taskText}</div>
		</div>
	)
}

export default Task;