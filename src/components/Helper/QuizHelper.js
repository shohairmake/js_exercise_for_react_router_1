import _ from "lodash";
import he from 'he';

const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";

class QuizHelper {
    constructor({ question, correctAnswer, incorrectAnswers }) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.incorrectAnswers = [...incorrectAnswers];
    }

    static async quizfetcher() {
        try {
            const response = await fetch(API_URL);
            const quizData = await response.json();
            const quizDataList = await quizData.results;
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

    AnswerChecker(answer) {
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