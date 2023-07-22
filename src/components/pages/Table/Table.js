import { Container, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getTableById } from "../../../redux/tablesRedux"
import Title from "../../common/Title/Title"
import TableForm from "../../features/TableForm/TableForm"

const Table = () => {
	const {id} = useParams()
	const tableData = useSelector(state => getTableById(state, parseInt(id)))
	
	console.log(id, tableData)
return (
  <Container>
    {typeof tableData !== "undefined" ? (
      <div>
        <Title>Table {tableData.id}</Title>
        <TableForm {...tableData} />
      </div>
    ) : (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )}
  </Container>
);
}

export default Table