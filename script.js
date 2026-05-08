let questions = [];
let currentCard = null;
let isFlipped = false;
let currentSet = 'general';

const STORAGE_KEY = 'flashcardMastery';
const SET_STORAGE_KEY = 'flashcardCurrentSet';

// Questions data organized by sets
const questionSets = {
    general: [
        {
            "id": 1,
            "question": "What is the capital of France?",
            "answer": "Paris",
            "mastery": 0
        },
        {
            "id": 2,
            "question": "What is 2 + 2?",
            "answer": "4",
            "mastery": 0
        },
        {
            "id": 3,
            "question": "What is the largest planet in our solar system?",
            "answer": "Jupiter",
            "mastery": 0
        },
        {
            "id": 4,
            "question": "Who wrote Romeo and Juliet?",
            "answer": "William Shakespeare",
            "mastery": 0
        },
        {
            "id": 5,
            "question": "What is the chemical symbol for gold?",
            "answer": "Au",
            "mastery": 0
        },
        {
            "id": 6,
            "question": "What year did the Titanic sink?",
            "answer": "1912",
            "mastery": 0
        },
        {
            "id": 7,
            "question": "What is the smallest country in the world?",
            "answer": "Vatican City",
            "mastery": 0
        },
        {
            "id": 8,
            "question": "What is the speed of light?",
            "answer": "299,792,458 meters per second",
            "mastery": 0
        }
    ],
    behavioral: [
        {
            "id": 1,
            "question": "Tell me about a time you had to work with a difficult team member.",
            "answer": "Describe the situation, your actions, and the positive outcome. Focus on communication and problem-solving.",
            "mastery": 0
        },
        {
            "id": 2,
            "question": "Describe a situation where you had to meet a tight deadline.",
            "answer": "Explain the challenge, how you prioritized, and the results you achieved.",
            "mastery": 0
        },
        {
            "id": 3,
            "question": "Tell me about a time you failed and what you learned from it.",
            "answer": "Be honest about the failure, explain what you learned, and how you applied it since.",
            "mastery": 0
        },
        {
            "id": 4,
            "question": "Give an example of when you showed leadership.",
            "answer": "Describe a situation where you took initiative, motivated others, or led a project.",
            "mastery": 0
        },
        {
            "id": 5,
            "question": "Tell me about a time you had to adapt to change.",
            "answer": "Share how you handled an unexpected change and the positive impact.",
            "mastery": 0
        },
        {
            "id": 6,
            "question": "Describe a situation where you went above and beyond.",
            "answer": "Explain the extra effort you made and the value it provided.",
            "mastery": 0
        },
        {
            "id": 7,
            "question": "Tell me about a time you resolved a conflict.",
            "answer": "Focus on your communication skills and how you reached a resolution.",
            "mastery": 0
        },
        {
            "id": 8,
            "question": "Give an example of how you handle stress or pressure.",
            "answer": "Describe your coping strategies and how you maintain productivity.",
            "mastery": 0
        }
    ]
};

// Load questions
function loadQuestions() {
    questions = JSON.parse(JSON.stringify(questionSets[currentSet]));
    
    // Initialize mastery scores from localStorage
    loadMasteryScores();
    
    // Load the first card
    loadNextCard();
}

// Switch question set
function switchQuestionSet(setName) {
    if (!questionSets[setName]) return;
    
    currentSet = setName;
    localStorage.setItem(SET_STORAGE_KEY, setName);
    document.getElementById('questionSetSelect').value = setName;
    
    isFlipped = false;
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.remove('flipped');
    
    loadQuestions();
}

// Load mastery scores from localStorage
function loadMasteryScores() {
    const stored = localStorage.getItem(STORAGE_KEY + '_' + currentSet);
    if (stored) {
        const masteryData = JSON.parse(stored);
        questions.forEach(q => {
            if (masteryData[q.id]) {
                q.mastery = masteryData[q.id];
            }
        });
    }
}

// Save mastery scores to localStorage
function saveMasteryScores() {
    const masteryData = {};
    questions.forEach(q => {
        masteryData[q.id] = q.mastery;
    });
    localStorage.setItem(STORAGE_KEY + '_' + currentSet, JSON.stringify(masteryData));
    updateStats();
}

// Get the lowest mastery score
function getLowestMastery() {
    return Math.min(...questions.map(q => q.mastery));
}

// Get all cards with the lowest mastery score
function getLowestMasteryCards() {
    const lowestMastery = getLowestMastery();
    return questions.filter(q => q.mastery === lowestMastery);
}

// Load a random card from the lowest mastery cards
function loadNextCard() {
    const lowestCards = getLowestMasteryCards();
    const randomIndex = Math.floor(Math.random() * lowestCards.length);
    currentCard = lowestCards[randomIndex];
    isFlipped = false;
    
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.remove('flipped');
    
    displayCard();
}

// Display the current card
function displayCard() {
    const text = isFlipped ? currentCard.answer : currentCard.question;
    document.getElementById('flashcardText').textContent = text;
    document.getElementById('masteryBadge').textContent = currentCard.mastery;
    updateStats();
}

// Toggle flip state
function flipCard() {
    isFlipped = !isFlipped;
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.toggle('flipped');
    displayCard();
}

// Handle right button (increase mastery)
function handleRight() {
    currentCard.mastery += 1;
    saveMasteryScores();
    loadNextCard();
}

// Handle wrong button (decrease mastery)
function handleWrong() {
    currentCard.mastery = Math.max(0, currentCard.mastery - 1);
    saveMasteryScores();
    loadNextCard();
}

// Reset all progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress for this question set? This cannot be undone.')) {
        questions.forEach(q => {
            q.mastery = 0;
        });
        localStorage.removeItem(STORAGE_KEY + '_' + currentSet);
        loadNextCard();
    }
}

// Update statistics display
function updateStats() {
    // Update card count
    const lowestMastery = getLowestMastery();
    const lowestCards = getLowestMasteryCards();
    document.getElementById('cardCount').textContent = `${lowestCards.length}/${questions.length}`;
    
    // Update average mastery
    const averageMastery = questions.reduce((sum, q) => sum + q.mastery, 0) / questions.length;
    document.getElementById('avgMastery').textContent = averageMastery.toFixed(1);
}

// Event listeners
document.getElementById('flashcard').addEventListener('click', flipCard);
document.getElementById('wrongBtn').addEventListener('click', handleWrong);
document.getElementById('rightBtn').addEventListener('click', handleRight);
document.getElementById('resetBtn').addEventListener('click', resetProgress);
document.getElementById('questionSetSelect').addEventListener('change', (e) => {
    switchQuestionSet(e.target.value);
});

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load the previously selected set from localStorage
    const savedSet = localStorage.getItem(SET_STORAGE_KEY);
    if (savedSet && questionSets[savedSet]) {
        currentSet = savedSet;
        document.getElementById('questionSetSelect').value = savedSet;
    }
    
    loadQuestions();
});
