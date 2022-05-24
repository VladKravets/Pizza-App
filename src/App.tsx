import React from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/Pizza-block";

function App() {
    return (
        <div id="root">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            <PizzaBlock
                                title={'Кисло-сладкий цыпленок'}
                                imageUrl={"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg"}
                                price={27.90}
                            />
                            <PizzaBlock
                                title={'Крэйзи пепперони'}
                                imageUrl={'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg'}
                                price={27.90}
                            />
                            <PizzaBlock
                                title={'Маргарита'}
                                imageUrl={'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg'}
                                price={27.90}
                            />
                        </div>
                        <ul className="Pagination_root__uwB0O">
                            <li
                                className="previous disabled">
                                <a
                                    className=" " role="button"
                                    aria-disabled="true" aria-label="Previous page"
                                    rel="prev">&lt;
                                </a>
                            </li>
                            <li className="selected"><a rel="canonical" role="button"
                                                        aria-label="Page 1 is your current page"
                                                        aria-current="page">1</a></li>
                            <li>
                                <a rel="next" role="button" aria-label="Page 2"/>2
                            </li>
                            <li>
                                <a role="button" aria-label="Page 3"/>3
                            </li>
                            <li className="next">
                                <a
                                    className="" role="button" aria-disabled="false"
                                    aria-label="Next page" rel="next">&gt;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
