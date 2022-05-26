import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import MyLoader from "../components/Pizza-block/MyLoader";
import PizzaBlock from "../components/Pizza-block/Pizza-block";

export type SortArrayType = {
    name: string
    sortProperty: string
}
export type SortedCategoriesType = {}

const Home = () => {
    let [items, setItems] = useState([])
    const [isLoading, setloading] = useState<boolean>(true)
    const [categoryId, setCategoryID] = useState<number>(0)
    const [sort, setSort] = useState(
        {name: 'популярности', sortProperty: 'rating'},
    )

    useEffect(() => {
        setloading(true)
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sort.sortProperty.replace('-', '')
        const category = categoryId > 0
            ? `category=${categoryId}`
            : '';

        fetch(`https://628dfd89a339dfef87a55c6c.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => res.json())
            .then(arr => {
                setItems(arr)
                setloading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sort]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id: number) => setCategoryID(id)}/>
                <Sort value={sort} onChangeSort={(id: any) => setSort(id)}/>
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
        </div>
    );
};

export default Home;
