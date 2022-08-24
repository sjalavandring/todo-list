import {taskInfo, taskProps} from '../../interfaces/taskList'
import {Task} from '../../index'
import {useDispatch, useSelector} from 'react-redux'


let CompletedTasks: React.FC = function () {
	const taskList = useSelector((state: any) => state)
	let completedTaskList = taskList.map((currentTask: taskInfo[], id: number) => {
		if (taskList[id].completed = true) {
			return (
				<Task taskId={id} />
			)
		} else return null
	})


	return (
		<>
			{completedTaskList}
		</>
	)
}

export default CompletedTasks;