import {combineReducers} from 'redux';
import QuestionDetailsReducer from './reducer-question-details';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    questionDetails: QuestionDetailsReducer,
});

export default allReducers
