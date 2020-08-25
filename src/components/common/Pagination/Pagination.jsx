import React from 'react';
import styles from '../../Users/Users.module.css';

const Pagination = ({
    totalUsersCount, 
    pageSize, 
    currentPage, 
    onPageChanged
}) => {
    
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    return (
        <div>
            <span className={styles.count}>{ 
                currentPage - 1
                ? currentPage - 1
                : 'Start' }</span>
            <button 
                className={ styles.button }
                onClick={ () => onPageChanged(currentPage -1 ) }
            >Left</button>
            <button 
                className={ styles.button }
                onClick={ () => onPageChanged(currentPage + 1) }
            >Right</button>
            <span className={styles.count}>{ 
                currentPage + 1 < totalUsersCount ?
                currentPage + 1 :
                'End'  }</span>
            <span>Total pages { pagesCount }</span>
        </div>    
    )
}

export default Pagination;