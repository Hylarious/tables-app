import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTableStatus } from "../../../redux/tableStatusRedux"
import { editTable } from "../../../redux/tablesRedux"


const TableForm = props => {

	const dispatch = useDispatch();
	const status = useSelector(state => getAllTableStatus(state))
	const [sStatus, setSStatus] = useState(props.status) //selected status
	const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount)
	const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount)
	const [bill, setBill] = useState(props.bill)

	const handelStatusChange = (e) => {
		setSStatus(e.target.value)
		if(sStatus === 'free') {
			setPeopleAmount(0);
			setBill(0)
		} 
	}


	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(editTable({id: props.id, status: sStatus, peopleAmount: parseInt(peopleAmount), maxPeopleAmount: parseInt(maxPeopleAmount), bill: parseInt(bill)}))
		console.log({status: sStatus, peopleAmount: parseInt(peopleAmount), maxPeopleAmount: parseInt(maxPeopleAmount), bill: parseInt(bill)})
	}
	return (
		<Form onSubmit={e => handleSubmit(e)}>
			<Form.Group>
				<span className="fw-bold">Status: </span>
				<Form.Select 
				value={sStatus}
				onChange={ e => {handelStatusChange(e)}}>
					{status.map(status =><option key={status.id}>{status.title}</option> )}
				</Form.Select>
			</Form.Group>
			<Form.Group>
				<span className="fw-bold">People: </span>
				<Form.Control 
				type="text" 
				value={peopleAmount} 
				onChange={e => setPeopleAmount(e.target.value)} />
				 / 
				<Form.Control 
				value={maxPeopleAmount} 
				type='text' 
				onChange={e =>setMaxPeopleAmount(e.target.value)}/>
			</Form.Group>
			<Form.Group>
			<span className="fw-bold">Bill: </span>
			<Form.Control 
				type="text" 
				value={bill} 
				onChange={e => !isNaN(e.target.value) && e.target.value >= 0  ? setBill(e.target.value) : setBill(0)} />
				$
			</Form.Group>
			<Button variant="primary" type="submit">Update</Button>
		</Form>
	)
}
export default TableForm