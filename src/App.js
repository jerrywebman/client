import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsForm from "./components/NewsForm";
import NewsEdit from "./components/NewsEdit";
import NewsInfo from "./components/NewsInfo";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Advertise from "./components/resources/Advertise";
import MarketAnalysis from "./components/resources/MarketAnalysis";
import Basics from "./components/resources/Basics";
import { Container } from "reactstrap";
import { AuthProvider } from "./components/services/Auth";
import Login from "./components/forms/Login";

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit/:id" component={NewsEdit} />
            <Route path="/news/:id" component={NewsInfo} />
            <Route path="/create" component={NewsForm} />
            <Route path="/Markets" component={MarketAnalysis} />
            <Route path="/Advertise" component={Advertise} />
            <Route path="/Basics" component={Basics} />
            <Route path="/AddNews" component={NewsForm} />
            <Route path="/cnasecret" component={Login} />
          </Switch>
        </Container>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
