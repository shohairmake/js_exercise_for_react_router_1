import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuizHelper from "../../helpers/QuizHelper";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
      answers: [],
      currentIndex: 0,
      numberOfCorrects: 0
    };
  }

  componentDidMount() {
    this.initAndFetchData();
  }

  async initAndFetchData() {
    this.setState({
      quizzes: [],
      currentIndex: 0,
      numberOfCorrects: 0
    });
    const quizzes = await QuizHelper.quizfetcher();
    this.setState({ quizzes });
  }

  render() {
    const { quizzes, currentIndex } = this.state;
    // now loading
    if (quizzes.length === 0) {
      return <> {this.renderLoading()} </>;
    }

    // playing the quiz
    if (quizzes.length > 0 && currentIndex < quizzes.length) {
      return <> {this.renderQuiz()} </>;
    }

    // finish the quiz
    if (quizzes.length > 0 && currentIndex >= quizzes.length) {
      return <> {this.renderResult()} </>;
    }
  }

  renderLoading() {
    return (
      <div>
        <h1>クイズページ</h1>
        <p>Now loading...</p>
        <hr />
        <Link to="/">トップページへ</Link>
      </div>
    );
  }

  renderQuiz() {
    const { currentIndex, quizzes } = this.state;
    const quiz = quizzes[currentIndex];
    const answers = quiz.shuffleAnswers().map((answer, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.onclickhundler(quiz, answer)}>
            {answer}
          </button>
        </li>
      );
    });

    return (
      <div>
        <h1>クイズページ</h1>
        <div>
          <p>{quiz.question}</p>
          <ul>{answers}</ul>
        </div>
        <hr />
        <Link to="/">トップページへ</Link>
      </div>
    );
  }

  renderResult() {
    const { quizzes, numberOfCorrects } = this.state;

    return (
      <div>
        <h1>クイズページ</h1>
        <div>
          <p>{`${numberOfCorrects}/${quizzes.length} corrects.`}</p>
          <button
            onClick={() => {
              this.initAndFetchData();
            }}
          >
            Restart
          </button>
        </div>
        <hr />
        <Link to="/">トップページへ</Link>
      </div>
    );
  }

  onclickhundler = (quiz, answer) => {
    let { currentIndex, numberOfCorrects } = this.state;
    const isCorrect = quiz.answerChecker(answer);
    if (isCorrect) {
      numberOfCorrects++;
      window.alert("Correct answer!!");
    } else {
      window.alert(
        `Incorrect answer!! (Correct answer is ...${quiz.correctAnswer})`
      );
    }
    currentIndex++;
    this.setState({
      currentIndex,
      numberOfCorrects
    });
  };
}

export default Quiz;
