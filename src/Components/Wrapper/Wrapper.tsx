import React, {Suspense, MouseEvent, useState} from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

const AllTasks = React.lazy(() => import('./../Tasks/AllTasks'));
const ActiveTasks = React.lazy(() => import('./../Tasks/ActiveTasks'));
const CompletedTasks = React.lazy(() => import('./../Tasks/CompletedTasks'));

function Navigation () {
	let setActive = ({isActive} : {isActive: boolean}) => isActive ? "tasks-menu__route--active" : "tasks-menu__route";

	interface currentTaskList {
		task: string,
		complete: boolean,
	}

	let testTask : currentTaskList = {
		task: 'Test Task 1',
		complete: false,
	}

	let [taskList, addNewtask] = useState([testTask]);

	return (
		<div className="tasks-menu">
			<div className="tasks-menu-info tasks-menu-elem">5 items left</div>
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

function Wrapper () {
	return (
		<main className="main">
			<h1 className="main-title">ToDo List</h1>
			<div className="main-wrapper">
				<input className="tasks-input" type="text" placeholder="Whats need to be done?"></input>
				<div className="tasks-list">
					<Suspense fallback={<div>Загрузка</div>}>
				        <Routes>
				        	<Route path="/" element={<AllTasks/>}/>
					        <Route path="/active" element={<ActiveTasks/>}/>
					        <Route path="/completed" element={<CompletedTasks/>}/>
				        </Routes>
			        </Suspense>
				</div>
				<Navigation/>
			</div>
		</main>
	)
}



export default Wrapper;