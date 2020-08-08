import React from 'react';
import styles from './News.module.css'

const News = (props) => {
    return (
        <div className={ styles.searchContainer }>
            <div className={ styles.searchWrapper }>
                <div>
                    icon
                </div>
                <div>
                    <input
                        className={ styles.input } 
                        type="text"
                        placeholder='Search anime...' />
                </div>
                <div>drop icon</div>
            </div>
        </div>
    )
}

export default News;