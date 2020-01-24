import React from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
library.add(fab);


function App() {
  return (
    <Router>
      <div>
        <Row>
          <Col className="mt-3 mx-auto" md={6} sm={8} xs={10}>
            <h1 className="text-center"><b>Rhidwan's Personal Blog </b></h1>
            <Row>
              <Col sm={2} xs={2}><img className="avatar" alt="avatar" src="/blog/portrait.jpg" /></Col>
              <Col sm={10} xs={10}>Personal Blog By
                <a href="https://rhidwan.github.io"><u><b> Iqbal Mohammad Rhidwan</b></u></a>
                <p>Here I talk about some work of mine as a <strong>student of Electrical and Electronic Engineering</strong>  and also as a <strong>Programmer</strong></p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Container>
                <Route exact path="/" component={Posts} />
                <Route exact path="/post/:id" component = {Post} />
              </Container>
              
            </Row>  
          </Col>
        </Row>
        <Row>
          
        </Row>

        
      </div>
     
    </Router>
  );
}

export default App;
