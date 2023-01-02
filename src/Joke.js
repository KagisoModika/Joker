import React from "react";

function Joke(props) {
    //let name = "";
    return(
        <div className="joker-card">
            <p className="number">{props.number}</p>
            <h4 className="setup">{props.setup}</h4>
            <p className="closer">{props.closer}</p>

            {/*`<p>{name}</p>`*/}
        </div>
    );
}

export default Joke;