import {taskList} from '../../interfaces/taskList'
import {Task} from '../../index'

let AllTasks: React.FC<taskList> = function  ({taskList}) {
	let allTaskList = taskList.map((currentTask, id) => {
		return (
			<Task task={currentTask} />
		)
	})

	return (
		<>
			{allTaskList}
		</>
	)
}

export default AllTasks;