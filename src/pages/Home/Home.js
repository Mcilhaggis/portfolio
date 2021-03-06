import React from 'react';

import IntroBlobs from "../../components/Blobs/IntroBlobs"
import ProjectCard from "../../components/ProjectCard"
import ProjectCardTwo from "../../components/ProjectCardTwo"
import AboutMe from "../../components/AboutMe"
// import Footer from "../../components/Footer"
import SectionBar from "../../components/sectionBar"
import "../../components/styles.css"

//Importing icons from react-icons to be executed in the componenets they are rendered to 
// import { FaHtml5 } from "react-icons/fa"
// import { FaNodeJs } from "react-icons/fa"
// import { FaReact } from "react-icons/fa"
// import { SiTravisci } from "react-icons/si"
// import { SiHeroku } from "react-icons/si"
// import { SiMysql } from "react-icons/si"
// import { SiJest } from "react-icons/si"
// import { DiMaterializecss } from "react-icons/di"
// import { DiJavascript1 } from "react-icons/di"




// importing images 
import LetsGoImg from "../../images/lets-go-img.png"
import FiveOclockImg from "../../images/five-oclock-img.png"
import BurgerImg from "../../images/burger-logger-img.png"
import RecipeImg from "../../images/recipe-finder-img.png"
import MindshareImg from "../../images/mindshare-img.png"
import EmployeeDirectoryImg from "../../images/employee-directory-img.png"

//importing icons
import htmlImg from "../../images/icons/html.png"
import travisImg from "../../images/icons/travis.png"
import nodeImg from "../../images/icons/node.png"
import herokuImg from "../../images/icons/heroku.png"
import reactImg from "../../images/icons/react.png"
import sqlImg from "../../images/icons/mysql.png"
import jestImg from "../../images/icons/jest.png"
import javascriptImg from '../../images/icons/js.png'
import materialImg from '../../images/icons/material.png'
import sequelizeImg from '../../images/icons/sequelize.png'

function Home() {
    return (<>
        <IntroBlobs />

        <SectionBar />
        <div id="sectionBar"></div>
        <AboutMe />
        <div className="projectHeader">
            <h2>Projects</h2>
        </div>
        <div id="Projects" className="spaceTwo"></div>
        <ProjectCardTwo
            title="MINDSHARE"
            description="This application is a smart and interactive journal, where you are given daily questions that allows an algorithm to analyze your responses 
            and display correlations between your mood and your behaviours. Allowing you to pinpoint what makes a good and a bad day.
            
            My primary responsibilities in this project were the CSS design, database connection and data visualisation"
            image={MindshareImg}
            gitLink="https://github.com/P3TeamTwo/p3"
            siteLink="https://guarded-dusk-24354.herokuapp.com/"

            icons={[htmlImg, nodeImg, reactImg, herokuImg, travisImg]}
        />

        <ProjectCard
            title=" Let's Go' Travel Planner"
            description="'Let's Go' Travel Planner is a convenient planner that allows you to plan your future vacations, work trips, weekends away with just a few clicks. By pulling from both a well-revered restaurant review API and expedition API you can save must-visit landmarks, experiences and restaurants. Since we implemented passport Authentication on visiting the site when you wish to review your selections you can access your own itinerary where you'll find your choices grouped by destination. 
    
    In this group project applicaiton, I was tasked with setting up the database to allow for the app to operate as a full CRUD application and applying the CSS design to the page."
            image={LetsGoImg}
            gitLink="https://github.com/Mcilhaggis/lets-go-travel-planner"
            siteLink="https://stormy-springs-60842.herokuapp.com/"
            icons={[htmlImg,nodeImg, travisImg, herokuImg, sqlImg, jestImg, javascriptImg]}


        >
        </ProjectCard>




        <ProjectCardTwo
            title="It's 5 O'clock somewhere"
            description="Ever wanted to justify a drink at any time of the day? Life's stressful, we get it. This application will take in your drink preferences and suggest cocktails that you can make from the comfort of your own home AND it'll let you know where in the world it's 5 pm in case anyone is judging.
    
    In this group project application, I provided the group with the concept and functionality which the team chose to move forward with. Personally, I was responsible for creating the dynamically populated modal feature that uses local storage to save users favourite tipples"
            image={FiveOclockImg}
            gitLink="https://github.com/nsuroghon/5-o-Clock-Somewhere"
            siteLink="https://nsuroghon.github.io/5-o-Clock-Somewhere/"
            icons={[htmlImg, materialImg, javascriptImg]}


        />


        <ProjectCard
            title="Burger Logger"
            description="A practice in coding, from scratch, a CRUD application with Express, Handlebars, ORM, MVC design and Sequelize. This application allows the user to input burgers they'd like to eat and switch them to consumed in another column. Then, they have the option to remove them from the list.
        
            This project solidified my understanding of the steps required to provide a complete functioning application connected to mySQL database using the handlebars framework to create a homemade ORM."
            image={BurgerImg}
            gitLink="https://github.com/Mcilhaggis/burger-logger"
            siteLink="https://fast-ravine-10902.herokuapp.com/"
            icons={[htmlImg, javascriptImg, nodeImg, sqlImg, sequelizeImg]}


        />

        <ProjectCardTwo
            title="Employee Directory"
            description="Using React and randomuser.me API, this application is designed to allow users to filter their employees by any of the table headingS, as well as search for users by name and have the results immediately display, demonstrating how react can update the DOM without reloading the entire page."
            image={EmployeeDirectoryImg}
            gitLink="https://github.com/Mcilhaggis/employee-directory-react"
            siteLink="https://mcilhaggis.github.io/employee-directory-react/" 
            icons={[htmlImg, javascriptImg, reactImg]}
            />

        <ProjectCard
            title="Recipe Finder"
            description="Have all the ingredients and no inspiration? Use this fun recipe finder to find fun recipes from the Edamam API. Using React to create a component-based interface the options are endless."
            image={RecipeImg}
            gitLink="https://github.com/Mcilhaggis/recipe-finder-react"
            siteLink="https://guarded-badlands-10806.herokuapp.com/"
            icons={[htmlImg, nodeImg, herokuImg, javascriptImg, reactImg]}


        />
    </>
    )
}

export default Home;