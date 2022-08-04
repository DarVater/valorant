import React from 'react';
import './pageAgents.css'
import agentsPageBG from '../../img/pageAgents/background.png'
import Agent from "../../components/Agent/Agent";
import agentPhoenix from "../../img/pageAgents/Agents/Phoenix.png";
import agentJett from "../../img/pageAgents/Agents/Jett.png";
import agentSova from "../../img/pageAgents/Agents/Sova.png";
import agentSage from "../../img/pageAgents/Agents/Sage.png";

import through_w from "../../img/pageAgents/Agents/Agent-skills/through_w.svg";
import skyFell_w from "../../img/pageAgents/Agents/Agent-skills/skyFell_w.svg";
import invitingOrb_w from "../../img/pageAgents/Agents/Agent-skills/invitingOrb_w.svg";
import rebel_w from "../../img/pageAgents/Agents/Agent-skills/rebel_w.svg";

import surround_w from "../../img/pageAgents/Agents/Agent-skills/surround_w.svg";
import throwUp_w from "../../img/pageAgents/Agents/Agent-skills/throwUp_w.svg";
import jerk_w from "../../img/pageAgents/Agents/Agent-skills/jerk_w.svg";
import massacre_w from "../../img/pageAgents/Agents/Agent-skills/massacre_w.svg";

import shaveOff_w from "../../img/pageAgents/Agents/Agent-skills/shaveOff_w.svg";
import catenary_w from "../../img/pageAgents/Agents/Agent-skills/catenary_w.svg";
import mindBlowing_w from "../../img/pageAgents/Agents/Agent-skills/mindBlowing_w.svg";
import legolas_w from "../../img/pageAgents/Agents/Agent-skills/legolas_w.svg";

import SlowOrb_b from "../../img/pageAgents/Agents/Agent-skills/SlowOrb_b.svg";
import AggravateDamage_b from "../../img/pageAgents/Agents/Agent-skills/AggravateDamage_b.svg";
import HealingOrb_b from "../../img/pageAgents/Agents/Agent-skills/HealingOrb_b.svg";
import Resurrection_b from "../../img/pageAgents/Agents/Agent-skills/Resurrection_b.svg";
import FooterSkills from "../../components/footerSkills/footerSkills";


const PageAgents = () => {
    const agentsList = [
        {
            name: 'PHOENIX',
            img: agentPhoenix,
            picked: false,
            location: 'United Kingdom',
            skills: [
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', through_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', skyFell_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', invitingOrb_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', rebel_w]
                },
            ],
        },
    {
            name: 'JETT',
            img: agentJett,
            picked: false,
            location: 'South Korea',
            skills: [
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', surround_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', throwUp_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', jerk_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', massacre_w]
                },
            ],
        },
    {
            name: 'SOVA',
            img: agentSova,
            location: 'Russia',
            picked: false,
            skills: [
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', shaveOff_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', catenary_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', mindBlowing_w]
                },
                {
                    type: '', title: '',
                    description: '',
                    icon: ['', legolas_w]
                },
            ],
        },
        {
            name: 'SAGE',
            img: agentSage,
            location: 'China',
            picked: true,
            skills: [
                {
                    type: 'BASIC', title: 'Slow Orb',
                    description: 'Cast out a radianite orb that breaks into a slowing field ' +
                        'upon impact with the ground.',
                    icon: [SlowOrb_b, '']
                },
                {
                    type: 'BASIC', title: 'Aggravate Damage',
                    description: 'accumulates received damage into a sphere and makes ' +
                        'a trap out of it',
                    icon: [AggravateDamage_b, '']
                },
                {
                    type: 'SIGNATURE', title: 'Healing Orb',
                    description: 'Heal an ally or yourself to full health over a few seconds.',
                    icon: [HealingOrb_b, '']
                },
                {
                    type: 'ULTIMATE', title: 'Resurrection',
                    description: 'Target a friendly corpse. After a short delay, revive ' +
                        'them with full health.',
                    icon: [Resurrection_b, '']
                },
            ],
        },
    ]

    const agentsListPare = agentsList.reduce(function(result, value, index, array) {
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
        return result;
    }, []);

    return (
        <div className="agents-page ">
            <div className="agents-page__container _container">
                <div className="agents-page__agents-list agents-list">
                    {agentsListPare.map(agentsPare =>
                        <div key={agentsPare[0].name} className="agents-page__pare">
                            {agentsPare.map(agent =>
                                <Agent key={agent.name}  agent={agent}></Agent>
                            )}
                        </div>
                    )}
                </div>
                <div className="agents-page__decoration">
                    <div className="agents-page__title-place">
                        <h1 className="agents-page__title">AGENTS</h1>
                    </div>
                </div>
                <div className="agents-page__image ">
                    <img src={agentsPageBG} alt="agents page background"/>
                </div>
            </div>
            <FooterSkills skills={agentsList[3].skills}/>
        </div>
    );
};

export default PageAgents;