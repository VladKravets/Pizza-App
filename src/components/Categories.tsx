import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(3)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
    const onClickCategories = (index: number) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((cat,index) => {
                    return <li
                        key={index}
                        onClick={() => onClickCategories(index)}
                        className={activeIndex === index ? 'active' : ''}>{cat}
                    </li>
                })}

            </ul>
        </div>
    );
};

export default Categories;
