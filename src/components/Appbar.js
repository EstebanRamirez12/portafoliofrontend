import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import "../styles/glitch.css";
import "../styles/navbar.css";
import { TITLE_ABOUT_ES, TITLE_EXPERIENCE_ES, TITLE_PROJECTS_ES, TITLE_CONTACT_ES } from '../constants/constantsES.js';
import { LOGO } from '../constants/general_constants.js';

const Appbar = () => {
    const navRef = useRef();

    const handleLinkClick = () => {
        if (navRef.current.classList.contains("responsive_nav")) {
            toggleNavbar();
        }
    }

    const toggleNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        const logo = document.getElementById("hero");
        if (logo) {
            if (navRef.current.classList.contains("responsive_nav")) {
                logo.classList.remove("visible");
                logo.classList.add("hidden");
            } else {
                logo.classList.remove("hidden");
                logo.classList.add("visible");
            }
        }
    }

    return (
        <header>
            <div id="hero" className="visible">
                <h1>{LOGO}</h1>
                <h1>{LOGO}</h1>
                <h1>{LOGO}</h1>
                <h1>{LOGO}</h1>
                <h1>{LOGO}</h1>
            </div>
            <nav ref={navRef}>
                <a href="#sectionAbout" onClick={handleLinkClick}>{TITLE_ABOUT_ES}</a>
                <a href="#sectionExp" onClick={handleLinkClick}>{TITLE_EXPERIENCE_ES}</a>
                <a href="#sectionProjects" onClick={handleLinkClick}>{TITLE_PROJECTS_ES}</a>
                <a href="#sectionContact" onClick={handleLinkClick}>{TITLE_CONTACT_ES}</a>
                <button className="nav-btn nav-close-btn" onClick={toggleNavbar}><FaTimes /></button>
            </nav>
            <button className="nav-btn nav-close-btn" onClick={toggleNavbar}><FaBars /></button>
        </header>
    );
}

export default Appbar;