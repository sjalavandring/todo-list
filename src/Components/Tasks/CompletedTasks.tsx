import {taskInfo, taskProps} from '../../interfaces/taskList'
import {Task} from '../../index'


let CompletedTasks: React.FC<taskProps> = function ({taskList, ToggleTaskStatus}) {
	let completedTaskList = taskList.map((currentTask, id) => {
		if (taskList[id].completed) {
			return (
				<Task task={taskList[id]} ToggleTaskStatus={ToggleTaskStatus} />
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