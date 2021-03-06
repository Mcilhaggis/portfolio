import React from "react";
import "./styles.css";




function ProjectCard({ title, description, image, gitLink, siteLink, node, html, travis, heroku, sql, jest, materialize, javascript }) {

    return (
        // container for the whole div
        <div className="container-fluid card-container ">
            {/* Adds flex styling to the whole div */}
            <div className="flex-row card d-flex flex-wrap justify-content-sm-center">
                {/* Holds the blob and image and sets the col width */}
                {/* <div className="project-image-container"> */}

                    <div className="project-image-container col-sm-3 col-md-8 col-lg-4 ">
                        <div className="blob-project-one-back">
                            <div className="blob-project-one-front">
                                <img className="projectImage img-fluid mb-5 mt-5" src={image} alt="project described in blurb adjacent"></img>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                {/* Holds the projects details to buttons */}
                <div className="project-details col-md-12 col-lg-5 text-left ml-4">
                    <h1 className="mt-4 projectTitle">{title}</h1>
                    <p className="project-text mt-3 projectDescription">{description}</p>

                    {/* Container for logo icons of technologies and frameworks used */}
                    <div classNme="d-flex justify-content-around align-items-center mb-5 mt-4">
                        <i className="icons">{node}</i>
                        <i className="icons">{html}</i>
                        <i className="icons">{travis}</i>
                        <i className="icons">{heroku}</i>
                        <i className="icons">{sql}</i>
                        <i className="icons">{jest}</i>
                        <i className="icons">{materialize}</i>
                        <i className="icons">{javascript}</i>

                    </div>
                    {/* buttons */}
                    <a className="gitLink" href={gitLink} target="_blank" rel="noopener noreferrer"><button className="m-3 btn">Github</button></a>
                    <a className="siteLink" href={siteLink} target="_blank" rel="noopener noreferrer"><button className="m-3 btn">Live Site</button></a>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard;