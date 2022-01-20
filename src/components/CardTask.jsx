import React from "react";
import './CardTask.css'

import dotsIcon from '../assets/imgs/icon-ellipsis.svg'

export default ({title, bgColor, bgIcon, current, previous}) => {
    return (
        <div className="Task-item" style={{
            backgroundColor: bgColor
        }}>

            <img src={bgIcon} alt="" />
            
           <div className="task-info">
               <header>
                    <h2>{title}</h2>
                    <img src={dotsIcon} alt="" />
               </header>
               <section>
                    <h2>{current}hr{current !== 1&& 's'}</h2>
               </section>
               <footer>
                   <p>last week - {previous}hr{previous !== 1&& 's'}</p>
               </footer>
           </div>
        </div>
    )
}