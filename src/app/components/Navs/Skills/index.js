import React from 'react'
import * as SK from './SkillsStyles';

export const SkillsList = ({ id, index, title, active, setSelectedSkills }) => {

    return (
        <SK.Label
        key={index}
        className={active ? "skillsList active" : "skillsList"}
        onClick={() => setSelectedSkills(id)}
        >
        {title}
        </SK.Label>
    )
}
