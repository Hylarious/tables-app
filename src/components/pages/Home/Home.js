import Title from "../../common/Title/Title"
import TablesList from "../../features/TablesList/TablesList"

const { Container } = require("react-bootstrap")

const Home = () => {
	return (
		<Container>
			<Title>All tables</Title>
			<TablesList />
		</Container>
	)
}

export default Home