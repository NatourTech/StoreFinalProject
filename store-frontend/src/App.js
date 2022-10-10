import './App.css';
// import data from "./data";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Product from './screens/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">lib-store</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/office-products" element={<ProductScreen />}></Route>
            <Route path="/office-products/:slug" element={<Product />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
