import React from 'react'
import * as CS from './SkillsListStyles';

export const SkillsList = ({ id, index, title, active, setSelectedSkills }) => {

    return (
        <CS.Label
        key={index}
        className={active ? "skillsList active" : "skillsList"}
        onClick={() => setSelectedSkills(id)}
        >
        {title}
        </CS.Label>
    )
}
