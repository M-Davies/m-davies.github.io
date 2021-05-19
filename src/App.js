/* eslint-disable jsx-a11y/anchor-has-content */

import React, { Component } from 'react';
import { Button, Card, Jumbotron } from 'react-bootstrap';
import ProjectModal from './project';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      showEye: false,
      showOghma: false,
      showClimate: false,
      showAced: false,
      showUni: false,
      showQuote: false
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
          <Card.Header as="h1">Previous Work</Card.Header>
          <Card.Body>
            <div className="card-group">
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showEye: true})}
                  className="project-button"
                  id="eye_project_button"
                  size="lg"
                  block
                >
                  <img src="./eye.png" alt="eye-of-horus-logo" />
                </Button>
              </Card>
              <ProjectModal
                modalname="eye"
                show={this.state.showEye}
                onHide={() => this.setState({showEye: false})}
              />
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showOghma: true})}
                  className="project-button"
                  id="oghma_project_button"
                  size="lg"
                  block
                >
                  <img src="https://assets.dicebreaker.com/dungeons-and-dragons-volos-guide-to-monsters-artwork.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/dungeons-and-dragons-volos-guide-to-monsters-artwork.jpg" alt="oghma-logo" id="oghma_project_button_img"/>
                </Button>
              </Card>
              <ProjectModal
                modalname="oghma"
                show={this.state.showOghma}
                onHide={() => this.setState({showOghma: false})}
              />
            </div>
            <div className="card-group">
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showClimate: true})}
                  className="project-button"
                  id="climate_project_button"
                  size="lg"
                  block
                >
                  <img src="./sheffsense.png" alt="climate-logo" id="climate_project_button_img"/>
                </Button>
              </Card>
              <ProjectModal
                modalname="climate"
                show={this.state.showClimate}
                onHide={() => this.setState({showClimate: false})}
              />
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showAced: true})}
                  className="project-button"
                  id="aced_project_button"
                  size="lg"
                  block
                >
                  <img src="./ace.png" alt="aced-logo" id="aced_project_button_img"/>
                </Button>
              </Card>
              <ProjectModal
                modalname="aced"
                show={this.state.showAced}
                onHide={() => this.setState({showAced: false})}
              />
            </div>
            <div className="card-group">
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showUni: true})}
                  className="project-button"
                  id="uni_project_button"
                  size="lg"
                  block
                >
                  <img src="https://d39ner1f41xyl1.cloudfront.net/assets/uopqueenlogomono-156ce0828e4a0d49073bd3135ef7a3f2df130d1ac3612a29a5f0c8d5faf98557.svg" alt="uni-logo" id="uni_project_button_img"/>
                </Button>
              </Card>
              <ProjectModal
                modalname="uni"
                show={this.state.showUni}
                onHide={() => this.setState({showUni: false})}
              />
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showQuote: true})}
                  className="project-button"
                  id="quote_project_button"
                  size="lg"
                  block
                >
                  <img src="./quotebook.png" alt="quote-logo" id="quote_project_button_img"/>
                </Button>
              </Card>
              <ProjectModal
                modalname="quote"
                show={this.state.showQuote}
                onHide={() => this.setState({showQuote: false})}
              />
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
