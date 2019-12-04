import QuizHelper from '../../../src/helpers/QuizHelper';

const testData = {
    question: 'test question',
    correctAnswer: 'test correctAnswer',
    incorrectAnswers: [
        'incorrectAnswer 1',
        'incorrectAnswer 2',
        'incorrectAnswer 3',
    ]
};

describe('Test for src/helpers/QuizHelper', () => {
    describe('Test for class method of the quizfetcher', () => {
        it('this has 10 QuizHelper instance', async () => {
            const quizzes = await QuizHelper.quizfetcher();
            expect(Array.isArray(quizzes)).toStrictEqual(true);
            expect(quizzes.length).toStrictEqual(10);
            quizzes.forEach(quiz => {
                expect(quiz instanceof QuizHelper).toStrictEqual(true);
            });
        });
    });
    

    describe('Test for instance method of the quizfetcher', () => {
        it('Hold the value passed in the constructor in the property', () => {
            const quiz = new QuizHelper(testData);

            expect(quiz instanceof QuizHelper).toStrictEqual(true);
            expect(quiz.question).toStrictEqual(testData.question);
            expect(quiz.correctAnswer).toStrictEqual(testData.correctAnswer);
            expect(quiz.incorrectAnswers).toStrictEqual(testData.incorrectAnswers);
        });

        it('test for shuffle method', () => {
            const quiz = new QuizHelper(testData);

            const shuffledAnswers1 = quiz.shuffleAnswers();
            const shuffledAnswers2 = quiz.shuffleAnswers();
            expect(shuffledAnswers1).not.toStrictEqual(shuffledAnswers2);
        });

        it('test for answerChecker method', () => {
            const quiz = new QuizHelper(testData);
            //answerChecker returns true if the argument value is correct, false if incorrect
            expect(quiz.answerChecker(testData.correctAnswer))
                .toStrictEqual(true);

            testData.incorrectAnswers.forEach(incorrectAnswer => {
                expect(quiz.answerChecker(incorrectAnswer))
                    .toStrictEqual(false);
            });
        });
    });
})