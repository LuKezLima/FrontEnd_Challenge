import React, {useState} from "react";
import CardTask from './components/CardTask'
import userPhoto from './assets/imgs/image-jeremy.png'

import IconWork from './assets/imgs/icon-work.svg'
import IconPlay from './assets/imgs/icon-play.svg'
import IconStudy from './assets/imgs/icon-study.svg'
import IconExercise from './assets/imgs/icon-exercise.svg'
import IconSocial from './assets/imgs/icon-social.svg'
import IconSelfCare from './assets/imgs/icon-self-care.svg'

import data from './data.json'


const initialState = [
{
    currentWork:data[0].timeframes.daily.current,
    previousWork:data[0].timeframes.daily.previous
},
{
    currentPlay:data[1].timeframes.daily.current,
    previousPlay:data[1].timeframes.daily.previous
},
{
   
    currentStudy:data[2].timeframes.daily.current,
    previousStudy:data[2].timeframes.daily.previous
},
{
  
    currentExercise:data[3].timeframes.daily.current,
    previousExercise:data[3].timeframes.daily.previous
},
{
   
    currentSocial:data[4].timeframes.daily.current,
    previousSocial:data[4].timeframes.daily.previous
},
{
    currentSelfCare:data[5].timeframes.daily.current,
    previousSelfCare:data[5].timeframes.daily.previous
}
]

export default () => {

    const [[
        {currentWork,previousWork},
        {currentPlay, previousPlay},
        {currentStudy, previousStudy},
        {currentExercise, previousExercise},
        {currentSocial, previousSocial},
        {currentSelfCare, previousSelfCare}
    ], setState] = useState(initialState)

    const clearState = () =>{
        setState(initialState)
        opacitys.daily = 1
        opacitys.monthly = null
        opacitys.weekly = null
    }

    const [opacitys, setOpacitys] = useState({
        daily: 1,
        monthly: null,
        weekly: null
    })



    const setWeekly = (e) => {
        setState([
            {currentWork:data[0].timeframes.weekly.current, previousWork:data[0].timeframes.weekly.previous},
            {currentPlay:data[1].timeframes.weekly.current, previousPlay:data[1].timeframes.weekly.previous},
            {currentStudy:data[2].timeframes.weekly.current, previousStudy:data[2].timeframes.weekly.previous},
            {currentExercise:data[3].timeframes.weekly.current, previousExercise:data[3].timeframes.weekly.previous},
            {currentSocial:data[4].timeframes.weekly.current, previousSocial:data[4].timeframes.weekly.previous},
            {currentSelfCare:data[5].timeframes.weekly.current, previousSelfCare:data[5].timeframes.weekly.previous},
        ])

        opacitys.daily = null
        opacitys.monthly = null
        opacitys.weekly = 1
    }

    const setMonthly = () => {
    setState([
        {currentWork:data[0].timeframes.monthly.current, previousWork:data[0].timeframes.monthly.previous},
        {currentPlay:data[1].timeframes.monthly.current, previousPlay:data[1].timeframes.monthly.previous},
        {currentStudy:data[2].timeframes.monthly.current, previousStudy:data[2].timeframes.monthly.previous},
        {currentExercise:data[3].timeframes.monthly.current, previousExercise:data[3].timeframes.monthly.previous},
        {currentSocial:data[4].timeframes.monthly.current, previousSocial:data[4].timeframes.monthly.previous},
        {currentSelfCare:data[5].timeframes.monthly.current, previousSelfCare:data[5].timeframes.monthly.previous},
    ])
    opacitys.daily = null
        opacitys.monthly = 1
        opacitys.weekly = null

    }
    return(
        <main>
            <div className="userprofile">
                <div className="user_info">
                    <picture>
                        <img src={userPhoto} alt="User Photo" />
                    </picture>
                    
                    <div>
                    <p>Report for </p>
                    <h1>Jeremy Robson</h1>
                    </div>
                  
                </div>

                <div className="setTime">
                    <h3 style={{
                        opacity: opacitys.daily
                    }} onClick={()=> clearState()}>Daily</h3>
                    <h3 style={{
                        opacity: opacitys.weekly
                    }} onClick={()=>setWeekly()}>Weekly</h3>
                    <h3 style={{
                        opacity: opacitys.monthly
                    }} onClick={(e)=>{
                        setMonthly()}}>Monthly</h3>
                </div>

            </div>
            <div className="tasks">
                     <CardTask title="Work" bgColor="var(--Light-red-work)" bgIcon={IconWork} current={currentWork} previous={previousWork}/>
                     <CardTask title="Play" bgColor="var(--Soft-blue-play)" bgIcon={IconPlay} current={currentPlay} previous={previousPlay}/>
                     <CardTask title="Study" bgColor="var(--Light-red-study)" bgIcon={IconStudy} current={currentStudy} previous={previousStudy}/>
                     <CardTask title="Exercise" bgColor="var(--Lime-green-exercise)" bgIcon={IconExercise} current={currentExercise} previous={previousExercise}/>
                     <CardTask title="Social" bgColor="var(--Violet--social)" bgIcon={IconSocial} current={currentSocial} previous={previousSocial}/>
                     <CardTask title="Self Care" bgColor="var(--Soft-orange-selfcare)" bgIcon={IconSelfCare} current={currentSelfCare} previous={previousSelfCare}/>        
            </div>
            
        </main>
    )
}