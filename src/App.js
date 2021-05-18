/* eslint-disable jsx-a11y/anchor-has-content */

import React, { Component } from 'react';
import { Button, Modal, Card, Jumbotron } from 'react-bootstrap';
import './App.css';

function ProjectModal (props) {
  console.log("test")
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showEye: false,
      showOghma: false,
      showClimate: false,
      showAced: false
    };
  }

  render () {
    return (
      <div className="Wrapper">
        <Jumbotron id="jumbotron_header">
          <img src="./profile.png" alt="Profile Pic" id="profile_pic" />
          <h1>Hi! I'm Morgan! Developer, Analyst & Hobbyist</h1>
          <hr className="rounded"></hr>
          <h2>
            My passion is in infrastructure and back-end developer, with an interest in cyber security and web development.<hr className="rounded"></hr>When I'm not working on productive software projects, I'm gaming or seeking upgrades to my slowly ageing PC
          </h2>
        </Jumbotron>
        <Card className="text-center">
          <Card.Header as="h1">My Recent Work</Card.Header>
          <Card.Body>
            <div className="card-group">
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showEye: true}) && <ProjectModal modalId="eye" show={this.state.showEye} onHide={() => this.setState({showEye: false})} />}
                  className="project-button"
                  size="lg"
                  block
                >
                  Eye Of Horus
                </Button>
              </Card>
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showOghma: true}) && <ProjectModal modalId="oghma" show={this.state.showOghma} onHide={() => this.setState({showOghma: false})} />}
                  className="project-button"
                  size="lg"
                  block
                >
                  Oghma
                </Button>
              </Card>
            </div>
            <div className="card-group">
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showClimate: true}) && <ProjectModal modalId="climate" show={this.state.showClimate} onHide={() => this.setState({showClimate: false})} />}
                  className="project-button"
                  size="lg"
                  block
                >
                  Climate Monitor
                </Button>
              </Card>
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showAced: true}) && <ProjectModal modalId="aced" show={this.state.showAced} onHide={() => this.setState({showAced: false})} />}
                  className="project-button"
                  size="lg"
                  block
                >
                  Aced Arsenal
                </Button>
              </Card>
            </div>
          </Card.Body>
        </Card>
        <div className="card-group">
          <Card className="text-center" id="skills_card">
            <Card.Header as="h1">Skills</Card.Header>
            <Card.Body>
              Skills here
            </Card.Body>
          </Card>
          <Card className="text-center" id="links_card">
            <Card.Header as="h1">Links & Contact</Card.Header>
            <Card.Body>
            <a href="mailto:morgandavies2020@gmail.com" target="_blank" rel="noreferrer">
              <img className="link-icon" src="./email.png" alt="Email" />
            </a>
            <a href="https://github.com/M-Davies" target="_blank" rel="noreferrer">
              <img className="link-icon" src="./github.png" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/mdavies12/" target="_blank" rel="noreferrer">
              <img className="link-icon" id="linkedin_icon" src="./linkedin.png" alt="LinkedIn" />
            </a>
            </Card.Body>
          </Card>
        </div>
        <footer>
          <a
            id="footer_link"
            href="https://github.com/M-Davies/m-davies.github.io"
            target="_blank"
            rel="noreferrer"
          >
            This website was made with ReactJS and GitHub Pages
          </a>
        </footer>
      </div>
    );
  }
}
