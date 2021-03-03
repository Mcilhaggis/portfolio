import React from "react";
import "./styles.css";


function ProjectCard({title, description, image, gitLink, siteLink, FaHtml5}) {
    console.log(FaHtml5)
    return (
        <div className="container card-container ">
            <div className="flex-row card d-flex flex-wrap justify-content-sm-center">
                <div className="project-image-container text-center col-md-8 col-lg-5 justify-content-md-center ">
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
                        <i>{FaHtml5}</i>

                    </div>

                    <a className="gitLink" href={gitLink} target="_blank" rel="noopener noreferrer"><button className="m-3 btn">Github</button></a>
                    <a className="siteLink" href={siteLink} target="_blank" rel="noopener noreferrer"><button className="m-3 btn">Live Site</button></a>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard;