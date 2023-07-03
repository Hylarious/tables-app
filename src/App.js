import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/tablesRedux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  
  return (
    <Container>
      Hello World
    </Container>
  );
}

export default App;
