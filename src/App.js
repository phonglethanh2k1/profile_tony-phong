import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
