import React from 'react';
import ReactPaginate from "react-paginate";
import style from './Pagination.module.scss'

export type PaginationPropsType = {
    onChange: (number: number) => void
    currentPage:number
}

const Pagination: React.FC<PaginationPropsType> = (props) => {


    return (
        <ReactPaginate
            className={style.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => props.onChange(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={props.currentPage - 1}
            previousLabel="<"
        />
    );
};

export default Pagination;
