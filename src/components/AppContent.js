import { GREETINGS_ES, BTN_CV_ES, BTN_TALK_ES, TITLE_ABOUT_ES, INFO_ABOUT_ME_ES, TITLE_EXPERIENCE_ES, INFO_EXPERIENCE_ES, DATE_SEGOB_ES, DATE_FLORES_ES, DATE_IDS_ES, ROL_SEGOB_ES, ROL_FLORES_ES, ROL_IDS_ES, DESC_FLIP_SEGOB_ES, DESC_FLIP_FLORES_ES, DESC_FLIP_IDS_ES, OTHER_ES } from '../constants/constantsES.js';
import { WORK_IDS, WORK_SEGOB, WORK_FLORES, PERSONAL_EMAIL, PERSONAL_LINKEDIN_FULL, PERSONAL_GITHUB } from '../constants/general_constants.js';
import '../styles/main.css';
import '../styles/timeLine.css';
import '../styles/flipCard.css';
import '../styles/hexagon.css';
import '../styles/expCard.css';

import { FaDownload, FaPaperPlane, FaGithub, FaCss3Alt, FaJava, FaHtml5, FaReact, FaLinkedin, FaBootstrap } from 'react-icons/fa';
import { DiJqueryLogo, DiEclipse, DiVisualstudio } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql, SiVisualstudiocode, SiPostman, SiCsharp, SiSpring } from 'react-icons/si';
import { FiGitlab } from 'react-icons/fi';
import Appflipcard from '../components/AppFlipCard.js';
import AppProject from '../components/appProjects.js';
import AppContact from '../components//AppContact.js';
import avatar from '../assets/img/yo1.png';
import aspNet from '../assets/img/aspNet.png';
import logoSegob from '../assets/img/segobLogo.png';
import logoIds from '../assets/img/idslogo.png';
import logoFlores from '../assets/img/gestorFloreslogo.png';
import rutaCV from '../assets/docs/CV_ESTEBAN_RAMIREZ_2024.pdf';
import { useEffect } from 'react';
import ChatService from '../services/ChatService.js';
const icons = [<SiSpring />, <FaReact />, <IoLogoJavascript />, <FaCss3Alt />];

