import React from "react";
import "./styles.css";




function ProjectCardTwo({ title, description, image, gitLink, siteLink, node, html, travis, heroku, sql, jest, materialize, javascript }) {

    return (
        // container for the whole div
        <div className="container-fluid card-container-two">
            {/* Adds flex styling to the whole div */}
            <div className="flex-row card d-flex flex-wrap justify-content-sm-center">
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
                <div className="project-image-container justify-content-md-center ">

                <div className="project-image-container col-md-8 col-lg-10 justify-content-lg-right ">
                    <div className="blob-project-two-back">
                        <div className="blob-project-two-front">
                            <img className="projectImage img-responsive mb-5 mt-5" src={image} alt=""></img>
                        </div>
                    </div>
                </div>
</div>

            </div>
        </div>
    )
}

export default ProjectCardTwo;