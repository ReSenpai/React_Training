const UPDATE_NEW_SEARCH_QUERY = 'news/UPDATE_NEW_SEARCH_QUERY';

type SearchResultType = {
    mal_id: number
    url: string
    image_url: string
    title: string
    airing: boolean
    synopsis: string
    type: string
    episodes: number
    score: number
    start_date: string
    end_date: string
    members: number
    rated: string
}

let initialState = {
    searchResult: [] as Array<SearchResultType>,
    newSearchQuery: '' as string,
    isFetching: true as boolean
};
export type InitialStateType = typeof initialState;

const newsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_SEARCH_QUERY:
            return {
                ...state,
                newSearchQuery: action.newSearchQuery
            }
        default:
            return state;
    }
}

type UpdateNewSearchQueryActionType = {
    type: typeof UPDATE_NEW_SEARCH_QUERY
    newSearchQuery: string
}
export const updateNewSearchQuery = (text: string): UpdateNewSearchQueryActionType => ({
    type: UPDATE_NEW_SEARCH_QUERY,
    newSearchQuery: text
})


export default newsReducer;