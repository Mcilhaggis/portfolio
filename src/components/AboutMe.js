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
        <div className="container card-container ">
            <div className="flex-row card d-flex flex-wrap">
                <div className="project-details col-md-12 col-lg-7 text-center">
                    <h1 className="mt-4">About Me</h1>
                    <p className="project-text mt-3">I'm  I'm Rachael, a Full-Stack Web Developer originally from Edinburgh and currently based in Toronto, Canada. Having worked in the service industry for almost 10 years and dabbled with fashion I'm now putting two together and offering thoughtfully designed coding solutions to everyday business problems and all with a smile :) 
                    <br></br><br></br>
                     In addition to persuing a digital career I also Chair the growing non-profit  <a href="https://getwellgamers.ca" target="_blank" rel="noopener noreferrer">Get Well Gamers Canada</a></p>
                    Phone: 905-931-0014 Email: rachael.mcilhagga@live.co.uk
                    {/* Container for logo icons of technologies and frameworks used */}
                    <div class="d-flex justify-content-around align-items-center mb-3 mt-4">
                        <a href="https://www.linkedin.com/in/rachael-mcilhagga-fullstack-developer/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="icons"/></a>
                        <a href="https://github.com/Mcilhaggis" target="_blank" rel="noopener noreferrer"><FaGithub className="icons"/></a>
                        <a href="https://twitter.com/breadlikerach" target="_blank" rel="noopener noreferrer"><FaTwitter className="icons"/></a>
                        <a href={Resume} target="blank" ><FaRegFilePdf className="icons"/></a>
                    </div>


                </div>
                <div className="project-image-container text-center col-sm-6 col-lg-5 ">
                    <div className="blob-project">
                        <div className="blob-project-inner">
                            <img className="projectImage img-responsive mb-5 mt-5" src={img} alt=""></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe;