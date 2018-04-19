import React from 'react';
import QuestionDetails from '../containers/question-details';
import AddQuestion from '../containers/add-question';
require('../../../scss/main.scss');

const App = () => (
    <div className="container container-fluid">
        <header>
          <h2>Interview</h2>
        </header>
       <QuestionDetails />
        {/*<AddQuestion/>*/}
    </div>
);

export default App;
