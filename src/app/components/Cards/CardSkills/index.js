import React from 'react'
import * as CS from './CardSkillsStyles';

export const SkillsList = ({ id, title, active, setSelectedSkills }) => {

    return (
        <CS.Container
        className={active ? "skillsList active" : "skillsList"}
        onClick={() => setSelectedSkills(id)}
        >
        {title}
        </CS.Container>
    )
}
