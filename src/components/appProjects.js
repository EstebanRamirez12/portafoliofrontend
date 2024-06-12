/**Sección de mis proyectos*/

import {TITLE_PROJECTS_ES, MAIN_DESC_PROJECT_ES, MAIN_IMG_SEGOB_ES, PROJECT_NAME_SEGOB_ES, PARTIAL_DESC_SEGOB_ES, TIME_SEGOB_ES, MAIN_IMG_FLORES_ES, PROJECT_NAME_FLORES_ES, PARTIAL_DESC_FLORES_ES, TIME_FLORES_ES, MAIN_IMG_AFORE_ES, PROJECT_NAME_AFORE_ES, PARTIAL_DESC_AFORE_ES, TIME_AFORE_ES} from '../constants/constantsES.js'
import '../styles/main.css';

import React, { useState } from "react";
import Appexpcard from "../components/AppExpCard.js";
import { FaDownload, FaPaperPlane, FaGithub, FaCss3Alt, FaJava, FaHtml5, FaReact, FaLinkedin, FaEye, FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo, DiEclipse, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiPostman, SiCsharp } from "react-icons/si";
import { FiGitlab } from "react-icons/fi";

const dataProj1 = {
    image: MAIN_IMG_SEGOB_ES,
    title: PROJECT_NAME_SEGOB_ES,
    description: PARTIAL_DESC_SEGOB_ES,
    time: TIME_SEGOB_ES,
    btnView: <FaEye />,
    icons: [<SiCsharp />, <DiVisualstudio />, <FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <DiJqueryLogo />],
    icons2row: [<IoLogoJavascript />, <FaGithub />, <SiMysql />, <SiPostman />]
}


const dataProj2 = {
    image: MAIN_IMG_FLORES_ES,
    title: PROJECT_NAME_FLORES_ES,
    description: PARTIAL_DESC_FLORES_ES,
    time: TIME_FLORES_ES,
    btnView: <FaEye />,
    icons: [<SiCsharp />, <DiVisualstudio />, <FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <DiJqueryLogo />],
    icons2row: [<IoLogoJavascript />, <FaGithub />, <SiMysql />]
}

const dataProj3 = {
    image: MAIN_IMG_AFORE_ES,
    title: PROJECT_NAME_AFORE_ES,
    description: PARTIAL_DESC_AFORE_ES,
    time: TIME_AFORE_ES,
    btnView: <FaEye />,
    icons: [<FaJava />, <DiEclipse />, <FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <DiJqueryLogo />],
    icons2row: [<IoLogoJavascript />, <FiGitlab />, <SiMysql />, <SiPostman />]
}



const AppProjects = (props) => {
    return (
        <div className='container_projects'>
            <label className='main_title'>{TITLE_PROJECTS_ES}</label>
            <p className='main_des_projects information'>{MAIN_DESC_PROJECT_ES}</p>

            <div className="row expCardRow">
                <Appexpcard {...dataProj3} />
                <Appexpcard {...dataProj2} />
            </div>

            <div className="row expCardRow">
                <Appexpcard {...dataProj1} />
            </div>
        </div>
    );
}

export default AppProjects;