import { NavLink } from "react-router-dom"
import { Container, Navbar, Nav} from "react-bootstrap"


const Header = () => {
	return (
	<Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
		<Container>
			<Navbar.Brand as={NavLink} to="/">Table.app</Navbar.Brand>
			<Nav>
				<Nav.Link as={NavLink} to="/">Home</Nav.Link >
			</Nav>
		</Container>
	</Navbar>
	)
}

export default Header