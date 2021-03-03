import React from 'react';
import IntroBlobs from "../../components/Blobs/IntroBlobs"
import ProjectCard from "../../components/ProjectCard"
import AboutMe from "../../components/AboutMe"
import "../../components/styles.css"



function Home() {
    return (<div>
    <IntroBlobs />
    <AboutMe />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    </div>
    )
}

export default Home; 