import React from 'react';
import styles from './News.module.css'

const News = (props) => {

    const onSearchChange = (event) => {
        let text = event.target.value;
        props.updateNewSearchQuery(text);
        console.log(text)
        
    }

    return (
        <div className={ styles.searchContainer }>
            <div className={ styles.searchWrapper }>
                <div>
                    icon
                </div>
                <div>
                <input
                        type='text'
                        className={ styles.input }
                        placeholder='Search anime...'
                        value={ props.newSearchQuery }
                        onChange={ onSearchChange } />
                </div>
                <div>drop icon</div>
            </div>
        </div>
    )
}

export default News;