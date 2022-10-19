import { Routes, Route } from "react-router-dom";
import { Contato } from "../../pages/Contato";
import { Courses } from "../../pages/Courses";
import { Home } from "../../pages/Home";
import { Portfolio } from "../../pages/Portfolio";
import { Skills } from "../../pages/Skills";

export const AppRouter = () => {

    return(
       <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/home" exact element={<Home/>}/>
            <Route path="/portfolio" exact element={<Portfolio/>}/>
            <Route path="/skills" exact element={<Skills/>}/>
            <Route path="/cursos" exact element={<Courses/>}/>
            <Route path="/contato" exact element={<Contato/>}/>
       </Routes>
    )
}