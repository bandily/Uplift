import React, {useState} from 'react';
import "../../Styling/LogCard.css"

function LogCard({log, handleImage}) {

    const [liked, setLiked] = useState(false)
    const [message, setMessage] = useState(false)
    return (
       <div className="log-container">
           <div className='card'>
                <div className='info'>
                    <span className="log-details">
                        <h1 className='title'><strong>{log.activity_type}</strong></h1>
                        <span className="log-more-details">  
                            <p style={{marginLeft:"-12px"}}>|| {log.activity_duration} <em>min</em> ||</p>
                            <p style={{marginLeft:"-20px"}}>{log.date}</p>
                        </span>
                        <div className="extra-details">
                            <p onClick={()=>handleImage(log)} className="see-details">See More...</p>
                        </div>
                    </span>
                </div>
            </div>
       </div>
    );
}

export default LogCard;