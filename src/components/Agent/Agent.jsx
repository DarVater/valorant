import React from 'react';
import './Agent.css'
import AgentsSkills from "../AgentsSkills/AgentsSkills";

const Agent = ({agent}) => {
    return (
        <div className={`agent ${agent.picked ? 'agent__picked': 'agent__not-picked'}`}>
            <div className="agent__container">
                <div className="agent__description ">
                    <div className="agent__name">
                        {agent.name}
                    </div>
                    <div className="agent__location">
                        {agent.location}
                    </div>
                </div>
                <div className="agent__left-corner"></div>
            </div>
            <div className="agent__image ">
                <img src={agent.img} alt="asd"/>
                <AgentsSkills skills={agent.skills} picked={agent.picked} />
            </div>
        </div>
    );
};

export default Agent;