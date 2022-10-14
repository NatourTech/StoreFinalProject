import "./App.css";
// import data from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Product from "./screens/Product";
import NavBarB from "./components/NavBar";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <NavBarB />
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route
                path="/office-products"
                element={<ProductScreen />}
              ></Route>
              <Route
                path="/office-products/:id"
                element={<Product />}
              ></Route>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All Rights Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
