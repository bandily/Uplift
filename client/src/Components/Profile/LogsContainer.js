import React, {useState} from 'react';
import LogCard from './LogCard';
import loading from '../../Images/loading.gif'
import twoRight from '../../Images/-2.png'
import oneRight from '../../Images/-1.png'
import equal from '../../Images/0.png'
import oneLeft from '../../Images/1.png'
import twoLeft from '../../Images/2.png'
import '../../Styling/LogContainer.css'

function LogsContainer({logs, currentUser, user, deleteLog, id}) {

    const [attribute, setAttribute] = useState("date");
    const [displayDetail, setDisplayDetail] = useState(null)
    const [displayLogs, setDisplayLogs] = useState(0)
    const [page, setPage] = useState(1)
    const [weightImage, setWeightImage] = useState(null)
    const [happinessLevel, setHappinessLevel] = useState(null)
    const goalWeight = currentUser.goal_weight

    function handleImage(log){
        setDisplayDetail(log)
        if(goalWeight - log.weight < 0){
            if(goalWeight - log.weight < -5){
                setWeightImage(twoRight)
            } else{
                setWeightImage(oneRight)
            }
        } else if(goalWeight-log.weight === 0){
            setWeightImage(equal)
        } else {
            if(goalWeight - log.weight < 5){
                setWeightImage(oneLeft)

            } else{
                setWeightImage(twoLeft)
            }
        }

        switch (log.happiness){
            case 1:
                setHappinessLevel("😣")
                break;
            case 2:
                setHappinessLevel("😟")
                break;
            case 3:
                setHappinessLevel("😐")
                break;
            case 4:
                setHappinessLevel("🙂")
                break;
            case 5:
                setHappinessLevel("😁")
                break;
            default:
                break;
        }
    }

    function handleDelete(log) {
        console.log('deleted')
        console.log(log)
  }

    let newList = [...logs].sort((a,b) => {
        if (attribute === 'duration'){
                return b.activity_duration - a.activity_duration
        } else if(attribute === 'date'){
                return new Date(b.date) - new Date(a.date)
        } else {
                return a.activity_type.localeCompare(b.activity_type) 
        }
    }).map((log) => <LogCard handleImage={handleImage} handleDelete={handleDelete} setDisplayDetail={setDisplayDetail} key={log.id} log={log}/>)

    function start(){
        setDisplayLogs(0)
        setPage(1)
    }

    function handleLeft(){
        if (displayLogs - 4 >= 0){
            setDisplayLogs(displayLogs - 4)
            setPage(page - 1)
        }
    }

    function handleRight(){
        if (displayLogs + 4 < logs.length){
            setDisplayLogs(displayLogs + 4)
            setPage(page + 1)
        } 
    }

    function end(){
        if (logs.length % 4 === 0){
            setDisplayLogs(logs.length - 4)
        } else {
            setDisplayLogs(Math.floor(logs.length / 4) * 4)
        }
        setPage(Math.ceil(logs.length / 4))
    }  

    return (
        <div>
            {currentUser && (<>
            <div className="log-controller">
            <h2>Your Logs ({logs.length})</h2>
            <select className="select-filter" onChange={(e)=>setAttribute(e.target.value)} name="sort" id="sort">
                    <option selected={true} disabled="disabled">Sort by...</option>    
                    <option value="date">Date</option>
                    <option value="duration">Duration</option>
                    <option value="activity">Activity</option>
                </select>
                <div className="logs-container-div">
                    {logs ? newList.slice(displayLogs, displayLogs + 4) : null}
                </div>
                <div className="next-page-logs">
                    <div className="left-page-div">
                        <button onClick={start}>&#60;&#60;</button>
                        <button onClick={handleLeft}>&#60;</button>
                    </div>
                    <p className="page-number">{page}</p>
                    <div className="right-page-div">
                        <button onClick={handleRight}>&#62;</button>
                        <button onClick={end}>&#62;&#62;</button>
                    </div>
                <div className="activity-details">
                    {displayDetail ? <div className="display-details-active">
                        <h1>{displayDetail.activity_type}</h1>
                        <p className="date-details">{displayDetail.date} | {displayDetail.activity_duration} min | Goal: {goalWeight}lbs</p>
                        <div>
                            <p className="happiness-level">{happinessLevel}</p>
                            <p className="happiness-details">Feeling: <br/><strong className='weightDetails'>{displayDetail.happiness}/5</strong></p>
                        </div>
                        <div>
                            <img className="weight-arrows" src={weightImage} alt={weightImage}/>
                            <p className="goal-weight">{Math.abs(goalWeight - displayDetail.weight)}lbs</p>
                            <p className="weight-details">Weight: <br/><strong className='weightDetails'>{displayDetail.weight}lbs</strong></p>
                        </div>
                        {displayDetail.notes !=="" ? <p className="notes-details">Note: {displayDetail.notes}</p>: null} </div> 
                        :
                        <div className="display-empty">
                            <img className="no-activity-loading" src={loading} alt="loading"/>
                            <p className="no-activity-selected"><em>select an activity</em></p>
                        </div>}
                </div>
                </div>
            </div></>)}
        </div>
    );
}

export default LogsContainer;