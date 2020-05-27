const defaultState = {
    isFulfilled: false,
    isRejected: false,
    error: {},
    movieList: []
}

export default  function movies (state = defaultState, action)  {
    const { type, payload } = action;

    switch (type) {

        case 'FETCH_MOVIE_PENDING':
            return state

        case 'FETCH_MOVIE_FULFILLED':
            return {
                ...state,
                isFulfilled: true,
                movieList: payload
            }

        case 'FETCH_MOVIE_REJECTED':
            return {
                ...state,
                isRejected: true,
                error: payload
            }

        default:
            return state
    }
}