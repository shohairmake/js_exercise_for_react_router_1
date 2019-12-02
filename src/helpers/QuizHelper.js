import _ from "lodash";
import he from 'he';
import axios from 'axios';

const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";

class QuizHelper {
    constructor({ question, correctAnswer, incorrectAnswers }) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.incorrectAnswers = [...incorrectAnswers];
    }

    static async quizfetcher() {
        try {
            const response = await axios.get(API_URL);
            const quizDataList = await response.data.results;
            return quizDataList.map(result => {
                return {
                    question: he.decode(result.question),
                    correctAnswer: he.decode(result.correct_answer),
                    incorrectAnswers: result.incorrect_answers.map(data => he.decode(data))
                };
            })
                .map(quizData => {
                    return new QuizHelper(quizData);
                });
        } catch (e) {
            console.log(`faild to fetchData at QuizHelper! error message : ${e.message}`)
        }
    }

    answerChecker(answer) {
        return answer === this.correctAnswer;
    }

    shuffleAnswers() {
        return _.shuffle([
            this.correctAnswer,
            ...this.incorrectAnswers
        ]);
    }

}

export default QuizHelper;