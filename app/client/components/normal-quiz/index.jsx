import React from 'react';
import RequireLogin from '../../containers/require-login';
import RaisedButton from 'material-ui/lib/raised-button';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

class NormalQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.getQuestion = this.getQuestion.bind(this);
  }

  componentDidMount() {
    console.log('mounted NormalQuiz');
  }

  getQuestion(e) {
    e.preventDefault();
    const {getQuestion} = this.props;

    const question = getQuestion();
    return question;
  }

  render() {
    const {question} = this.props;
    return (
      <RequireLogin>
        <div>
          <h2>{question ? question[0].question : 'nothing'}</h2>
          <RadioButtonGroup
            name="choices">
            {
              question[0].choices.map((choice) => {
                return <RadioButton
                  key={choice}
                  value={choice}
                  label={choice}
                  style={{
                    marginBottom: 16
                  }} />;
              })
            }
          </RadioButtonGroup>
          Normal Quiz
          <RaisedButton
          label="Default"
          onTouchTap={this.getQuestion}/>
        </div>
      </RequireLogin>
    );
  }
}

export default NormalQuiz;
