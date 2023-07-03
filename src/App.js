import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/tablesRedux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Table from "./components/pages/Table/Table";
import WrongAddress from "./components/pages/WrongAddress/WrongAddress";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/table/:id" element={<Table />}/>
        <Route path="/*" element={<WrongAddress />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
