import { TITLE_CONTACT_ES, WEBSITE_TITLE_ES } from '../constants/constantsES.js';
import { PERSONAL_EMAIL, PERSONAL_NUMBER, PERSONAL_LINKEDIN_SHORT, PERSONAL_LINKEDIN_FULL } from '../constants/general_constants.js'
import { IoMdMail } from 'react-icons/io';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import '../styles/main.css';



function AppContact({ icons }) {
    const handleEmailClick = () => {
        window.location.href = `mailto:${PERSONAL_EMAIL}`;
    };

    const handleNumberClick = () => {
        window.location.href = `tel:${PERSONAL_NUMBER}`;
    };

    const handleLinkedinClick = () => {
        window.open(PERSONAL_LINKEDIN_FULL, '_blank');
    };

    return (
        <div className='container_contact'>
            <label className='main_title'>{TITLE_CONTACT_ES}</label>
            <div className='row personalInfo'>
                <p onClick={handleEmailClick}><IoMdMail /> Email <span className='interactive-link'>{PERSONAL_EMAIL}</span></p>
                <p onClick={handleNumberClick}><FaWhatsapp /> Whatsapp <span className='interactive-link'>{PERSONAL_NUMBER}</span></p>
                <p onClick={handleLinkedinClick}><FaLinkedin /> Linkedin <span className='interactive-link'>{PERSONAL_LINKEDIN_SHORT}</span></p>
            </div>
            <p className='information'>{WEBSITE_TITLE_ES}</p>
            <div className='container_technology'>
                {icons.map((item, index) => (
                    <div key={index} className='technology'>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default AppContact;