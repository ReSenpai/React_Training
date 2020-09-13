import React from 'react';
import News from './News';
import { connect } from 'react-redux';
import { updateNewSearchQuery, UpdateNewSearchQueryActionType } from '../../redux/news_reducer';
import { AppStateType } from '../../redux/redux_store';


type MapStatePropsType = {
    newSearchQuery: string
}

type MapDispatchPropsType = {
    updateNewSearchQuery: (text: string) => UpdateNewSearchQueryActionType
}

type OwnPropsType = {

}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const NewsContiner: React.FC<PropsType> = (props) => {
    return <News {...props} />
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        newSearchQuery: state.newsPage.newSearchQuery
    }
}



export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    updateNewSearchQuery
})(NewsContiner);