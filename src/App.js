import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import { SocialIcon } from 'react-social-icons';


//Components
import Home from './Components/Home'
import NewPoll from './Components/NewPoll'
import PollingStation from './Components/PollingStation'

//Image
import brandlogo from "./assets/brandlogo.jpg";


import getConfig from './config'
import { async } from 'regenerator-runtime/runtime';
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {

  const changeCandidatesFunction = async (prompt) => {
    console.log(prompt);
    let namePair = await window.contract.getCandidatePair({ prompt: prompt });
    localStorage.setItem("Candidate1", namePair[0]);
    localStorage.setItem("Candidate2", namePair[1]);
    localStorage.setItem("prompt", prompt);
    window.location.replace(window.location.href + "PollingStation");
  };

  return(
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img alt=""
          src=  {brandlogo}
          height="50"
          className="d-inline-block align-center"
        />{' '}
          Vote For You
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto"> </Nav>
            <Nav>
              <Nav.Link href = "/NewPoll">NewPoll</Nav.Link>
              <Nav.Link onClick={window.accountId === '' ? login : logout}> {window.accountId === "" ? "Login" : window.accountId} </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home changeCandidates={changeCandidatesFunction}/>} />
        <Route path="/NewPoll" element={<NewPoll />} />
        <Route path="/PollingStation" element={<PollingStation />} />
     </Routes>

     
    <div style={{paddingTop:"100px"}}>
     <Navbar style={{backgroundColor:"#E0EEEE"}} variant="light">
        <Container >
            <Nav><h4>Contact Us</h4></Nav>
            <Nav className="mx-auto"> </Nav>
            <Nav>
              <Nav> <SocialIcon url="https://twitter.com/aman_m06" /> </Nav>&nbsp;
              <Nav> <SocialIcon url="https://www.linkedin.com/in/iamstark/" /> </Nav>&nbsp;
              <Nav> <SocialIcon url="https://github.com/i-am-stark" /> </Nav>&nbsp;
              <Nav> <SocialIcon url="https://www.instagram.com/_amanmaury/" /> </Nav>
            </Nav>
        </Container>
      </Navbar>
      </div>
    </Router>
  );
  }