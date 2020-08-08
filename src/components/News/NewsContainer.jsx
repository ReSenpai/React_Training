import React from 'react';
import style from './News.module.css'
import { newsAPI } from '../../api/api';

const News = (props) => {
    newsAPI.search()
    .then(data => console.log(data))
    return (
        <div>
            News
        </div>
    )
}

export default News;