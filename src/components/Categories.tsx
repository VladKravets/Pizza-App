import React from 'react';

const Categories = () => {
    return (
        <div className="categories">
            <ul>
                <li className="">Все</li>
                <li className="">Мясные</li>
                <li className="active">Вегетарианская</li>
                <li className="">Гриль</li>
                <li className="">Острые</li>
                <li className="">Закрытые</li>
            </ul>
        </div>
    );
};

export default Categories;
