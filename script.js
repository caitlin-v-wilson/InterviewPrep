let questions = [];
let currentCard = null;
let isFlipped = false;
let currentSet = 'general';

const STORAGE_KEY = 'flashcardMastery';
const SET_STORAGE_KEY = 'flashcardCurrentSet';

// Questions data organized by sets
const questionSets = {
    python: [
        {
            "id": 1,
            "question": "What are the differences between lists, tuples, sets, and dictionaries in Python?",
            "answer": "Lists are ordered, mutable, and allow duplicate items, tuples are ordered, immutable, and allow duplicate items, sets are unordered, mutable, and do not allow duplicate items, and dictionaries store key-value pairs. The keys must be unique but the values can be duplicates. ",
            "mastery": 0
        },
        {
            "id": 2,
            "question": "What does it mean if an object is mutable vs immutable?",
            "answer": "A mutable object can be changed after it is created, while an immutable object cannot.",
            "mastery": 0
        },
        {
            "id": 3,
            "question": "What does it mean if something is ordered vs unordered in python?",
            "answer": "An ordered collection maintains the position of its elements, while an unordered collection does not.",
            "mastery": 0
        },
        {
            "id": 4,
            "question": "When would you want to use a list over a set or dictionary in Python?",
            "answer": "Lists are good when order matters and you want to add or remove items, such as in a to-do list, or storing sequences of data",
            "mastery": 0
        },
        {
            "id": 5,
            "question": "When would you want to use a tuple over a list or set in Python?",
            "answer": "Tuples are good when you want to ensure that the data does not change, such as coordinates, rgb values, or database records.",
            "mastery": 0
        },
        {
            "id": 6,
            "question": "When would you want to use a set over a list or dictionary in Python?",
            "answer": "Sets are good when you want to store unique items and perform set operations like union, intersection, and difference. For example, if you wanted to track visited items",
            "mastery": 0
        },
        {
            "id": 7,
            "question": "When would you want to use a dictionary over a list or set in Python?",
            "answer": "Dictionaries are good when you want to store key-value pairs and access values by their keys, such as in a phone book, user profile, or a configuration file.",
            "mastery": 0
        },
        {
            "id": 8,
            "question": "Is python a compiled language or interpreted language?",
            "answer": "Python is an interpreted language. It is first compiled into bytecode, which is then executed line by line at runtime by the python virtual machine.",
            "mastery": 0
        },
        {
            "id": 9,
            "question": "What type of compilation does python use?",
            "answer": "Python uses Just In Time compilation, which improves performance by compiling code into bytecode at runtime rather than before execution.",
            "mastery": 0
        },
        {  
            "id": 10,
            "question": "How can you concatenate two lists in Python?",
            "answer": "use the + operator or the extend() method. For example, list1 + list2 or list1.extend(list2).",
            "mastery": 0    
        },
        {  
            "id": 11,
            "question": "What is the difference between a for loop and a while loop in Python?",
            "answer": "A for loop is used when we know how many times we want to repeat something. A while loop is used when we want to do something until an end condition is met.",
            "mastery": 0    
        },
        {  
            "id": 12,
            "question": "How do you floor a number in python",
            "answer": "Use the math.floor() function from the math module",
            "mastery": 0    
        },
        {  
            "id": 13,
            "question": "What's the difference between / and // in python?",
            "answer": "/ performs regular division and returns a float, while // performs floor division and returns an integer.",
            "mastery": 0    
        },
        {  
            "id": 14,
            "question": "Can we pass a function as an argument to another function in Python? If so, why?",
            "answer": "Yes. Functions are considered objects in Python, which means they can be passed around like any other object",
            "mastery": 0    
        },
        {  
            "id": 15,
            "question": "When would we want to pass in a function as an argument to another function in Python?",
            "answer": "We would want to do this when we want to make our code more flexible and reusable, allowing the second function to use different behaviors based on the function passed in.",
            "mastery": 0    
        },
        {  
            "id": 16,
            "question": "What is a dynamically typed language?",
            "answer": "Data types of variables are determined at runtime, not compile time",
            "mastery": 0    
        },
        {  
            "id": 17,
            "question": "What's the difference between a list and a tuple?",
            "answer": "Lists are mutable (can be changed after creation) while tuples aren't. Tuples are hashable/faster and good for fixed data, while lists are more flexible and better for collections that may change.",
            "mastery": 0    
        },
        {  
            "id": 18,
            "question": "What's the difference between == and is in Python?",
            "answer": "== checks for equality of values, while is checks for identity (whether two variables refer to the same object in memory).",
            "mastery": 0    
        },
        {  
            "id": 19,
            "question": "What are dictionaries and sets used for?",
            "answer": "Dictionaries are used for storing key-value pairs and allow for fast lookups based on keys. Sets are used for storing unique items and performing set operations like union, intersection, and difference. Both offer O(1) lookups, and are faster than lists",
            "mastery": 0    
        },
        {  
            "id": 20,
            "question": "What is pass in python?",
            "answer": "The 'pass' statement is a null operation in Python. It does nothing when executed, but it's useful as a placeholder when a statement is required syntactically.",
            "mastery": 0    
        },
        {  
            "id": 21,
            "question": "How are arguments passed by value or reference in python?",
            "answer": "Immutable objects are passed by value. Mutable objects are passed by reference.",
            "mastery": 0    
        },
        {  
            "id": 22,
            "question": "What is a lambda function in Python?",
            "answer": "A type of anonymous function that can have multiple arguments but only one expression. It's often used for short, throwaway functions.",
            "mastery": 0    
        },
        {  
            "id": 23,
            "question": "What is an anonymous function in Python?",
            "answer": "An anonymous function is a function that is defined without a name. In Python, lambda functions are used to create anonymous functions.",
            "mastery": 0    
        },
        {  
            "id": 24,
            "question": "What is list comprehension in Python?",
            "answer": "A way to create new lists by applying an expression to each item in an existing iterable object (like another list or range)",
            "mastery": 0    
        },
        {  
            "id": 25,
            "question": "When would you want to use list comprehension in Python?",
            "answer": "List comprehension is useful when you want to create a new list by transforming or filtering elements from an existing list. It's more concise and often faster than using a traditional for loop.",
            "mastery": 0    
        },
        {  
            "id": 25,
            "question": "What are *args and **kwargs?",
            "answer": "*args is a tuple used to pass a variable number of non-keyword arguments to a function, while **kwargs is a dictionary used to pass a variable number of keyword arguments to a function.",
            "mastery": 0    
        },
        {  
            "id": 26,
            "question": "When would you use *args vs **kwargs in Python?",
            "answer": "Args might be used to collect multiple numbers, **kwargs might be used to pass settings",
            "mastery": 0    
        },
        {  
            "id": 27,
            "question": "What is break, continue, and pass in python?",
            "answer": "Perform no operation/exit the loop or function",
            "mastery": 0    
        },
        {  
            "id": 28,
            "question": "What is the difference between a set and dictionary in Python?",
            "answer": "A set is unordered, iterable, mutable, and has no duplicate elements. A dictionary stores key value pairs where each key is unique.",
            "mastery": 0    
        },
        {  
            "id": 29,
            "question": "What are built in data types in Python?",
            "answer": "There are 4 archetypes: numeric (covers ints, floats, booleans), sequence (covers lists, tuples, ranges), mapping (covers dictionaries), and set (covers sets)",
            "mastery": 0    
        },
        {  
            "id": 30,
            "question": "What is a variable scope in Python?",
            "answer": "Variable scope refers to the region of the code where a variable is accessible. Python has local, global, and built-in scopes.",
            "mastery": 0    
        },
        {  
            "id": 31,
            "question": "What is the difference between global and variable scope in Python?",
            "answer": "Global scope refers to variables defined at the top level of a script or module, making them accessible throughout the entire program. Variable scope refers to the region of the code where a variable is accessible.",
            "mastery": 0    
        },
        {  
            "id": 32,
            "question": "What is the difference between a dictionary and a list in Python?",
            "answer": "A dictionary is a collection of key-value pairs, where each key is unique and used to access its corresponding value. A list is an ordered collection of items that can be accessed by their index.",
            "mastery": 0    
        },
        {  
            "id": 33,
            "question": "What is a docstring?",
            "answer": "A docstring is a string literal that appears as the first statement in a module, function, class, or method definition. It is used to document the purpose and usage of the code element.",
            "mastery": 0    
        },
        {  
            "id": 34,
            "question": "How is exception handling done in Python?",
            "answer": "try, except, finally",
            "mastery": 0    
        },
        {  
            "id": 35,
            "question": "What is the difference between an array and a list? Why might you use an array?",
            "answer": "Lists can store different data types and can change in size, Arrays store elements of the same data type. Arrays use less memory and are faster for numerical operations",
            "mastery": 0    
        },
        {  
            "id": 36,
            "question": "What are modules and packages in Python?",
            "answer": "Modules contain code that can be resued in other programs. Packages are collections of related modules.",
            "mastery": 0    
        },
        {  
            "id": 34,
            "question": "What is dictionary comprehension in Python?",
            "answer": "Dictionary comprehension is a concise way to create dictionaries using a single line of code. It allows you to generate key-value pairs based on existing iterables. ",
            "mastery": 0    
        },
        {  
            "id": 35,
            "question": "True/False: Tuple Comprehension exists in Python.",
            "answer": "False. Tuple comprehension is not a thing in Python.",
            "mastery": 0    
        },
        {  
            "id": 36,
            "question": "What is the difference between a list and a tuple?",
            "answer": "Lists are mutable, but take more memory. Tuples are immutable, but take less memory and are faster on iterations",
            "mastery": 0    
        },
        {  
            "id": 37,
            "question": "Whats are 4 features of shallow copies?",
            "answer": "1. A shallow copy stores references to the original memory addresses.\n2. Changes to copied objects are reflected in the original.\n3. Shallow copies are faster to create than deep copies.\n4. Shallow copies store a copy of the original object and point references to it",
            "mastery": 0    
        },
        {  
            "id": 38,
            "question": "What are 4 features of deep copies?",
            "answer": "1. Deep copies store copies of an objects value\n2. Deep copies dont reflect changes made to the new copy in the original\n3. Deep copies are slower to create than shallow copies\n4. Deep copies recursively copy all objects in the original",
            "mastery": 0    
        },
        {  
            "id": 39,
            "question": "True/False: Deep copies are faster to create than shallow copies.",
            "answer": "False.",
            "mastery": 0    
        },
        {  
            "id": 40,
            "question": "What is the runtime of .sort() & .sorted() in Python?",
            "answer": "O(n log n)",
            "mastery": 0    
        },
        {  
            "id": 41,
            "question": "What are decorators in Python?",
            "answer": "Decorators allow us to modify or extend function and method behavior without changing their code.",
            "mastery": 0    
        },
        {  
            "id": 42,
            "question": "How do decorators work?",
            "answer": "They are a function that takes another function as an argument, and returns a new function with modified behavior.",
            "mastery": 0    
        },
        {  
            "id": 43,
            "question": "When would we use decorators in Python?",
            "answer": "logging, authentication, memorization",
            "mastery": 0    
        },
        {  
            "id": 44,
            "question": "What are iterators",
            "answer": "Objects used to traverse elements of a collection",
            "mastery": 0    
        },
        {  
            "id": 45,
            "question": "What are generators in Python?",
            "answer": "A type of function that returns an iterator object",
            "mastery": 0    
        },
        {  
            "id": 46,
            "question": "True/False: Generators are a type of iterator.",
            "answer": "True.",
            "mastery": 0    
        },
        {  
            "id": 47,
            "question": "True/False: Python supports multiple inheritance.",
            "answer": "True.",
            "mastery": 0    
        },
        {  
            "id": 48,
            "question": "What is multiple inheritance?",
            "answer": "A class inheriting from more than one parent class.",
            "mastery": 0    
        },
        {  
            "id": 49,
            "question": "What are the 4 pillars of OOP?",
            "answer": "Encapsulation, Abstraction, Inheritance, Polymorphism",
            "mastery": 0    
        },
        {  
            "id": 50,
            "question": "What is polymorphism in OOP?",
            "answer": "Polymorphism is using the same method and properties for subclasses of the same superclass. ",
            "mastery": 0    
        },
        {  
            "id": 51,
            "question": "Give an example of polymorphism in OOP",
            "answer": "We could have a superclass pet() and subclasses dog() and cat(). They can all use the same eat() and walk() function through polymorphism.",
            "mastery": 0    
        },
        {  
            "id": 52,
            "question": "What is Abstraction in OOP?",
            "answer": "Abstraction is a way of hiding information we dont need and only showing what we do. With abstractions we can define what something does but now how it does it",
            "mastery": 0    
        },
        {  
            "id": 53,
            "question": "Give an example of Abstraction in OOP",
            "answer": "We could have an abstract class car with a function drive, then class Tesla and class Toyota could extend car to implement their own logic in drive.",
            "mastery": 0    
        },
        {  
            "id": 54,
            "question": "What is inheritance in OOP?",
            "answer": "A child class can have all the properties and methods of a parent class, plus their own stuff. This lets us reuse code and make it easier to maintain.",
            "mastery": 0    
        },
        {  
            "id": 55,
            "question": "Give an example of inheritance in OOP",
            "answer": "A class animal can have an Eat method. A class dog can extend Animal and have class Eat plus its own class bark.",
            "mastery": 0    
        },
        {  
            "id": 56,
            "question": "What is encapsulation in OOP?",
            "answer": "Encapsulation is a way to keep data protected by bundling the data, and methods of a class together, and controlling how that data can be accessed.",
            "mastery": 0    
        },
        {  
            "id": 57,
            "question": "Give an example of encapsulation in OOP",
            "answer": "We could have a class BankAccount with a private balance attribute and public methods like deposit() and withdraw() to modify it.",
            "mastery": 0    
        },
        {  
            "id": 58,
            "question": "How is memory managed in python?",
            "answer": "All python objects are stored in a private heap managed by the interpreter",
            "mastery": 0    
        }
        // {  
        //     "id": 10,
        //     "question": "",
        //     "answer": "",
        //     "mastery": 0    
        // },
    
    ],

    dbt: [
        {  
            "id": 1,
            "question": "What does dbt stand for?",
            "answer": "Data Build Tool",
            "mastery": 0    
        },
        {  
            "id": 2,
            "question": "What is DBT?",
            "answer": "An open source tool you can use to manage a large collection of SQL queries in an organized way, and to help with testing and documentation.",
            "mastery": 0    
        },
        {  
            "id": 3,
            "question": "How do .sql files interact with DBT?",
            "answer": "The DBT figures out the right order to run the .sql files, creates the tables from those queries, runs checks, and tracks what changed",
            "mastery": 0    
        },
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
