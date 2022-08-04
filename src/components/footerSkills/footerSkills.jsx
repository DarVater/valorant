import React from 'react';
import './footerSkills.css'

const FooterSkills = ({skills}) => {

    return (
        <div className="footer-skills">
            <div className="footer-skills__container _container">
                <div className="footer-skills__skill-view">
                    {skills.map(skill =>
                        <div className=" skill-view">
                            <div className="skill-view__content">
                                <h1 className="skill-view__type">{skill.type}</h1>
                                <h2 className="skill-view__title">{skill.title}</h2>
                                <p className="skill-view__description">
                                    {skill.description}
                                </p>
                            </div>
                            <div className="skill-view__icon-wrapper">
                                <div className="skill-view__icon">
                                    <img  alt="through"  src={skill.icon[0]}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FooterSkills;