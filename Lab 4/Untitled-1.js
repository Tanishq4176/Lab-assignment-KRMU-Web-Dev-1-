// Lab 4 - Prompt Quizzer: A Quiz Game

// Array of quiz questions and answers
const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which language runs in the browser?", answer: "javascript" },
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "What year was JavaScript created?", answer: "1995" },
  { question: "Who is known as the father of computers?", answer: "charles babbage" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // initialize score

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    // Normalize input
    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    }

    // Check answer
    if (userAnswer === quizQuestions[i].answer) {
      score++;
      alert("✅ Correct!");
    } else {
      alert("❌ Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Final score
  alert("🎯 Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// Run the quiz
runQuiz();