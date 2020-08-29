import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

const Pagination = ({
    totalUsersCount: totalItemsCount, 
    pageSize, 
    currentPage, 
    onPageChanged,
    portionSize = 10
}) => {
    
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionoNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={ styles.paginator }>
            { portionNumber > 1 &&
                <button className={ styles.button }
                onClick={ () => setPortionoNumber(portionNumber - 1) }
                >⬅️ Left</button>
            }
            {
                pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <span 
                        className={ cn({
                            [styles.selectedPage] : currentPage === page
                        }, styles.pageNumber) }
                        key={ page }
                        onClick={ () => onPageChanged(page) }>
                            { page }
                        </span>
                    )
                })
            }
            { portionCount > portionNumber &&
                <button className={ styles.button }
                onClick={ () => setPortionoNumber(portionNumber + 1) }
                >➡️ Right</button>
            }
        </div>    
    )
}

export default Pagination;