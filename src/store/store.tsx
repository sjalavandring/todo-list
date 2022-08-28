import {createStore} from 'redux'
import {taskInfo} from '../interfaces/taskList'
import { composeWithDevTools } from '@redux-devtools/extension';
// import {Provider, useDispatch} from 'react-redux'

let taskList: taskInfo[] = ([]);


const taskStateReducer = (state: any = taskList, action: any) => {
	switch(action.type){
		case "toggle":
			// state.splice(action.id, 1, {...state[action.id], 'completed': !state[action.id].completed})
			// return [...state, state.filter((elem: taskInfo) => elem.id != action.id)[0].completed = !state[action.id].completed]
			return state.map((elem: taskInfo) => {
				console.log('elem.id ', elem.id, 'action.id', action.id)
				return state[elem.id].id == action.id ? {...elem, 'completed': !elem.completed} : elem;
			})
		case 'add': 
			console.log(state);
			return [{"id": state.length, "taskText": action.text}, ...state,]
		case 'clean': 
			return ([])
		default:
			return state;
	}
}

const todoStore = createStore(taskStateReducer, composeWithDevTools())

export {todoStore};