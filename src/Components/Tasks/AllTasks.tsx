import {taskInfo, taskProps} from '../../interfaces/taskList'
import {Task} from '../../index'
import {useDispatch, useSelector} from 'react-redux'


let AllTasks: React.FC = function () {
	const taskList = useSelector((state: any) => state)
	console.log(taskList)

	let allTaskList = taskList.map((currentTask: taskInfo[], id: number) => {
		return (
			<Task taskId={id} key={id}/>
		)
	})


	return (
		<>
			{allTaskList}
		</>
	)
}

export default AllTasks;