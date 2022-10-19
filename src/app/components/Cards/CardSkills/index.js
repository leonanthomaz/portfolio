import React from 'react'
import * as CS from './CardSkillsStyles';

export const SkillsList = ({ id, index, title, active, setSelectedSkills }) => {

    return (
        <CS.Container
        key={index}
        className={active ? "skillsList active" : "skillsList"}
        onClick={() => setSelectedSkills(id)}
        >
        {title}
        </CS.Container>
    )
}
