import React from 'react'
import * as CP from './CardPortfolioStyles';

export const PortfolioList = ({ id, title, active, setSelected }) => {

    return (
        <CP.Container
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
        >
        {title}
        </CP.Container>
    )
}

