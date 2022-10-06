import React, { useState } from 'react';
import { Line } from "react-chartjs-2";
import enlarge from '../../Images/enlarge.png'
import '../../Styling/Line.css'
import { Chart, LineController, LineElement, PointElement, LinearScale,  Title, CategoryScale, Tooltip } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Tooltip, Title, CategoryScale);

function LineChart({logs}) {

    const sortedByDate = [...logs].sort((a,b) => {
        return new Date(a.date) - new Date(b.date)})

    const date = sortedByDate.map(log=>log.date)
    const feeling = sortedByDate.map(log=>log.happiness)
    const weight = sortedByDate.map(log=>log.weight)
    const duration = sortedByDate.map(log=>log.activity_duration)

    const [selectedLabel, setSelectedLabel] = useState('Feeling')
    const [selectedData, setSelectedData] = useState(feeling)
    const [showChart, setShowChart] = useState(true)

    const data = {
        labels: date,
        datasets: [{
            label: selectedLabel,
            data: selectedData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]}
    
    //Exit enlarged graph when clicking outside modal
    function handleOverlay(){
        if (showChart === false){
            setShowChart(true)
        }
    }

    return (
       <div>
            <div className="button-container">
                    <button className="detail-buttons" onClick={()=>{setSelectedLabel("Feeling"); setSelectedData(()=> feeling)}}>Feeling</button>
                    <button className="detail-buttons" onClick={()=>{setSelectedLabel("Duration"); setSelectedData(()=> duration)}}>Duration</button>
                    <button className="detail-buttons" onClick={()=>{setSelectedLabel("Weight"); setSelectedData(()=> weight)}}>Weight</button>
            </div>
            <div className="color-box"></div>
            <h3 className="graph-label">{selectedLabel}</h3>
            <div className="line-graph" >
                <Line className="line-graph-self" data={data}/>
            </div>
            {showChart ? 
                <img onClick={()=>setShowChart(false)} className="enlarge" src= {enlarge} alt="enlarge"></img> 
            : 
                <div className= "modal">
                    <div className="overlay" onClick={handleOverlay}></div>
                    <div className="modal-content">
                        <div className="open-container-details">
                            <div className="open-color-box"></div>
                            <h3 className="open-graph-label">{selectedLabel}</h3>
                        </div>
                        <Line className="modal-detail" data={data}/>
                        <button className="close-modal" onClick={()=>setShowChart(true)}>
                        x</button>
                    </div>
                </div>}
       </div>);
}

export default LineChart;