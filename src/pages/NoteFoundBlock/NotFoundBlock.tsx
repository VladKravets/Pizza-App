import React from 'react';
import style from "./NotFoundBlock.module.css"

const NoteFoundBlock = () => {
    return (
        <div className={style.root}>
            <span>😕</span>
            <br/>
            <h1>Ничего не найдено</h1>
            <p className={style.description}>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
        </div>
    )
};

export default NoteFoundBlock;
