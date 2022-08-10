import {taskInfo, taskProps} from '../../interfaces/taskList'
import {Task} from '../../index'


let ActiveTasks: React.FC<taskProps> = function ({taskList, ToggleTaskStatus}) {
	let activeTaskList = taskList.map((currentTask, id) => {
		if (taskList[id].completed != true) {
			return (
				<Task task={taskList[id]} ToggleTaskStatus={ToggleTaskStatus} />
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