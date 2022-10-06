import React from "react";
import LineChart from "../Charts/Line";
import "../../Styling/Details.css"

function Details({logs}) {
    return (
        <div className="user-details">
            {/* <h2 style={{textAlign: 'center'}}>Overview</h2> */}
            <LineChart className="log" logs={logs}/>
        </div>
    )
}

export default Details;