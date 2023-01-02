import React from "react";

function Joke(props) {
    //let name = "";
    return(
        <div className="joker-card">
            <p className="number">{props.joke.number}</p>
            <h4 className="setup">{props.joke.setup}</h4>
            <p className="closer">{props.joke.closer}</p>

            {/*`<p>{name}</p>`*/}
        </div>
    );
}

export default Joke;