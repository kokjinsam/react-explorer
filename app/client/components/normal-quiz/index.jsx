import React from 'react';
import RequireLogin from '../../containers/require-login';
import RaisedButton from 'material-ui/lib/raised-button';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

const style = {
  button: {
    marginTop: '16px'
  }
};

class NormalQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.getQuestion = this.getQuestion.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
  }

  getQuestion(e) {
    e.preventDefault();
    const {getQuestion} = this.props;

    const question = getQuestion();
    return question;
  }

  validateAnswer(e) {
    e.preventDefault();
    const {question, validateAnswer} = this.props;

    const questionId = question._id;
    const userAnswer = this.refs.choices.getSelectedValue();
    validateAnswer(questionId, userAnswer);
    return;
  }

  makeList() {
    const {question} = this.props;
    return question.choices.map((choice) => {
      return <RadioButton
        key={choice}
        value={choice}
        label={choice}
        style={{
          marginBottom: 16
        }} />;
    });
  }

  renderNextBtn() {
    return <RaisedButton
    label="Next"
    onTouchTap={this.getQuestion}
    style={style.button}/>;
  }

  renderCheckBtn() {
    return <RaisedButton
    label="Check Answer"
    onTouchTap={this.validateAnswer}
    style={style.button}/>;
  }

  renderWhichBtn() {
    const {readyNext} = this.props;

    return readyNext ? this.renderNextBtn() : this.renderCheckBtn();
  }

  renderStartBtn() {
    return <RaisedButton
    label="Start"
    onTouchTap={this.getQuestion}
    style={style.button}/>;
  }

  renderProperNote() {
    const {isCorrect} = this.props;

    if (isCorrect === false) {
      return <p>Oh no, Try again!</p>;
    }

    if (isCorrect === undefined) {
      return null;
    }
  }

  render() {
    const {question, isCorrect} = this.props;
    return (
      <RequireLogin>
        <div className="quiz">
          <h2 className="title">{question ? question.question + '?' : 'Press start below'}</h2>
          <RadioButtonGroup
            name="choices"
            ref="choices">
            {question ? this.makeList() : null}
          </RadioButtonGroup>
          {isCorrect ? <p>Bingo, press Next</p> : this.renderProperNote()}
          {question ? this.renderWhichBtn() : this.renderStartBtn()}
        </div>
      </RequireLogin>
    );
  }
}

export default NormalQuiz;
