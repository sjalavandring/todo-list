import {ReactNode, useState}  from 'react'
import {taskInfo}  from  '../../interfaces/taskList'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

let Task : React.FC<{taskId: number}> =  function Taskhandler ({taskId}){
	const dispatch = useDispatch()
	let task = useSelector((state: any) => state[taskId])
	let state = useSelector((state: any) => state)
	function changeReduxState(index: number): any{
		dispatch({type: "toggle", id: index})
	}

	return (
		<div className={task.completed == true  ? "tasks-list-elem--completed" : "tasks-list-elem"}>
			<button className={task.completed == true ? "custom-checkbox" : "custom-checkbox--checked"} onClick={() => changeReduxState(taskId)}/>		
			<div className="tasks-list-elem__item">{task.taskText}</div>
			<div>{task.completed}</div>
		</div>
	)
}

export default Task;