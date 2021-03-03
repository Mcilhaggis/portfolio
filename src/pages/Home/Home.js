import React from 'react';
import IntroBlobs from "../../components/Blobs/IntroBlobs"
import ProjectCard from "../../components/ProjectCard"
import AboutMe from "../../components/AboutMe"
import "../../components/styles.css"
// import LetsGo from "../../images/lets-go-img.png"
import FaHtml5  from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { SiTravisci } from "react-icons/si"
import { SiHeroku } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { SiJest } from "react-icons/si"


function Home() {
    return (<div>
    <IntroBlobs />
    <AboutMe />
    <ProjectCard 
    title=" 'Let's Go' Travel Planner" 
    description="'Let's Go' Travel Planner is a convenient planner that allows you to plan your future vacations, work trips, weekends away with just a few clicks. By pulling from both a well revered restaruant review API and expidition API you can save must-visit landmarks, experiences and restaurants. Since we implemented passport Authentication on visitng the site, When you wish to review your selections you can access your own personal itinerary where you'll find your choices grouped by destination. 
    
    In this applicaiton I was tasked with setting up the database to allow for the app to operate as a full CRUD application and applying the CSS design to the page."
    // image={LetsGo}
    gitLink="https://github.com/Mcilhaggis/lets-go-travel-planner"
    siteLink="https://stormy-springs-60842.herokuapp.com/"
    />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    </div>
    )
}

export default Home; 