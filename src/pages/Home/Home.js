import React from 'react';
import IntroBlobs from "../../components/Blobs/IntroBlobs"
import ProjectCard from "../../components/ProjectCard"
import AboutMe from "../../components/AboutMe"
import "../../components/styles.css"
// import LetsGo from "../../images/lets-go-img.png"
import { FaHtml5 } from "react-icons/fa"
// import { FaNodeJs } from "react-icons/fa"
// import { SiTravisci } from "react-icons/si"
// import { SiHeroku } from "react-icons/si"
// import { SiMysql } from "react-icons/si"
// import { SiJest } from "react-icons/si"


function Home() {
    return (<div>
        <IntroBlobs />
        <AboutMe />
        <ProjectCard
            title=" 'Let's Go' Travel Planner"
            description="'Let's Go' Travel Planner is a convenient planner that allows you to plan your future vacations, work trips, weekends away with just a few clicks. By pulling from both a well revered restaruant review API and expidition API you can save must-visit landmarks, experiences and restaurants. Since we implemented passport Authentication on visitng the site, When you wish to review your selections you can access your own personal itinerary where you'll find your choices grouped by destination. 
    
    In this group project applicaiton I was tasked with setting up the database to allow for the app to operate as a full CRUD application and applying the CSS design to the page."
            // image={LetsGo}
            gitLink="https://github.com/Mcilhaggis/lets-go-travel-planner"
            siteLink="https://stormy-springs-60842.herokuapp.com/"
            icons={FaHtml5}
        >
            <FaHtml5 />
        </ProjectCard>



        <ProjectCard
            title="It's 5 O'clock somewhere"
            description="Ever wanted to justify a drink at any time of the day? Life's stressful, we get it. This application will take in your drink preferences and suggest cocktails that you can make from the comfort of your own home AND it'll let you know where in the world it's 5pm incase anyone is judging.
    
    In this group project application I provided the group with the concept and functionality which the team chose to move forward with. Personally I was responsible for creating the dynmically populated modal feauture that uses local storage to save users favourite tipples"
            // image={}
            gitLink="https://github.com/nsuroghon/5-o-Clock-Somewhere"
            siteLink="https://nsuroghon.github.io/5-o-Clock-Somewhere/" />


        <ProjectCard
            title="Burger Logger"
            description="A practice in coding, from scratch, a CRUD application with a fun twist. This application allows the user to input burgers they'd like to eat and switch them to eaten in another column. Then, they have the option to remove them from the list.
    
    This project solidified my understanding of the steps required to provide a complete functioning application connected to an SQL database."
            // image={}
            gitLink="https://github.com/Mcilhaggis/burger-logger"
            siteLink="https://fast-ravine-10902.herokuapp.com/" />


        <ProjectCard
            title=""
            description=""
            // image=""
            gitLink=""
            siteLink="" />


        <ProjectCard
            title="Employee Tracker"
            description="This Node.js application was an exploration of writing node based application connected to a mySQL database. It holds full CRUD functionality and utilises various npm packages to enhance the functoinality and delivery.
    
    The intention is to allow a user to keep track of departments, managers, employees, department spending and the working relationships between the staff."
            // image=""
            gitLink="https://github.com/Mcilhaggis/employee-tracker"
        />


        <ProjectCard
            title=""
            description=""
            // image=""
            gitLink=""
            siteLink="" />
    </div>
    )
}

export default Home; 