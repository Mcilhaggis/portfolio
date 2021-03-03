import React from "react";
import "./styles.css";
// import { FaHtml5 } from "react-icons/fa"
// import { FaNodeJs } from "react-icons/fa"
// import { SiTravisci } from "react-icons/si"
// import { SiHeroku } from "react-icons/si"
// import { SiMysql } from "react-icons/si"
// import { SiJest } from "react-icons/si"



function ProjectCard({title, description, image, gitLink, siteLink}) {
    return (
        <div className="container card-container ">
            <div className="flex-row card d-flex">
                <div className="project-image-container text-center col-md-6 col-lg-5">
                    <div className="blob-project">
                        <div className="blob-project-inner">
                            <img className="projectImage img-responsive mb-5 mt-5" src="http://placehold.it/350" alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="project-details col-md-12 col-lg-7 text-center">
                    <h1 className="mt-4 projectTitle">{title}</h1>
                    <p className="project-text mt-3 projectDescription">{description}</p>

                    {/* Container for logo icons of technologies and frameworks used */}
                    <div class="d-flex justify-content-md-around align-items-center mb-3 logoContainer ">
                        {/* <FaHtml5 className="icons" />
                        <FaNodeJs className="icons" />
                        <SiHeroku className="icons" />
                        <SiTravisci className="icons" />
                        <SiMysql className="icons" />
                        <SiJest className="icons" /> */}
                    </div>

                    <a className="gitLink" href={gitLink} target="_blank" rel="noopener noreferrer"><button className="m-3 btn">Github</button></a>
                    <a className="siteLink" href={siteLink} target="_blank" rel="noopener noreferrer"><button className="m-3 btn">Live Site</button></a>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard;