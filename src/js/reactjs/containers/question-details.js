import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getQuestion} from '../actions/index';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class QuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question_id: 1,
            checked_answer_id: '',
            order_id: 1
        };
    }

    componentWillMount() {
      this.props.getQuestion(this.state.order_id, this.state.question_id, this.state.checked_answer_id);
    }

    _onChecked(e) {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox,i) => {
            if(checkbox.checked) {
                checkbox.checked = false;
            }
        });
        e.target.checked = true;


        this.setState({order_id : parseInt(this.props.questionDetails[0].question.order_number) + 1});
        this.setState({question_id: this.props.questionDetails[0].question.id});
        this.setState({checked_answer_id: eval(parseInt(e.target.id))});
    }

    _handleNext() {
      this.props.getQuestion(this.state.order_id, this.state.question_id, this.state.checked_answer_id);
    }

    render() {
        let current_question, answers_list;

        console.log(this.props.questionDetails);
        if(this.props.questionDetails[0]) {
          answers_list = this.props.questionDetails[0].answers.map((answer, index) => {
              return (
                  <li className="list-group-item" key={index}>
                      <input
                      type='checkbox'
                      id={index+1}
                      onClick={this._onChecked.bind(this)}/>
                      <label htmlFor={index+1}>{answer.answer}</label>
                  </li>
              );
          });

          if(this.props.questionDetails[0].score) {
            current_question =  <p className="alert alert-success display_score">
                                    <h4>Congratulations!</h4>
                                    <p>You have scored {this.props.questionDetails[0].score} </p>
                                </p>;
          } else {
            current_question =
                <div className='question_wrapper'>
                    <h3>
                      {this.props.questionDetails[0].question.order_number}.
                      {this.props.questionDetails[0].question.question}
                    </h3>
                    <ul className='list-group'>
                        {answers_list}
                    </ul>
                </div>;
          }
        }

        return (
            <div className='container container-fliud'>
                <div className='row'>
                    <div className='col-md-6'>
                         {current_question}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 text-center'>
                         <input
                            type="submit"
                            className="btn btn-primary"
                            value='next'
                            onClick={this._handleNext.bind(this)}/>
                    </div>
                </div>

            </div>
        );
    }
}

const matchDispatchToProps = dispatch =>
    bindActionCreators({getQuestion}, dispatch);


// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        questionDetails: state.questionDetails
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionDetails);
