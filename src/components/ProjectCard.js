import React from "react";
import "./styles.css";
import { FaHtml5 } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { SiTravisci } from "react-icons/si"
import { SiHeroku } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { SiJest } from "react-icons/si"



function ProjectCard() {
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
                    <h1 className="mt-4">Project One</h1>
                    <p className="project-text mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    {/* Container for logo icons of technologies and frameworks used */}
                    <div class="d-flex justify-content-md-around align-items-center mb-3 logoContainer ">
                        <FaHtml5 className="app-logo" />
                        <FaNodeJs className="app-logo" />
                        <SiHeroku className="app-logo" />
                        <SiTravisci className="app-logo" />
                        <SiMysql className="app-logo" />
                        <SiJest className="app-logo" />
                    </div>

                    <button className="m-3 btn">Github</button>
                    <button className="m-3 btn">Live Site</button>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard;