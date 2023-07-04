
export const getAllTableStatus = state => state.tableStatus;

const createActionName = name => `app/tableStatus/${name};`
const UPDATE_TABLE_STATUS = createActionName('UPDATE_TABLE_STATUS');

export const updateTableStatus = payload => ({ type: UPDATE_TABLE_STATUS, payload});
export const fetchTableStatus = () => {
	return (dispatch) => {
		fetch('http://localhost:3131/api/tableStatus')
		.then(res => res.json())
		.then(tables => dispatch(updateTableStatus(tables)))
	}
}

const tableStatusReducer = (statePart = [], action) => {
	switch (action.type) {
		case UPDATE_TABLE_STATUS: 
			return [...action.payload ]
		default:
			return statePart
	}
}

export default tableStatusReducer