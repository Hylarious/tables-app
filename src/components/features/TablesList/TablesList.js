import {  useSelector } from "react-redux"
import {  getAllTables } from "../../../redux/tablesRedux"
import { ListGroup, Spinner } from "react-bootstrap"
import TableListItem from "../TableListItem/TableListItem"
import { Navigate, useNavigate } from "react-router-dom"


const TablesList = () => {
		// const navigate = useNavigate()
		const tables = useSelector(state => getAllTables(state))
		console.log(tables)
	
		// if (tables.length === 0) {navigate(0)} 

		return (
		<ListGroup className="list-group-flush">
			{tables.length === 0 ? 
				<Spinner animation="border" role="status">
      				<span className="visually-hidden">Loading...</span>
    			</Spinner> 
				: tables.map(table => {return <TableListItem key={table.id} id={table.id} status={table.status}>Table {table.id}</TableListItem>})}
		</ListGroup>
		)
}
export default TablesList