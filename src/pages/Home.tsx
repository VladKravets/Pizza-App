import React, {useContext, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import MyLoader from "../components/Pizza-block/MyLoader";
import PizzaBlock from "../components/Pizza-block/Pizza-block";
import Pagination from "../components/Pagination/Pagination";
import {SearchContext} from "../App";


const Home= () => {

    const {searchValue}=useContext<any>(SearchContext)


    let [items, setItems] = useState([])
    const [isLoading, setLoading] = useState<boolean>(true)
    const [categoryId, setCategoryID] = useState<number>(0)
    const [sort, setSort] = useState(
        {name: 'популярности', sortProperty: 'rating'},
    )

    const [currentPage,setCurrentPage]=useState<number>(1)

    useEffect(() => {
        setLoading(true)
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sort.sortProperty.replace('-', '')
        const category = categoryId > 0 ? `&category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://628dfd89a339dfef87a55c6c.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => res.json())
            .then(arr => {
                setItems(arr)
                setLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sort, searchValue,currentPage]);

    const pizzas = items
        //Для статического массива-круто
        // .filter(obj => {
        //     // @ts-ignore
        //     return obj.title.toLowerCase().includes(props.searchValue.toLowerCase());
        // })
        .map(obj => {
            return (
                //@ts-ignore
                <PizzaBlock key={obj.id}{...obj}/>
            )
        })
    const skeletons = [...new Array(6)].map((_, index) => <MyLoader key={index}/>)


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
                        ? skeletons
                        : pizzas
                }
            </div>
            <Pagination onChange={(number)=>setCurrentPage(number)}/>
        </div>
    );
};

export default Home;