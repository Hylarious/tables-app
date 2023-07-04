import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import tablesReducer from "./tablesRedux"
import initialState from "./initialState";
import thunk from "redux-thunk";
import tableStatusReducer from "./tableStatusRedux";


const subreducers = {
	tables: tablesReducer,
	tableStatus: tableStatusReducer
}
const reducer = combineReducers(subreducers);
const store = createStore(
	reducer, 
	initialState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
	
);
export default store