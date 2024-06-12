import React from 'react';

function Appflipcard(props) {
    return (
        <div class="flip-card timeline-component">
            <div class="flip-card-inner timeline-component">
                <div class="flip-card-front timeline-content">
                    <img className={props.ImgClass} src={props.logo} alt="project"/>
                    <div className='frontCard-info-container'>
                        <h2>{props.titleCard}</h2>
                        <time>{props.timeCard}</time>
                        <br></br>
                        <label>{props.rol}</label>
                    </div>
                </div>
                <div class="flip-card-back timeline-content">
                    <h3>{props.titleCard}</h3>
                    <p>{props.descCard}</p>
                </div>
            </div>
        </div>
    );
}

export default Appflipcard;