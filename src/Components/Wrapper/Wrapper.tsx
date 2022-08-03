import React, {Suspense, MouseEvent, useState, useRef} from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {taskList} from '../../interfaces/taskList'
import {taskInfo} from '../../interfaces/taskList'

import taskInputIcon from '../../img/task-input__arrow.png'


const AllTasks = React.lazy(() => import('./../Tasks/AllTasks'));
const ActiveTasks = React.lazy(() => import('./../Tasks/ActiveTasks'));
const CompletedTasks = React.lazy(() => import('./../Tasks/CompletedTasks'));




function Wrapper () {


	let Navigation: React.FC<taskList> = function ({taskList}) {
		let setActive = ({isActive} : {isActive: boolean}) => isActive ? "tasks-menu__route--active" : "tasks-menu__route";
		return (
			<div className="tasks-menu">
				<div className="tasks-menu-info tasks-menu-elem">{taskList.length} items left</div>
				<div className="tasks-menu-routes tasks-menu-elem">
					<NavLink className={setActive} to="/">All</NavLink>
					<NavLink className={setActive} to="/active">Active</NavLink>
					<NavLink className={setActive} to="/completed">Completed</NavLink>
				</div>
				<div className="tasks-menu-reset tasks-menu-elem">
					<button className="tasks-menu-reset__button">clear all</button>
				</div>
			</div>
		)
	}

	let testTask : taskInfo = {
		taskText: 'Test Task 1',
		completed: false,
	}

	let [taskList, addNewTask] = useState([testTask]);
	let inputInner = useRef<HTMLInputElement>(null);

	function addTask () {	
		if (inputInner.current != null ) {
			if (inputInner.current.value != "") {
				addNewTask([{"taskText": inputInner.current.value}, ...taskList])
				console.log(inputInner.current.value)
				inputInner.current.value = "";
			}	
		}
	}
	
	return (
		<main className="main">
			<h1 className="main-title">ToDo List</h1>
			<div className="main-wrapper">
				<div className="task-search-field">
					<input className="tasks-input" type="text" placeholder="Whats need to be done?" ref={inputInner} />
					<img className="task-input__image" src={taskInputIcon} alt="taskInputIcon" onClick={addTask}/>
				</div>
				<div className="tasks-list">
					<Suspense fallback={<div>Загрузка</div>}>
				        <Routes>
				        	<Route path="/" element={<AllTasks taskList={taskList}/>}/>
					        <Route path="/active" element={<ActiveTasks />}/>
					        <Route path="/completed" element={<CompletedTasks />}/>
				        </Routes>
			        </Suspense>
				</div>
				<Navigation taskList={taskList}/>
			</div>
		</main>
	)
}


export default Wrapper;