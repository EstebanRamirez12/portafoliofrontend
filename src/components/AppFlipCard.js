import { React, useState } from 'react';

function Appflipcard(props) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        if (window.innerWidth < 1250) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <div className={`flip-card timeline-component ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className='flip-card-inner timeline-component'>
                <div className='flip-card-front timeline-content'>
                    <img className={props.ImgClass} src={props.logo} alt='project' />
                    <div className='frontCard-info-container'>
                        <h2>{props.titleCard}</h2>
                        <time>{props.timeCard}</time>
                        <br></br>
                        <label>{props.rol}</label>
                    </div>
                </div>
                <div className='flip-card-back timeline-content'>
                    <h3>{props.titleCard}</h3>
                    <p>{props.descCard}</p>
                </div>
            </div>
        </div>
    );
}

export default Appflipcard;