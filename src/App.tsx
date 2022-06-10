import React from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NoteFound from "./pages/NoteFoundBlock/NoteFound";
import Cart from "./pages/Cart";


function App() {

    return (
        <div id="root">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path={'/*'} element={<NoteFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;
