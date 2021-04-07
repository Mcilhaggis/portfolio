import React from "react";
import "./styles.css";
// importing icons for socials and resume
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaRegFilePdf } from "react-icons/fa"
// importing icons for skills
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaNpm } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiHeroku } from "react-icons/si"
import { IoLogoNodejs } from "react-icons/io"
import { IoLogoGithub } from "react-icons/io"
import { DiResponsive } from "react-icons/di"
import { GrCli } from "react-icons/gr"
import { GrAccessibility } from "react-icons/gr"


import img from "../images/self-image.jpg"
import Resume from "../Rachael-McIlhagga-Technical-Resume.pdf"




function AboutMe() {
    return (
        <div className=" about-container container-fluid">

            <div className="flex-row card d-flex flex-wrap justify-content-sm-center">
                <div className="about-details col-md-10 col-lg-4 text-left">
                    <h1 className="mt-4">About Me</h1>
                    <p className="project-text mt-3">I'm Rachael, a <strong className="about-strong">Full-Stack Web Developer</strong> originally from Edinburgh and currently based in Toronto, Canada. Having worked in the service industry for almost 10 years and dabbled with fashion I'm now putting two together and  <strong className="about-strong">offering thoughtfully designed coding solutions</strong> to everyday business problems and all  <strong className="about-strong">with a smile :)</strong>
                    {/* Container for icons to links of socials and resume*/}
                    <div className="d-flex justify-content-around align-items-center mb-5 mt-5">
                        <a href="https://www.linkedin.com/in/rachael-mcilhagga-fullstack-developer/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="icons" /></a>
                        <a href="https://github.com/Mcilhaggis" target="_blank" rel="noopener noreferrer"><FaGithub className="icons" /></a>
                        <a href={Resume} target="blank" ><FaRegFilePdf className="icons" /></a>
                    </div>
                     In addition to persuing a digital career I also Chair the growing non-profit  <a href="https://getwellgamers.ca" target="_blank" rel="noopener noreferrer">Get Well Gamers Canada</a></p>
                    <p>Phone: 905-931-0014</p>
                    <p>Email: rachael.mcilhagga@live.co.uk</p>
                </div>

                <div className="project-image-container text-center col-md-8 col-lg-3 ">
                    <div className="blob-project-one-back">
                        <div className="blob-project-two-front">
                            <img className="aboutImage img-responsive blob-project-one-back mb-5 mt-5" src={img} alt=""></img>
                        </div>
                    </div>
                </div>

                {/* container for skills */}
                <div className="skillsMainContainer">
                    <h2>Skills</h2>
                    <div className="skillContainer">
                        <div><FaHtml5 className="icons" /><p>HTML</p></div>
                        <div><FaCss3Alt className="icons" /><p>CSS</p></div>
                        <div><SiJavascript className="icons" /><p>JavaScript</p></div>
                        <div><FaReact className="icons" /><p>React</p></div>
                        <div><IoLogoNodejs className="icons" /><p>Node.js</p></div>
                        <div><FaNpm className="icons" /><p>NPM</p></div>
                        <div><SiMongodb className="icons" /><p>MongoDB</p></div>
                        <div><IoLogoGithub className="icons" /><p>Github</p></div>
                        <div><GrCli className="icons" /><p>CLI</p></div>
                        <div><SiHeroku className="icons" /><p>Heroku</p></div>
                        <div><DiResponsive className="icons" /><p>Responsive</p></div>
                        <div><GrAccessibility className="icons" /><p>Accessiblity</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe;