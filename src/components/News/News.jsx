import React from 'react';
import styles from './News.module.css'

const News = (props) => {

    let newSearchElement = React.createRef();

    const onSearchChange = (event) => {
        let text = event.target.value;
        // props.updateNewSearchQuery(text);
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
                        className={ styles.input } 
                        type="text"
                        placeholder='Search anime...'
                        ref={ newSearchElement }
                        // value={ props.newSearchQuery }
                        onKeyPress={ onSearchChange } />
                </div>
                <div>drop icon</div>
            </div>
        </div>
    )
}

export default News;