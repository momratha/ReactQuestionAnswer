/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function(state=[], action) {
    switch(action.type) {
        case 'GET_QUESTION':
            return [action.payload];
            break;
        case 'default':
            return state;
            break;
    }

    return state;

}
