import {taskInfo, taskProps} from '../../interfaces/taskList'
import {Task} from '../../index'


let AllTasks: React.FC<taskProps> = function  ({taskList, ToggleTaskStatus}) {
	let allTaskList = taskList.map((currentTask, id) => {
		return (
			<Task task={taskList[id]} ToggleTaskStatus={ToggleTaskStatus} />
		)
	})


	return (
		<>
			{allTaskList}
		</>
	)
}

export default AllTasks;