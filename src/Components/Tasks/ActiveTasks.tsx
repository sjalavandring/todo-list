import {taskInfo, taskProps} from '../../interfaces/taskList'
import {Task} from '../../index'
import {useDispatch, useSelector} from 'react-redux'


let ActiveTasks: React.FC = function () {
	const taskList = useSelector((state: any) => state)
	let activeTaskList = taskList.map((currentTask: taskInfo[], id: number) => {
		if (taskList[id].completed == undefined || taskList[id].completed == false) {
			return (
				<Task taskId={id} />
			)
		} else return null
	})


	return (
		<>
			{activeTaskList}
		</>
	)

}

export default ActiveTasks;