/* eslint-disable jsx-a11y/anchor-has-content */

import React, { Component } from 'react';
import { Carousel, Image, OverlayTrigger, Button, Card, Jumbotron, Tooltip } from 'react-bootstrap';
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
          <h1>Hi! I'm Morgan! Security Developer, Analyst & Hobbyist</h1>
          <hr className="rounded"></hr>
          <h2>
            My passion is in cyber security with a focus on Machine Learning and Cloud Services. However, I also have an interest in infrastructure, back-end and website development.<hr className="rounded"></hr>When I'm not working on productive software projects, I'm procrastinating by playing video games, upgrading my PC or Airsoft gear, working out in the gym or drinking excessive amounts of tea!
          </h2>
        </Jumbotron>
        <Card className="text-center">
          <Card.Header as="h1">Previous and Current Work</Card.Header>
          <Card.Body>
            <div className="card-group">
              <Card className="text-center">
                <Button
                  onClick={() => this.setState({showEye: true})}
                  className="project-button"
                  size="lg"
                  block
                >
                  <img id="eye_project_image" src="./eye.png" alt="eye-of-horus-logo" />
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
                  <img id="dnd_project_button" src="./dnd.png" alt="oghma-logo"/>
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
            <Card.Text>
              <a id="project_footer" href="https://github.com/sponsors/M-Davies" target="_blank" rel="noreferrer">
                I'm always looking for more opportunities to test my skills in both programming and security, no matter the quantity or difficulty of work required.
                <br/>
                Sponsor me today by clicking here!
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header as="h1">Testimonials</Card.Header>
          <Card.Body>
            <Carousel>
              <Carousel.Item>
                <Image className="testimonial-image" src="./george.jpeg" roundedCircle></Image>
                <h2>George Adams - Program Manager @ Microsoft</h2>
                <strong>"From day 1 Morgan demonstrated the ability to learn quickly and collaborate with hundreds of contributors all over the world. Because AdoptOpenJDK is a public (open-source) project, Morgan had to learn how to engage with developers, end-users and even C-Level execs and he did this with ease. Morgan tackles all challenges in a positive way and consistently exceeds expectations. I often give Morgan a task expecting it to take a week and find that he’s completed it the next day.<br/><br/>Morgan is a true asset to the AdoptOpenJDK ecosystem and that’s the main reason that we decided to take him on part time while he finished his studies. Morgan regularly reviews code changes from senior and even principle developers and often spots bugs/required changes – something that takes a lot of skill to develop. I would strongly recommend Morgan to any employer and he will be a great asset to any company."</strong>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="testimonial-image" src="./martijn.jpeg" roundedCircle></Image>
                <h2>Martijn Verburg - Principle Engineering Group Manager @ Microsoft</h2>
                <strong>"Morgan has been a superb contributor to AdoptOpenJDK (now Eclipse Adoptium). His work has been critical in maintaining our build scripts and CI/CD pipelines so that we can release business-ready OpenJDK binaries to millions of users around the world (270M+ downloads). Morgan is a good communicator and takes great care in providing documentation and testing when delivering features. I'd highly recommend him to any software development team!"</strong>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="testimonial-image" src="./shelley.jpeg" roundedCircle></Image>
                <h2>Shelley Lambert - Manager @ RedHat</h2>
                <strong>"Morgan is an exceptionally skilled colleague that I have had the pleasure to work with in the past year or two at the AdoptOpenJDK (now Eclipse Adoptium) open-source project. Over and above the technical skills he has brought to the project, and what makes his presence very valuable to the project is the thorough and diligent way he communicates, tests and shares his work. I am happy to give this recommendation to potential employers, and I hope I am able to continue to have a chance to work with Morgan in the future."</strong>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="testimonial-image" src="./stewart.jpeg" roundedCircle></Image>
                <h2>Stewart Addison - Senior Software Engineer @ RedHat</h2>
                <strong>"Having worked with Morgan over most of 2019/2020, I have been impressed with his work ethic. He has handled a lot of work resolving test case issues at AdoptOpenJDK and worked on other areas too including a not insignificant modification to the build processes and scripts to enable parallel builds in Jenkins which has very much helped to achieve IBM's goals of expediting releases at AdoptOpenJDK and getting the releases as close as possible to the upstream OpenJDK GAs. Morgan has not shown any reluctance to get involved in anything and has always been responsive and keen when I've needed assistance from him. The work he has recently done to reduce the build backlog has been extremely welcome to the project and is very noticeable in the issue charts"
                </strong>
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
        <div className="card-group">
          <Card className="text-center" id="skills_card">
            <Card.Header as="h1">Skills & Experience</Card.Header>
            <Card.Body className="skill-wrapper">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Angular</Tooltip>}
              >
                <img className="skill-image" src="./angular.png" alt="angular" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">ReactJS</Tooltip>}
              >
                <img className="skill-image" src="./react.png" alt="react" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Kotlin</Tooltip>}
              >
                <img className="skill-image" src="./kotlin.png" alt="kotlin" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Java</Tooltip>}
              >
                <img className="skill-image" src="./java.png" alt="java" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Metasploit Exploitation Framework</Tooltip>}
              >
                <img className="skill-image" src="./metasploit.png" alt="metasploit" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Ghidra Reverse Engineering</Tooltip>}
              >
                <img className="skill-image" src="./ghidra.png" alt="ghidra" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">NodeJS</Tooltip>}
              >
                <img className="nodejs-skill-image" src="./nodejs.png" alt="nodejs" />
              </OverlayTrigger>
              <br/>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Jenkins CI/CD</Tooltip>}
              >
                <img className="skill-image" src="./jenkins.png" alt="jenkins" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Docker</Tooltip>}
              >
                <img className="skill-image" src="./docker.png" alt="docker" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Wireshark</Tooltip>}
              >
                <img className="skill-image" src="./wireshark.png" alt="wireshark" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Nmap</Tooltip>}
              >
                <img className="skill-image" src="./nmap.png" alt="nmap" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Hashcat</Tooltip>}
              >
                <img className="skill-image" src="./hashcat.png" alt="hashcat" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Forensic Tool Kit</Tooltip>}
              >
                <img className="skill-image" src="./ftk.png" alt="ftk" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Scalpel Data Carving</Tooltip>}
              >
                <img className="skill-image" src="./scalpel.png" alt="scalpel" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Greenbone OpenVAS</Tooltip>}
              >
                <img className="skill-image" src="./openvas.png" alt="openvas" />
              </OverlayTrigger>
              <br/>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">AWS S3</Tooltip>}
              >
                <img className="skill-image" src="./s3.png" alt="s3" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">AWS Kinesis</Tooltip>}
              >
                <img className="skill-image" src="./kinesis.png" alt="kinesis" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">AWS Rekognition</Tooltip>}
              >
                <img className="skill-image" src="./rekognition.png" alt="rekognition" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Microsoft Azure</Tooltip>}
              >
                <img className="skill-image" src="./azure.png" alt="azure" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Google Firebase</Tooltip>}
              >
                <img className="skill-image" src="./firebase.png" alt="firebase" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Kali Linux</Tooltip>}
              >
                <img className="skill-image" src="./kali.png" alt="kali" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Parrot Linux</Tooltip>}
              >
                <img className="skill-image" src="./parrot.png" alt="parrot" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Jest Test Framework</Tooltip>}
              >
                <img className="skill-image" src="./jest.png" alt="jest" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Git & GitHub Actions</Tooltip>}
              >
                <img className="skill-image" src="./git.png" alt="git" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Agile Framework</Tooltip>}
              >
                <img className="skill-image" src="./agile.png" alt="agile" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-bottom">Splunk</Tooltip>}
              >
                <img className="skill-image" src="./splunk.png" alt="splunk" />
              </OverlayTrigger>
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
