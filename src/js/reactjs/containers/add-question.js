import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addQuestion} from '../actions/index';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          question: '',
          answers_list: [],
          correct_answer: 1
        }
    }

    componentWillMount() {
    }

    _handleCorrectAnswer(e){
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox,i) => {
          if(checkbox.checked) {
              checkbox.checked = false;
          }
      });
      e.target.checked = true;
      this.setState({correct_answer: e.target.value});
    }

    _handleSubmit(e) {
      e.preventDefault();
      this.state.question = document.querySelector('.question').value;
      const answer_options = document.querySelectorAll('form input.answer_option');
      Array.from(answer_options).forEach((answer, index) => {
        if(answer.value === '') {
          console.log("please enter all fields");
          return;
        }
        this.state.answers_list.push(answer.value);
      });
      this.props.addQuestion(this.state.question, this.state.answers_list, this.state.correct_answer);
      this.setState({answers_list: []});
      console.log(this.state.answers_list);
    }

    render() {

        let answers_list_array = ['answer 1', 'answer 2', 'answer 3', 'answer 4'];
        let answers_list = answers_list_array.map((element, index) => {
          return (
            <li className="list-group-item" key={index}>
                <div className='col-sm-1'>
                  <input
                  className = "correct_answer"
                  type='checkbox'
                  value={index+1}
                  placeholder={`Enter ${element}`}
                  onClick={this._handleCorrectAnswer.bind(this)}/>
                </div>
                <div className='col-sm-11'>
                  <input
                  className = "answer_option"
                  type='text'
                  placeholder={`Enter ${element}`}/>
                </div>
            </li>
          );
        });

        return (
            <form className='container container-fliud' id="add-question">
                <div className='row enter-question-container'>
                    <div className='col-md-12'>
                        <label> Enter question </label>
                    </div>
                    <div className='col-md-12'>
                        <input type="text" className="question" placeholder="Enter question here" />
                    </div>
                </div>

                <div className='row answers-list-container'>
                    <div className='col-md-12'>
                        <ul className='list-group'>
                          <label> Enter Answer Options </label>
                          {answers_list}
                        </ul>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-12 text-center'>
                         <input
                            type="submit"
                            className="btn btn-primary"
                            value='Submit'
                            onClick={this._handleSubmit.bind(this)}/>
                    </div>
                </div>

            </form>
        );
    }
}

const matchDispatchToProps = dispatch =>
    bindActionCreators({addQuestion}, dispatch);

export default connect(null, matchDispatchToProps) (AddQuestion);
