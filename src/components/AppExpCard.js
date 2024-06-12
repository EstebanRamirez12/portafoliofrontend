import React, { useState } from 'react';
import AppModalProject from "../components/AppModalProject.js";
import sisEvaluacion from "../assets/img/sistemaEvaluacion.png";
import sistemaFlores from "../assets/img/sistemaFlores.png";
import sistemaAfore from "../assets/img/sistemaAfore.png";

import {FULL_DESC_AFORE_ES, FULL_DES_FLORES_ES, FULL_DESC_SEGOB_ES} from '../constants/constantsES.js'
function Appexpcard({ image, title, description, time, icons, icons2row, btnView }) {
    let imgPath = "";
    let fullDescription = "";
    if (image === "sistemaEvaluacion") {
        imgPath = sisEvaluacion;
        fullDescription = FULL_DESC_SEGOB_ES;
    } else if (image === "sistemaFlores") {
        imgPath = sistemaFlores;
        fullDescription = FULL_DES_FLORES_ES;
    } else if (image === "sistemaAfore") {
        imgPath = sistemaAfore;
        fullDescription = FULL_DESC_AFORE_ES;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='containerExpCard'>
            <div className="nft">
                <div className='main'>
                    <img className='tokenImage' src={imgPath} alt='sistemaEvaluacion' />
                    <h2>{title}</h2>
                    <p className='description'>{description}</p>
                    <div className='tokenInfo'>
                        <div className="moreInfo">
                            <button onClick={openModal}>{btnView}</button>
                            
                        </div>
                        <div className="duration">
                            <ins>◷</ins>
                            <p>{time}</p>
                        </div>
                    </div>
                    <hr />
                    <div className='creator'>
                        {icons.map((item, index) => (
                            <div key={index} className='wrapper'>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className='creator'>
                        {icons2row.map((item, index) => (
                            <div key={index} className='wrapper'>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && <AppModalProject isOpen={isModalOpen} onClose={closeModal} title={title} fullDescription={fullDescription}/>}
        </div>

    );
}

export default Appexpcard;