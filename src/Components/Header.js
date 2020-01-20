import React from 'react';

const Header = ()=> {
    return(
        <header id = "header">
            <img id='nba-logo' src='https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png' alt ='nba logo'/>
            <nav id='header-words'>
                <a>NBA</a>
            </nav>
            <nav id="header-header">
                <a>Scores </a>
                <a>Schedule </a>
                <a>News </a>
                <a>Video </a>
                <a>NBA TV </a>
            </nav>
        </header>
    )
}

export default Header;