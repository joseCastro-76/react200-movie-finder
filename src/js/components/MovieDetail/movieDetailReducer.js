const defaultState = {
    isFulfilled: false,
    isRejected: false,
    error: {},
    movieInformation: {}
}

export default function movieInfo (state = defaultState, action) {
    const { type, payload } = action;
    console.log(action);
    switch (type) {

        case 'FETCH_MOVIE_INFORMATION_PENDING':
            return state

        case 'FECTH_MOVIE_INFORMATION_FULFILLED':
            return {
                ...state,
                isFulfilled: true,
                movieInformation: payload
            }

        case 'FETCH_MOVIE_INFORMATION_REJECTED':
            return {
                ...state,
                isRejected: true,
                error: payload
            }

        default:
            return state
    }
}