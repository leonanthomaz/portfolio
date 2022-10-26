import { Routes, Route } from "react-router-dom";
import { Contact } from "../../pages/Contact";
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
            <Route path="/courses" exact element={<Courses/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
       </Routes>
    )
}