import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadEmployee } from "./slices/employeeSlice";
import styled from "styled-components";

import { NavBar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { NewEmployee } from "./pages/NewEmployee";
import { AllEmployee } from "./pages/AllEmployee";
import { Error } from "./pages/Error";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loadEmployee());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <AppContainer>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newemployee" element={<NewEmployee />} />
          <Route path="/allemployee" element={<AllEmployee />} />
          <Route path="notFound" element={<Error />} />
          <Route path="*" element={<Navigate to="/notFound" replace />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 1fr;
`;
