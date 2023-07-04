import { Button, ListGroup, Stack } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const TableListItem = props => {
return(
	<ListGroup.Item>
		<Stack direction="horizontal" gap={3}>
			<h2>{props.children}</h2>
			<p className="my-auto "><span className="fw-bold">Status: </span>{props.status}</p>
			<Button className="ms-auto" as={NavLink} to={`/table/${props.id}`}>Show more</Button>
		</Stack>
	</ListGroup.Item>
	
)
}
export default TableListItem	