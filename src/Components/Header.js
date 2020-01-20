import React from 'react';

const Header = ()=> {
    return(
        <header id = "header">
            <nav id='header-words'>
            <img id='nba-logo' src='https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png' alt ='nba logo'/>
                <a>NBA</a>
            </nav>
            <nav id="menu">
                <a>Scores </a>
                <a>Schedule </a>
                <a>News </a>
                <a>Video </a>
                <a>NBA TV </a>
                <a>Stats </a>
                <a>Standings </a>
                <a>Players </a>
                <a>Teams </a>
                <a>All-Star </a>
            </nav>
            <nav>
                <a>Pick 'Em </a>
                <a>Shop </a>
                <a>Tickets </a>
                <a>NBA League Pass </a>
            </nav>
                <img id="login" src ="https://www.materialui.co/materialIcons/action/account_circle_white_192x192.png" alt="login"/>
        </header>
    )
}

export default Header;