import {taskInfo, taskProps} from '../../interfaces/taskList'
import {Task} from '../../index'
import {useDispatch, useSelector} from 'react-redux'


let AllTasks: React.FC<taskProps> = function  ({taskList, ToggleTaskStatus}) {
	const dispatch = useDispatch()
	const arr = useSelector((state: any) => state)
	console.log(arr)

	function changeReduxState(index: number): any{
		dispatch({type: "toggle", id: index})
	}


	let allTaskList = taskList.map((currentTask, id) => {
		return (
			<div onClick={() => changeReduxState(id)}>
				<Task task={taskList[id]} ToggleTaskStatus={ToggleTaskStatus} />
			</div>
		)
	})


	return (
		<>
			{allTaskList}
		</>
	)
}

export default AllTasks;