const Presentation = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:' + PERSONAL_EMAIL + '?subject=Contacto desde tu portafolio&body=Hola,';
    };

    const handleLinkedInClick = () => {
        window.open(PERSONAL_LINKEDIN_FULL, '_blank');
    };

    const handleGitHubClick = () => {
        window.open(PERSONAL_GITHUB, '_blank');
    };

    const openCV = () => {
        window.open(rutaCV, '_blank');
    };

    return (
        <div className='container_presentation'>
            <div className='left_column'>
                <img className='avatar' src={avatar} alt='avatar' />
            </div>
            <div className='right_clumn'>
                <div className='title_container'>
                    <label className='main_title'>{GREETINGS_ES}</label>
                </div>
                <div className='subtitle_container'>
                    <label className='subtitle_job'>JUNIOR FULL STACK DEVELOPER</label>
                </div>
                <div className='btn_container'>
                    <button className='basic-btn button-51 row1' onClick={openCV}> {BTN_CV_ES}  <FaDownload /></button>
                    <button className='basic-btn button-51 row1' onClick={handleEmailClick}>{BTN_TALK_ES} <FaPaperPlane /></button>
                    <div className='row socialMedia'>
                        <button className='basic-btn button-51 row2' onClick={handleGitHubClick}><FaGithub /></button>
                        <button className='basic-btn button-51 row2' onClick={handleLinkedInClick}><FaLinkedin /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AboutMe = () => {
    return (
        <div className='container_aboutMe'>
            <label className='main_title'>{TITLE_ABOUT_ES}</label>
            <p className='information'>{INFO_ABOUT_ME_ES}</p>
        </div>
    );
}

const Experience = () => {
    return (
        <div className='container_experience'>
            <label className='main_title'>{TITLE_EXPERIENCE_ES}</label>

            <p className='information'>{INFO_EXPERIENCE_ES}</p>
            <div className='design-section'>
                <div className='timeline'>

                    <div className='timeline-empty'>
                    </div>

                    <div className='timeline-middle'>
                        <div className='timeline-circle'></div>
                    </div>
                    <Appflipcard logo={logoSegob} ImgClass='logoSegob'
                        titleCard={WORK_SEGOB} timeCard={DATE_SEGOB_ES}
                        descCard={DESC_FLIP_SEGOB_ES} rol={ROL_SEGOB_ES} />

                    <Appflipcard logo={logoFlores} ImgClass='logoFlores'
                        titleCard={WORK_FLORES} timeCard={DATE_FLORES_ES}
                        descCard={DESC_FLIP_FLORES_ES} rol={ROL_FLORES_ES} />

                    <div className='timeline-middle'>
                        <div className='timeline-circle'></div>
                    </div>
                    <div className='timeline-empty'>
                    </div>

                    <div className='timeline-empty'>
                    </div>

                    <div className='timeline-middle'>
                        <div className='timeline-circle'></div>
                    </div>

                    <Appflipcard logo={logoIds} ImgClass='logoids'
                        titleCard={WORK_IDS} timeCard={DATE_IDS_ES}
                        descCard={DESC_FLIP_IDS_ES} rol={ROL_IDS_ES} />

                </div>
            </div>


            <div className='outer-container'>
                <div className='hex-container tiled'>
                    <div className='hex-row tiled even col1'>
                        <div className='hex generic tiled glow titleHex' title='Tecnologías del lado del servidor'><p>FrontEnd</p></div>
                        <div className='hex generic tiled glow' title='HTML'><FaHtml5 /></div>
                        <div className='hex generic tiled glow' title='JavaScript'><IoLogoJavascript /></div>
                        <div className='hex generic tiled glow' title='CSS'><FaCss3Alt /></div>
                        <div className='hex generic tiled glow' title='jquery'><DiJqueryLogo /></div>
                        <div className='hex generic tiled glow' title='jquery'><FaBootstrap /></div>
                        <div className='hex generic tiled glow' title='React'><FaReact /></div>
                    </div>
                    <div class='hex-row tiled odd col2'>
                        <div className='hex generic tiled glow titleHex' title='tecnologías del lado del cliente'><p>BackEnd</p></div>
                        <div className='hex generic tiled glow' title='Java'><FaJava /></div>
                        <div className='hex generic tiled glow' title='Java'><SiCsharp /></div>
                        <div className='hex generic tiled glow' title='Java'><SiSpring /></div>
                        <div className='hex generic tiled glow aspNet' title='asp.NET MVC'><img className='aspNet_img' src={aspNet} alt='ASP.NET' /><p className='aspNet_p'>ASP.NET</p></div>
                        <div className='hex generic tiled glow' title='MySQL'><SiMysql /></div>

                    </div>
                    <div className='hex-row tiled even col3'>
                        <div className='hex generic tiled glow titleHex' title='otras herramientas'><p>{OTHER_ES}</p></div>
                        <div className='hex generic tiled glow' title='Postman'><SiPostman /></div>
                        <div className='hex generic tiled glow' title='Gitlab'><FiGitlab /></div>
                        <div className='hex generic tiled glow' title='GitHub'><FaGithub /></div>
                        <div className='hex generic tiled glow' title='Eclipse IDE'><DiEclipse /></div>
                        <div className='hex generic tiled glow' title='Eclipse IDE'><DiVisualstudio /></div>
                        <div className='hex generic tiled glow' title='VS Code'><SiVisualstudiocode /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}


function Appcontent() {

    useEffect(() => {
        ChatService.getSaludo().then(respose => {
            console.log(respose.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div className='main_container'>
            <Presentation />
            <section id='sectionAbout' className='sect'><AboutMe /></section>
            <section id='sectionExp' className='sect'><Experience /></section>
            <section id='sectionProjects' className='sect'><AppProject /></section>
            <section id='sectionContact' className='sect'><AppContact icons={icons} /></section>
        </div>
    );
}

export default Appcontent;