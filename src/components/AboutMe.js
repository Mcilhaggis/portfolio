import React from "react";
import "./styles.css";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaRegFilePdf } from "react-icons/fa"
import img from "../images/self-image.jpg"
import Resume from "../Rachael-McIlhagga-Technical-Resume.pdf"




function AboutMe() {
    return (
        <div className=" about-container container-fluid">

            <div className="flex-row card d-flex flex-wrap justify-content-sm-center">
                <div className="about-details col-md-10 col-lg-4 text-left">
                    <h1 className="mt-4">About Me</h1>
                    <p className="project-text mt-3">I'm  I'm Rachael, a <strong className="about-strong">Full-Stack Web Developer</strong> originally from Edinburgh and currently based in Toronto, Canada. Having worked in the service industry for almost 10 years and dabbled with fashion I'm now putting two together and  <strong className="about-strong">offering thoughtfully designed coding solutions</strong> to everyday business problems and all  <strong className="about-strong">with a smile :)</strong> 
                    <br></br><br></br>
                     In addition to persuing a digital career I also Chair the growing non-profit  <a href="https://getwellgamers.ca" target="_blank" rel="noopener noreferrer">Get Well Gamers Canada</a></p>
                    <p>Phone: 905-931-0014</p>
                    <p>Email: rachael.mcilhagga@live.co.uk</p>
                    {/* Container for logo icons of technologies and frameworks used */}
                    <div className="d-flex justify-content-around align-items-center mb-5 mt-4">
                        <a href="https://www.linkedin.com/in/rachael-mcilhagga-fullstack-developer/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="icons" /></a>
                        <a href="https://github.com/Mcilhaggis" target="_blank" rel="noopener noreferrer"><FaGithub className="icons" /></a>
                        <a href="https://twitter.com/breadlikerach" target="_blank" rel="noopener noreferrer"><FaTwitter className="icons" /></a>
                        <a href={Resume} target="blank" ><FaRegFilePdf className="icons" /></a>
                    </div>


                </div>

                <div className="project-image-container text-center col-md-8 col-lg-3 ">
                    <div className="blob-project-one-back">
                        <div className="blob-project-two-front">
                            <img className="aboutImage img-responsive mb-5 mt-5" src={img} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;