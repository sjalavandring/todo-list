import {Task} from '../../index'

function ActiveTasks () {
	return (
		<>
			<div className="tasks-list-elem">
				<button className="custom-checkbox"></button>	
				<div className="tasks-list-elem__item">Task 1</div>
			</div>
			<div className="tasks-list-elem">
				<button className="custom-checkbox"/>		
				<div className="tasks-list-elem__item">Task 2</div>
			</div>
		</>
	)
}

export default ActiveTasks;