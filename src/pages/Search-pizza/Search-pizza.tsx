import React, {ChangeEvent, useContext} from 'react';
import style from './SearchPizza.module.scss';
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce';

const SearchPizza = () => {

    const {searchValue, setSearchValue} = useContext<any>(SearchContext)
    const inputRef = React.useRef<HTMLInputElement>(null);
    const testDebounce = React.useCallback(
        debounce(() => {
            console.log('Hello')
        }, 1000), []
    )
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value)
    const onClickClearInput = () => {
        setSearchValue('')
// @ts-ignore
        inputRef.current.focus()
    }

    return (
        <div className={style.root}>
            <svg
                className={style.icon}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"><title/>
                <g id="search">
                    <path
                        d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/>
                </g>
            </svg>
            <input
                ref={inputRef}
                className={style.input}
                type="text"
                placeholder={'Поиск пиццы 🍕...'}
                value={searchValue}
                onChange={onChangeHandler}
            />
            {searchValue &&
                <svg
                    onClick={onClickClearInput}
                    className={style.clearIcon} height="48" viewBox="0 0 48 48" width="48"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                    <path d="M0 0h48v48h-48z" fill="none"/>
                </svg>
            }
        </div>
    );
};

export default SearchPizza;
