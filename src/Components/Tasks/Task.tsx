import {ReactNode, useState}  from 'react'
import {taskInfo} from  '../../interfaces/taskList'

type TaskProps = {
	task : taskInfo;
}

let Task : React.FC<TaskProps> =  function Taskhandler ({task}){
	let [taskCompleteStatus , setTaskStatus] = useState(false)
	function checkboxToggler(): void  {
		setTaskStatus(true)
	}

	return (
		<div className={taskCompleteStatus ? "tasks-list-elem--completed" : "tasks-list-elem"}>
			<button className={taskCompleteStatus ? "custom-checkbox" : "custom-checkbox--checked"} onClick={checkboxToggler}/>		
			<div className="tasks-list-elem__item">{task.taskText}</div>
		</div>
	)
}

export default Task;