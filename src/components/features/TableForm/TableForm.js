import { Button, Form, Stack, Col, Row } from "react-bootstrap"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTableStatus } from "../../../redux/tableStatusRedux"
import { editTable, editTableRequest } from "../../../redux/tablesRedux"
import styles from './TableForm.module.scss'
import { set } from "lodash"
import { useNavigate } from "react-router"


const TableForm = props => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const status = useSelector(state => getAllTableStatus(state))
	const [sStatus, setSStatus] = useState(props.status) //selected status
	const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount)
	const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount)
	const [bill, setBill] = useState(props.bill)

	const handleStatusChange = e => {
		setSStatus(e.target.value)
		if (e.target.value === 'cleaning' || e.target.value === 'free') {
			setPeopleAmount(0);
		  }
		if (e.target.value !== 'busy') {
			setBill(0)
		}
	}

	const maxPeopleAmountChange = (e) => {
		if(e.target.value >= 0 && e.target.value <= 10){
			if (e.target.value < peopleAmount) {
				setMaxPeopleAmount(e.target.value);
				setPeopleAmount(e.target.value);
			} else { setMaxPeopleAmount(e.target.value)}
		}
	}
	const peopleAmountChange = (e) => {
		if (sStatus !== 'free') {
			setPeopleAmount(0)
		}
		console.log(e.target.value)
		if (e.target.value >= 0 && e.target.value <= maxPeopleAmount) {
			setPeopleAmount(e.target.value)
		}
	}
	const handlePABlur = () => { /// handle People Amount Blur
		if (peopleAmount === '') {
			setPeopleAmount(0)
		}
	}
	const handleMPABlur = () => { /// handle Max People Amount Blur
		if (maxPeopleAmount === '') {
			setMaxPeopleAmount(10)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(editTable({id: props.id, status: sStatus, peopleAmount: parseInt(peopleAmount), maxPeopleAmount: parseInt(maxPeopleAmount), bill: parseInt(bill)}))
		dispatch(editTableRequest({id: props.id, status: sStatus, peopleAmount: parseInt(peopleAmount), maxPeopleAmount: parseInt(maxPeopleAmount), bill: parseInt(bill)}))
		navigate('/')
	}
	return (
		<Stack gap={2} className={`${styles.root} col-md-5`}>
			<Form onSubmit={e => handleSubmit(e)}>
				<Form.Group className={styles.row} as={Row}>
					<Form.Label column sm="2" className="fw-bold">Status: </Form.Label>
					<Col sm="10">
						<Form.Select 
						value={sStatus}
						onChange={ e => handleStatusChange(e)}>
							{status.map(status =><option key={status.id}>{status.title}</option> )}
						</Form.Select>
					</Col>
				</Form.Group>
				<Form.Group className={styles.row} as={Row}>
					<Form.Label column sm='2' className="fw-bold">People: </Form.Label>
					<Col>
						<Form.Control 
						className={styles.people}
						type="text" 
						value={sStatus === 'cleaning' || sStatus === 'free' ? 0 : peopleAmount} 
						onChange={e => peopleAmountChange(e)}
						onBlur={handlePABlur} />
						<span>/</span>
						<Form.Control 
						className={styles.people}
						value={maxPeopleAmount} 
						type='text' 
						onChange={e => maxPeopleAmountChange(e)}
						onBlur={handleMPABlur}/>
					</Col>	
				</Form.Group>
				{sStatus === 'busy' &&
				<Form.Group className={styles.row} as={Row}>
					<Form.Label column sm='2' className="fw-bold">BIll: </Form.Label>
					<Col>
						<span>$</span>
						<Form.Control 
						className={styles.bill}
						type="text" 
						value={bill} 
						onChange={e => !isNaN(e.target.value) && e.target.value >= 0  ? setBill(e.target.value) : setBill(0)} />
					</Col>
				</Form.Group>
				}
				<Button variant="primary" type="submit">Update</Button>
			</Form>
		 </Stack>
		
	)
}
export default TableForm