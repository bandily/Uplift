import React, {useEffect, useState} from 'react';
import * as style from '@dicebear/big-smile';
import left from '../../Images/left-arrow.png'
import right from '../../Images/right-arrow.png'
import '../../Styling/Avatar.css'

function Avatar({ currentUser }) {

   const [mouth, setMouth] = useState(currentUser.avatar.mouth)
   const [eyes, setEyes] = useState(currentUser.avatar.eyes)
   const [hair, setHair] = useState(currentUser.avatar.hair)
   const [accessories, setAccessories] = useState(currentUser.avatar.accessory)
   const [skinColor, setSkinColor] = useState(currentUser.avatar.skinColor)
   const [hairColor, setHairColor] = useState(currentUser.avatar.hairColor)
   const [image, setImage] = useState(currentUser.avatar.image)

   const URL = `https://avatars.dicebear.com/api/big-smile/:seed.svg?mouth[]=${style.schema.properties.mouth.default[mouth]}&eyes[]=${style.schema.properties.eyes.default[eyes]}&hair[]=${style.schema.properties.hair.default[hair]}&accessories[]=${style.schema.properties.accessories.default[accessories]}&skinColor[]=${style.schema.properties.skinColor.default[skinColor]}&hairColor[]=${style.schema.properties.hairColor.default[hairColor]}`;

   function handleClick(e){
    let newValue=parseInt(e.target.id);
      if (e.target.name === "hair"){
         if (e.target.alt === "left"){
            newValue = (parseInt(e.target.id) - 1) % 13
            if(newValue < 0){
               newValue +=13
            }
         } else{
            newValue = (parseInt(e.target.id) + 1) % 13
         }
      } else {
         if (e.target.alt === "left"){
            newValue = (parseInt(e.target.id) - 1) % 8
            if(newValue < 0){
               newValue +=8
            }
         } else{
            newValue = (parseInt(e.target.id) + 1) % 8
         }
      }
 
      switch(e.target.name){
         case "hair":
            setHair(newValue)
            break;
         case "eyes":
            setEyes(newValue)
            break;
         case "mouth":
            setMouth(newValue)
            break;
         case "hairColor":
            setHairColor(newValue)
            break;
         case "skinColor":
            setSkinColor(newValue)
            break;
         case "accessory":
            setAccessories(newValue)
            break;
         default:
            break;
      }
   }

   useEffect(()=>{setImage(URL)},[URL])

   const handleSubmit = (event) => {
      event.preventDefault()
      fetch('/edit-avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          hair,
          hairColor,
          eyes,
          mouth,
          accessory: accessories,
          skinColor,
          image
        })
      })
        .then(res => {
            res.json().then(() => {
               window.location.assign('/profile')
            })
        })
    }

     return (
       <div className="avatar-edit-container">
         <img className="avatar-edit" src={image} alt="avatar"></img>
         <div>
            <img className="left-arrow" onClick={(e)=>handleClick(e)} name="hair" id={hair} src={left} alt="left"></img>
            <p className="detail">Hair</p>
            <img className="right-arrow" onClick={(e)=>handleClick(e)} name="hair" id={hair} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={(e)=>handleClick(e)} name="eyes" id={eyes} src={left} alt="left"></img>
            <p className='detail'>Eyes</p>
            <img className="right-arrow" onClick={(e)=>handleClick(e)} name="eyes" id={eyes} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={(e)=>handleClick(e)} name="mouth" id={mouth} src={left} alt="left"></img>
            <p className='detail'>Mouth</p>
            <img className="right-arrow" onClick={(e)=>handleClick(e)} name="mouth" id={mouth} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={(e)=>handleClick(e)} name="hairColor" id={hairColor} src={left} alt="left"></img>
            <p className='detail'>Hair Color</p>
            <img className="right-arrow" onClick={(e)=>handleClick(e)} name="hairColor" id={hairColor} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={(e)=>handleClick(e)} name="skinColor"id={skinColor} src={left} alt="left"></img>
            <p className='detail'>Skin Color</p>
            <img className="right-arrow" onClick={(e)=>handleClick(e)} name="skinColor" id={skinColor} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={(e)=>handleClick(e)} name="accessory" id={accessories} src={left} alt="left"></img>
            <p className='detail'>Accessory</p>
            <img className="right-arrow" onClick={(e)=>handleClick(e)} name="accessory" id={accessories} src={right} alt="right"></img>
         </div>
         <button className="submit" onClick={handleSubmit}>SAVE</button>
       </div>
    );
}

export default Avatar;