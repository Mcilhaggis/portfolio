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
            <div className="row card d-flex">
                <div className="project-details d-inline-block col-md-12 col-lg-7 text-center mt-3">
                    <h1 className="">Project One</h1>
                    <p className="project-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    {/* Container for logo icons of technologies and frameworks used */}
                    <div class="d-flex justify-content-md-around  logoContainer ">
                        <FaHtml5 className="app-logo" />
                        <FaNodeJs className="app-logo" />
                        <SiHeroku className="app-logo" />
                        <SiTravisci className="app-logo" />
                        <SiMysql className="app-logo" />
                        <SiJest className="app-logo" />
                    </div>

                    <button className="m-2 btn">Github</button>
                    <button className="m-2 btn">Live Site</button>

                </div>
                <div className="project-image-container d-inline-block text-center float-right col-md-12 col-lg-4">
                    <div className="blob-project">
                        <div className="blob-project-inner">
                            <img className="projectImage img-responsive mb-5" src="http://placehold.it/350" alt=""></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard;