import React from 'react'
import * as NPS from './PortfolioStyles';

export const NP = ({ id, index, title, active, setSelected }) => {

    return (
        <NPS.Label
        key={index}
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
        >
        {title}
        </NPS.Label>
    )
}

