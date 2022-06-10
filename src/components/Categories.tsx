import React from 'react';

export type CategoriesPropsType = {
    value: number
    onClickCategory: (id: number) => void
}

const Categories: React.FC<CategoriesPropsType> = ({value, onClickCategory}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => {
                    return <li
                        key={index}
                        onClick={() => onClickCategory(index)}
                        className={value === index ? 'active' : ''}>{categoryName}
                    </li>
                })}

            </ul>
        </div>
    );
};

export default Categories;
