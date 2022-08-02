import {ReactNode, useState}  from 'react'

type TaskProps = {
	taskText : string;
}

let Task : React.FC<TaskProps> =  function Taskhandler ({taskText}){
	let [taskCompleteStatus , setTaskStatus] = useState(false)
	function checkboxToggler(): void  {
		setTaskStatus(true)
	}

	return (
		<div className={taskCompleteStatus ? "tasks-list-elem--completed" : "tasks-list-elem"}>
			<button className={taskCompleteStatus ? "custom-checkbox" : "custom-checkbox--checked"} onClick={checkboxToggler}/>		
			<div className="tasks-list-elem__item">{taskText}</div>
		</div>
	)
}

export default Task;