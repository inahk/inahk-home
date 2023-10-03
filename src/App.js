import React, { useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AppProvider } from "./constants/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Design from "./components/Design";
import Art from "./components/Art";
import Commission from "./components/Commission";
import "./App.scss";

function PageWithTransition() {
  const location = useLocation();
  const transitionRef = React.createRef();

  return (
    <TransitionGroup className="animation-container">
      <CSSTransition
        key={location.key} // 이 부분에서 key 값을 설정
        classNames="page"
        timeout={2400}
        nodeRef={transitionRef}
      >
        <div ref={transitionRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/Art" element={<Art />} />
            <Route path="/Commission" element={<Commission />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <PageWithTransition />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
