import React from 'react';
import { newsAPI } from '../../api/api';
import News from './News';
import { connect } from 'react-redux';
import { updateNewSearchQuery } from '../../redux/news_reducer';

const NewsContiner = (props) => {
    return <News {...props} />
}

const mapStateToProps = (state) => {
    return {
        newSearchQuery: state.newsPage.newSearchQuery
    }
}



export default connect(mapStateToProps, {
    updateNewSearchQuery
})(NewsContiner);