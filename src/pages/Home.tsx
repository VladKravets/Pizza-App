import React, {useContext, useEffect, useRef, useState} from 'react';
import Categories from "../components/Categories";
import Sort, {sortList} from "../components/Sort";
import MyLoader from "../components/Pizza-block/MyLoader";
import PizzaBlock from "../components/Pizza-block/Pizza-block";
import Pagination from "../components/Pagination/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, selectSort} from "../BLL/slices/filter/selectors";
import {setCategoryId, setCurrentPage, setFilters} from "../BLL/slices/filter/filter-slice";
import axios from "axios";
import qs from 'qs'
import {useNavigate} from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {categoryId, currentPage} = useSelector(selectFilter);
    const sort = useSelector(selectSort)
    const isSearch = useRef(false)
    const isMounted = useRef(false)


    const {searchValue} = useContext<any>(SearchContext)
    const fetchPizzas = () => {
        setLoading(true)
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sort.sortProperty.replace('-', '')
        const category = categoryId > 0 ? `&category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : ''


        // fetch(`https://628dfd89a339dfef87a55c6c.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
        //     .then(res => res.json())
        //     .then(arr => {
        //         setItems(arr)
        //         setLoading(false)
        //     })

        axios.get
        (`https://628dfd89a339dfef87a55c6c.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
    }

    let [items, setItems] = useState([])
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        return () => {
            if (window.location.search) {
                const params = qs.parse(window.location.search.substring(1))
                const sort = sortList.find(obj => {
                    return obj.sortProperty === params.sortProperty
                })
                dispatch(setFilters({
                        ...params,
                        sort
                    })
                )
                isSearch.current = true
            }
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearch.current) {
            fetchPizzas()
        }

        isSearch.current = false
    }, [categoryId, sort, searchValue, currentPage]);

    // Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            return () => {
                const queryString = qs.stringify({
                        sortProperty: sort.sortProperty,
                        categoryId,
                        currentPage
                    }
                )
                navigate(`?${queryString}`)
            };
        }
        isMounted.current = true
    }, [categoryId, sort, searchValue, currentPage]);


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
    const onClickCategoryHandler = (id: number) => dispatch(setCategoryId(id))
    const onChangePage = (number: number) => {
        dispatch(setCurrentPage(number))
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategoryHandler}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : pizzas
                }
            </div>
            <Pagination onChange={onChangePage} currentPage={currentPage}/>
        </div>
    );
};

export default Home;
