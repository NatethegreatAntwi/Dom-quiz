// DOM Elements
const menuPage = document.getElementById("menu-page");
const learningPage = document.getElementById("learning-page");
const manipulationPage = document.getElementById("manipulation-page");
const quizPage = document.getElementById("quiz-page");

const learningModeBtn = document.getElementById("learning-mode-btn");
const manipulationModeBtn = document.getElementById("manipulation-mode-btn");
const quizModeBtn = document.getElementById("quiz-mode-btn");

const backToMenuFromLearning = document.getElementById("back-to-menu-from-learning");
const backToMenuFromManipulation = document.getElementById("back-to-menu-from-manipulation");
const backToMenuFromQuiz = document.getElementById("back-to-menu-from-quiz");

// Navigation Functions
function showSection(sectionToShow) {
  // Hide all sections
  menuPage.classList.add("hidden");
  learningPage.classList.add("hidden");
  manipulationPage.classList.add("hidden");
  quizPage.classList.add("hidden");

  // Show the requested section
  sectionToShow.classList.remove("hidden");
}

// Event Listeners
learningModeBtn.addEventListener("click", () => showSection(learningPage));
manipulationModeBtn.addEventListener("click", () => showSection(manipulationPage));
quizModeBtn.addEventListener("click", () => showSection(quizPage));

backToMenuFromLearning.addEventListener("click", () => showSection(menuPage));
backToMenuFromManipulation.addEventListener("click", () => showSection(menuPage));
backToMenuFromQuiz.addEventListener("click", () => showSection(menuPage));

// -------------------
// Learning Mode Logic
// -------------------
const learningStep = document.getElementById("learning-step");
const nextLearningStep = document.getElementById("next-learning-step");

const learningSteps = [
  "Step 1: Use `document.getElementById()` to select an element by its ID.",
  "Step 2: Use `document.querySelector()` to select elements with CSS selectors.",
  "Step 3: Use `document.createElement()` to create new elements.",
  "Step 4: Use `element.appendChild()` to append a new element to a parent.",
  "Step 5: Use `element.classList.add()` to add classes for styling.",
  "Step 6: Use `element.setAttribute()` to add or modify attributes.",
  "Step 7: Use `element.remove()` to remove elements from the DOM.",
  "Step 8: Use `element.textContent` or `element.innerHTML` to update content.",
  "Step 9: Use `element.style` to update inline styles dynamically."
];
let currentLearningStep = 0;

nextLearningStep.addEventListener("click", () => {
  if (currentLearningStep < learningSteps.length) {
    learningStep.textContent = learningSteps[currentLearningStep];
    currentLearningStep++;
  } else {
    learningStep.textContent = "You've completed Learning Mode!";
    nextLearningStep.classList.add("hidden");
  }
});

// -------------------------------
// DOM Manipulation Techniques Logic
// -------------------------------
const manipulationStep = document.getElementById("manipulation-step");
const nextManipulationStep = document.getElementById("next-manipulation-step");

const manipulationTechniques = [
  {
    title: "Select Elements by Class or Tag",
    example: "document.querySelectorAll('.class-name');",
    description: "Select all elements matching a specific CSS selector."
  },
  {
    title: "Insert HTML Content",
    example: "element.innerHTML = '<p>New Content</p>';",
    description: "Directly set HTML content for an element. Use cautiously to avoid security risks."
  },
  {
    title: "Event Listeners",
    example: "element.addEventListener('click', callbackFunction);",
    description: "Attach event listeners to handle user interactions like clicks or key presses."
  },
  {
    title: "Remove Classes",
    example: "element.classList.remove('class-name');",
    description: "Remove specific classes from an element for styling changes."
  },
  {
    title: "Toggle Classes",
    example: "element.classList.toggle('class-name');",
    description: "Add or remove a class based on its current state."
  },
  {
    title: "Modify Styles Dynamically",
    example: "element.style.backgroundColor = 'red';",
    description: "Directly modify inline styles for elements."
  },
  {
    title: "Clone Nodes",
    example: "const clone = element.cloneNode(true);",
    description: "Clone an element, optionally including its child nodes."
  },
  {
    title: "Remove Nodes",
    example: "element.remove();",
    description: "Remove an element from the DOM entirely."
  }
];
let currentManipulationStep = 0;

nextManipulationStep.addEventListener("click", () => {
  const technique = manipulationTechniques[currentManipulationStep];
  if (technique) {
    manipulationStep.innerHTML = `
      <h3>${technique.title}</h3>
      <p><strong>Example:</strong> <code>${technique.example}</code></p>
      <p>${technique.description}</p>
    `;
    currentManipulationStep++;
  } else {
    manipulationStep.innerHTML = "You've completed DOM Manipulation Techniques!";
    nextManipulationStep.classList.add("hidden");
  }
});

// -------------------
// Quiz Mode Logic
// -------------------
const questionEl = document.getElementById("question");
const userAnswerEl = document.getElementById("user-answer");
const submitAnswerBtn = document.getElementById("submit-answer");
const feedbackEl = document.getElementById("feedback");
const nextQuestionBtn = document.getElementById("next-question");

const quizQuestions = [
  {
    question: "How do you select an element by its unique ID?",
    correctAnswer: "getElementById",
    explanation: "The `getElementById` method is used to select an element using its unique ID."
  },
  {
    question: "How do you create a new element?",
    correctAnswer: "createElement",
    explanation: "The `createElement` method is used to create new elements in the DOM."
  },
  {
    question: "How do you attach an event listener to an element?",
    correctAnswer: "addEventListener",
    explanation: "The `addEventListener` method allows you to listen for events like clicks or keypresses."
  }
];
let currentQuizIndex = 0;

function loadQuizQuestion() {
  const quiz = quizQuestions[currentQuizIndex];
  questionEl.textContent = quiz.question;
  userAnswerEl.value = ""; // Clear the input field
  feedbackEl.textContent = ""; // Clear feedback
  nextQuestionBtn.classList.add("hidden"); // Hide "Next Question" button
}

submitAnswerBtn.addEventListener("click", () => {
  const quiz = quizQuestions[currentQuizIndex];
  const userAnswer = userAnswerEl.value.trim();
  if (userAnswer === quiz.correctAnswer) {
    feedbackEl.textContent = "Correct! " + quiz.explanation;
    feedbackEl.style.color = "green";
    nextQuestionBtn.classList.remove("hidden"); // Show "Next Question" button
  } else {
    feedbackEl.textContent = "Wrong! " + quiz.explanation;
    feedbackEl.style.color = "red";
    nextQuestionBtn.classList.remove("hidden"); // Show "Next Question" button
  }
});

nextQuestionBtn.addEventListener("click", () => {
  currentQuizIndex++;
  if (currentQuizIndex < quizQuestions.length) {
    loadQuizQuestion(); // Load the next question
  } else {
    questionEl.textContent = "Quiz Complete! You've answered all the questions.";
    feedbackEl.textContent = "";
    userAnswerEl.classList.add("hidden"); // Hide input field
    submitAnswerBtn.classList.add("hidden"); // Hide submit button
    nextQuestionBtn.classList.add("hidden"); // Hide "Next Question" button
  }
});

// Initialize the first quiz question
loadQuizQuestion();