import React from 'react';
import userDatas from "../../data/UserData";
import Map from "../../components/MapLeaf/Map"
import "./Contact.css";

const Contact = () => {

    const linkedinLink = userDatas.socialMedia.find(media => media.media === "Linkedin").link;
    const githubLink = userDatas.socialMedia.find(media => media.media === "GitHub").link;
    
    return (
        <div className="contact-container">
            <div className='left-elements'>
                <div className='adress'>
                    <div>{userDatas.firstName}</div>
                    <div>{userDatas.lastName}</div>
                    <div>{userDatas.street}</div>
                    <div>{userDatas.adressCode} {userDatas.city}</div>
                </div>
                <div className='adress-media'>
                    <div>{userDatas.phoneNumber}</div>
                    <a href={`mailto:${userDatas.mail}`} style={{ textDecoration: "none", color: "white" }}>{userDatas.mail}</a>
                </div>
                <div className='social-media'>
                    <div className="linkedin-link">  
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
                        <img src="src/assets/linkedin.png" alt="LinkedIn" className="linkedin-image"/>
                            Linkedin
                        </a>
                    </div>
                    <div className="github-link">  
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
                        <img src="src/assets/github.png" alt="LinkedIn" className="linkedin-image"/>
                            Git Hub
                        </a>
                    </div>
                </div>
            </div>
            <div className='right-elements'>
                <div className='map'>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Contact;
