import * as React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Layout from "./Layout";

class App extends React.Component {
  public render(){
    return(
       <Container fluid>
        <Layout />
      </Container>
    )
  }
}


export default App;