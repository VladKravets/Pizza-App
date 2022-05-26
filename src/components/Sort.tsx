import React, {useState} from 'react';

type SortType = {
    name: string;
    sortProperty: string;
};
export enum SortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}
export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
    value: SortType;
    onChangeSort:any
};


const Sort: React.FC<SortPopupProps> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const list= [
        {name: 'популярности(DESC)', sortProperty: 'rating'},
        {name: 'популярности(ASC)', sortProperty: '-rating'},
        {name: 'цене(DESC)', sortProperty: 'price'},
        {name: 'цене(ASC)', sortProperty: '-price'},
        {name: 'алфавиту(DESK)', sortProperty: 'title'},
        {name: 'алфавиту(ASC)', sortProperty: '-title'},
    ]

    const onClickIsVisible = () => setIsVisible(!isVisible)
    const onClickListItem = (obj:SortType) => {
        props.onChangeSort(obj)
        setIsVisible(false)
    }
    return (
        <div className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"></path>
                </svg>
                <b>Сортировка по:</b><span onClick={onClickIsVisible}>{props.value.name}</span></div>
            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {list.map((obj, index) => {
                            return (<li
                                key={index}
                                onClick={() => onClickListItem(obj)}
                                className={props.value.sortProperty === obj.sortProperty ? 'active' : ''}>{obj.name}</li>)
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
