import React, { ChangeEvent } from 'react';
import styles from './News.module.css'
import { PropsType } from './NewsContainer';

const News: React.FC<PropsType> = (props) => {

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
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