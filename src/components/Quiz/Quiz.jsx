import React, { Component } from "react";
import QuizHelper from "../Helper/QuizHelper";

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

  render() {
      return <> テスト </>;
  }

}

export default Quiz;
