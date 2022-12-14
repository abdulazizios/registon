import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
