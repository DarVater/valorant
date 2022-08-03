import React from 'react';
import './AgentsSkills.css'

const AgentsSkills = ({skills, picked}) => {
    return (
        <div className={`skills-bar ${picked ? 'skills-bar__picked': 'skills-bar__not-picked'}`}>
            {skills.map( skill =>
                <div key={skill.icon} className="skills-bar__skill">
                    <img src={skill.icon} alt={skill.title}/>
                </div>
            )}
        </div>
    );
};

export default AgentsSkills;