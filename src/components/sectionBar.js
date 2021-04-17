import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


function sectionBar(){
    return (
        <div className="sectionBar">
            <Link to="/#About">About Me</Link>
            <Link to="/#Projects">Projects</Link>
        </div>
    )
}

export default sectionBar;