import React, { Fragment, useState, useEffect, useContext } from "react";
import * as P from './PortfolioStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { NP } from '../../components/Navs/Portfolio';
import { 
    DestaqueData,
    JavaData,
    SpringData,
    ReactData,
    PythonData,
    PHPData, 
    WEBData,
} from "../../sharing/db/dataPortfolio";
import { ModalPortfolio } from '../../components/ModalPortfolio'
import { PortfolioContext } from "../../sharing/context/portfolio";

export const Portfolio = () => {
    const { categoryPortfolio } = useContext(PortfolioContext);
    const [selected, setSelected] = useState("destaque");
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        switch (selected) {
            case "destaque":
                setData(DestaqueData);
                break;
            case "java":
                setData(JavaData);
                break;
            case "spring":
                setData(SpringData);
                break;
            case "react":
                setData(ReactData);
                break;
            case "python":
                setData(PythonData);
                break;
            case "php":
                setData(PHPData);
                break;
            case "web":
                setData(WEBData);
                break;
            default:
                setData(DestaqueData);
        }
    }, [selected]);

    useEffect(() => {
        const sortProjectsByDate = (projects) => {
            return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
        };

        if (data.length > 0) {
            setData(sortProjectsByDate(data));
        }
    }, [data]);

    const handleFind = (id) => {
        const item = data.filter(e => e.id === id)
        setList(item)
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <P.Container id="portfolio">
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Portfólio'} subtitle={'Conhecimentos em prática!'} />
            </AnimationOnScroll>
            <P.NavbarPortfolio>
                {categoryPortfolio.map((item, index) => (
                    <NP
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        key={index}
                    />
                ))}
            </P.NavbarPortfolio>
            <P.Wrapper>
                {data && data.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <P.Box>
                                <P.ImgContainer>
                                    <img src={item.img} alt={item.title} />
                                </P.ImgContainer>
                                <h2>{item.title}</h2>
                                <p>{item.preview}</p>
                                <div className="text-center">
                                    <span>{item.technology}</span>
                                </div>
                                <div className="date text-center">
                                    <span>{item.date}</span>
                                </div>
                                <div className="btn-container">
                                    <button onClick={() => handleFind(item.id)}>Ver mais</button>
                                </div>
                                {list.map((e, index) => {
                                    if (e.id === item.id) {
                                        return (
                                            <ModalPortfolio
                                                show={show}
                                                handleClose={handleClose}
                                                id={e.id}
                                                subtitle={e.subtitle}
                                                title={e.title}
                                                img={e.img}
                                                img2={e.img2}
                                                preview={e.preview}
                                                description={e.description}
                                                date={e.date}
                                                technology={e.technology}
                                                url={e.url}
                                                github={e.github}
                                                key={index}
                                            />
                                        )
                                    }
                                    return null; // Adicionando retorno padrão
                                })}
                            </P.Box>
                        </Fragment>
                    )
                })}
            </P.Wrapper>
        </P.Container>
    )
}
