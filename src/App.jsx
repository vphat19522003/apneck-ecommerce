import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
