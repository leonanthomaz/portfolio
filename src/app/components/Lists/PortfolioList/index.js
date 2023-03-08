import React from 'react'
import * as CP from './PortfolioListStyles';

export const PortfolioList = ({ id, index, title, active, setSelected }) => {

    return (
        <CP.Container
        key={index}
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
        >
        {title}
        </CP.Container>
    )
}

