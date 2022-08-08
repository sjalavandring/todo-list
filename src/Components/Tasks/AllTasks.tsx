import {taskListInterface} from '../../interfaces/taskList'
import {taskInfo} from '../../interfaces/taskList'
import {Task} from '../../index'
import {useEffect} from 'react'

interface TasksProps {
	taskList: taskInfo[];
	ToggleTaskStatus: (id: number) => void;
}

let AllTasks: React.FC<TasksProps> = function  ({taskList, ToggleTaskStatus}) {
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