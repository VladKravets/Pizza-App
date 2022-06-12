import React, {useState} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NoteFound from "./pages/NoteFoundBlock/NoteFound";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext({})

function App() {
    const [searchValue, setSearchValue] = useState<string>('')


    return (
        <div id="root">
            <div className="wrapper">
                <SearchContext.Provider value={{searchValue,setSearchValue}}>
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path={'/*'} element={<NoteFound/>}/>
                        </Routes>
                    </div>
                </SearchContext.Provider>
            </div>
        </div>
    )
}

export default App;
