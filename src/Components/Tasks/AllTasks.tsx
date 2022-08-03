import {taskList} from '../../interfaces/taskList'
import {Task} from '../../index'

let AllTasks: React.FC<taskList> = function  ({taskList}) {
	let allTaskList = taskList.map((task, id) => {
		return (
			<Task taskText={task.taskText}/>
		)
	})

	return (
		<>
			{allTaskList}
		</>
	)
}

export default AllTasks;