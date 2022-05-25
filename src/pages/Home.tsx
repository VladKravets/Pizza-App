import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import MyLoader from "../components/Pizza-block/MyLoader";
import PizzaBlock from "../components/Pizza-block/Pizza-block";

const Home = () => {
    let [items, setItems] = useState([])
    const [isLoading, setloading] = useState<boolean>(true)

    useEffect(() => {
        fetch('https://628dfd89a339dfef87a55c6c.mockapi.io/items')
            .then(res => res.json())
            .then(arr => {
                setItems(arr)
                setloading(false)
            })
    }, []);


    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <MyLoader key={index}/>)
                        : items.map(obj => {
                                return (
                                    //@ts-ignore
                                    <PizzaBlock key={obj.id}{...obj}/>
                                )
                            }
                        )
                }
            </div>
        </>
    );
};

export default Home;
