import React, { Fragment, useState, useEffect, useContext } from "react";
import * as P from './PortfolioStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { NP } from '../../components/Navs/Portfolio';
import { 
    DestaqueData,
    JavaData,
    ReactData,
    PythonData,
    MobileData,
} from "../../sharing/db/dataPortfolio";
import { ModalPortfolio } from '../../components/ModalPortfolio';
import { PortfolioContext } from "../../sharing/context/portfolio";
import { AiOutlineRobot } from 'react-icons/ai';

export const Portfolio = () => {
    const { categoryPortfolio } = useContext(PortfolioContext);
    const [selected, setSelected] = useState("destaque");
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false); // Adicione este estado

    useEffect(() => {
        switch (selected) {
            case "destaque":
                setData(DestaqueData);
                break;
            case "java":
                setData(JavaData);
                break;
            case "react":
                setData(ReactData);
                break;
            case "python":
                setData(PythonData);
                break;
            case "mobile":
                setData(MobileData);
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
            setIsEmpty(false); // Define como não vazio
        } else {
            setIsEmpty(true); // Define como vazio
        }
    }, [data]);

    const handleFind = (id) => {
        const item = data.find(e => e.id === id);
        setList(item ? [item] : []);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

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
            <P.Wrapper isEmpty={isEmpty}>
                {isEmpty ? (
                    <P.EmptyMessage>
                        <AiOutlineRobot size={50} color="#666" />
                        <p>Seção em construção. Volte em breve para conferir meus projetos!</p>
                    </P.EmptyMessage>
                ) : (
                    data.map((item, index) => (
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
                                {list.length > 0 && list[0].id === item.id && (
                                    <ModalPortfolio
                                        show={show}
                                        handleClose={handleClose}
                                        id={list[0].id}
                                        subtitle={list[0].subtitle}
                                        title={list[0].title}
                                        img={list[0].img}
                                        img2={list[0].img2}
                                        preview={list[0].preview}
                                        description={list[0].description}
                                        date={list[0].date}
                                        technology={list[0].technology}
                                        url={list[0].url}
                                        github={list[0].github}
                                    />
                                )}
                            </P.Box>
                        </Fragment>
                    ))
                )}
            </P.Wrapper>
        </P.Container>
    );
};
