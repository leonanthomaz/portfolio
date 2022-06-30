import {PortfolioListStyle} from './PortfolioListStyles';

const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <PortfolioListStyle>
        <div
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
        >
        {title}
        </div>
    </PortfolioListStyle>
  );
}

export default PortfolioList;
