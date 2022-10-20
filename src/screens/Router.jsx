import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Character from "./Character/Character"


const Router = () => {
    return (
        < BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/character" element={<Character />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;




