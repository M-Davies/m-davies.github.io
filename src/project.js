import React from 'react'
import { Button, Modal } from 'react-bootstrap'

import "./App.css"

export default function ProjectModal (props) {
    if (props.modalname === "eye") {
        return (
          <Modal
            className="project-modal-content"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">The Eye of Horus</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>A face and gesture recognition authentication system</h4>
              <p>
                In this security conscious world, the thorny issue of password viability and retention continues to grow. Due to the ever-present need for cyber accessibility and potential shortcomings of stand-alone face recognition, effective universal authentication techniques are hard to come by. The Eye of Horus solves these problems by providing a lightweight, affordable, biometric authentication system for the casual home user.<br/><br/>With AWS and Python at its core, "The Eye" can be deployed on websites, locally and in the cloud, it’s machine learning API affordable and accurate at identifying a user's gestures and face alike! The Eye orchestrates cloud-based facial and gesture recognition technology into a set of system locking and unlocking combinations, combining the best of multi-factor authentication without the need for a second device. Moreover, it allows anyone to access systems using easy to retain instinctual movements rather than the arduous task of remembering character combinations. From the point of view of those who struggle to digitalize or those who wish to embrace modern technology, seeing security in action is better than believing in it.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button href="https://github.com/M-Davies/eye-of-horus" target="_blank" rel="noreferrer">Repository</Button>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    } else if (props.modalname === "oghma") {
        return (
          <Modal
            className="project-modal-content"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Oghma</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>A dungeons and dragons discord bot</h4>
              <p>
                A Python data parser and dice roller for dungeons and dragons groups on discord. The bot is unique as it only uses publically available, open source dungeons and dragons data from the <a href="https://open5e.com/" target="_blank" rel="noreferrer">Open5e</a> API. It is hosted on Heroku.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button href="https://github.com/M-Davies/oghma" target="_blank" rel="noreferrer">Repository</Button>
              <Button variant="success" href="https://top.gg/bot/658336624647733258" target="_blank" rel="noreferrer">Top GG Page</Button>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    } else if (props.modalname === "climate") {
        return (
          <Modal
            className="project-modal-content"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Sheffsense Climate Monitor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>A climate and pollution monitor for the city of Sheffield, UK</h4>
              <p>
                A web application aimed towards making pollution data around Sheffield easily understandable and easily accessible. It specifically focuses on the pollutants PM10 and PM2.5 but does contain data on air quality and the effect it has on human health. I worked on this project with several colleagues as a volunteer for Sheffield university's <a href="https://festivalofthemind.group.shef.ac.uk/" target="_blank" rel="noreferrer">Festival of the Mind 2020</a>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" href="https://festivalofthemind.sheffield.ac.uk/2020/futurecade/invisible-pollution/" target="_blank" rel="noreferrer">Project Page</Button>
              <Button variant="success" href="https://www.sheffsense.uk/" target="_blank" rel="noreferrer">Website</Button>
              <Button href="https://github.com/dambem/ClimateMonitorV2" target="_blank" rel="noreferrer">Repository</Button>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    } else if (props.modalname === "aced") {
        return (
          <Modal
            className="project-modal-content"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Aced Arsenal (IN PROGRESS)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>An Arma 3 development tool for mission makers</h4>
              <p>
                This tool will allow for the easy creation of complex and realistic arsenal loadouts according to the specifications of the user. It will allow mission makers to avoid using the awful in game tool and instead use this tool which is a lot more intelligent, modular and customisable. It will be powered using my own API that I've designed and obtained the data for.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button href="https://github.com/M-Davies/aced-arsenal" target="_blank" rel="noreferrer">Repository</Button>
              <Button variant="success" href="https://github.com/M-Davies/arma-api" target="_blank" rel="noreferrer">Backend API</Button>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    } else if (props.modalname === "uni") {
        return (
          <Modal
            className="project-modal-content"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">University Projects</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Various miscellaneous projects and publications for academia assignments</h4>
              <ul>
                <li>
                  <a href="https://github.com/M-Davies/UniversityProjects/tree/master/AssemblyExploits" target="_blank" rel="noreferrer">AssemblyExploits</a>: A collection of Assembly and C scripts to practice the induction of buffer flow and format string exploits
                </li>
                <li>
                  <a href="https://github.com/M-Davies/UniversityProjects/tree/master/Company%20and%20Cars" target="_blank" rel="noreferrer">Company & Cars</a>: One of the first programming challenges I faced, this is a car renting management system built to OOP principles in C#
                </li>
                <li>
                  <a href="https://github.com/M-Davies/UniversityProjects/tree/master/Embedded%20Programming" target="_blank" rel="noreferrer">Embedded Programming</a>: More buffer overflow exploits and an embedded programming project containing multiple features on a Arduino board
                </li>
                <li>
                  <a href="https://github.com/M-Davies/UniversityProjects/tree/master/Mastermind" target="_blank" rel="noreferrer">Mastermind</a>: A C# adaptation of the classic MasterMind board game
                </li>
                <li>
                  <a href="https://github.com/M-Davies/UniversityProjects/tree/master/SecurityProject" target="_blank" rel="noreferrer">iProwlr</a>: Machine learning location predictor using publicly available data on an individual
                </li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    } else if (props.modalname === "quote") {
        return (
          <Modal
            className="project-modal-content"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Quotebook</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>A quote management web and mobile application</h4>
              <p>
                Built using Angular and Google Firebase, this was the first project where I could properly learn frontend and backend web development techniques.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button href="https://github.com/M-Davies/oghma" target="_blank" rel="noreferrer">Repository</Button>
              <Button variant="success" href="https://sparkfabrik-2896a.web.app/" target="_blank" rel="noreferrer">Website</Button>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    } else {
        return null
    }
}
