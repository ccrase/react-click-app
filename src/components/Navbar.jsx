import React from 'react';

export function Navbar(props){
        return(
            <div className="navbar navbar-light">
                <h3>Clicky Game</h3>
                <h3>Score: {props.score} | High Score: {props.totalScore}</h3>
            </div>
        );
};