/* eslint-disable jsx-a11y/anchor-has-content */

import React, { Component } from 'react';
import { Card, Jumbotron } from 'react-bootstrap';
import './App.css';

export default class App extends Component {
  render() {
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
