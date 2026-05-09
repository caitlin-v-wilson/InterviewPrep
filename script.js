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
        {  
            "id": 4,
            "question": "What is a benefit of dbt?",
            "answer": "dbt allows you to set up better process out of the box for data",
            "mastery": 0    
        },
        {  
            "id": 5,
            "question": "Give an example of a project in which dbt could be useful",
            "answer": "An online retailer could sell through multiple storefronts (such as Amazon, its own website, and a mobile app). Every source formats data differently. dbt can manage transformation by cleaning up incoming tables, creating reusable business definitions, testing assumptions (such as uniqueness or non-nullability), and generating documentation such as a dependency graph.",
            "mastery": 0    
        },
        {  
            "id": 6,
            "question": "How does dbt simplify the process of transforming data?",
            "answer": "It turns having random sql scripts everywhere into its own maintainable layer, like any other application codebase",
            "mastery": 0    
        },
        {  
            "id": 7,
            "question": "How does dbt work out of the box?",
            "answer": "It can quickly initialize a framework. Uing things like the models folder, sql models can be developed to represent tables in the target database. It compiles the sql that could have jinja in it into an actual sql statement that it will hold in the targets folder. The targets folder takes that sql, runs it against your database and creates tables, run tests, and generates documentation.",
            "mastery": 0    
        },
        {  
            "id": 8,
            "question": "What are some best practices for using dbt?",
            "answer": "Some best practices include organizing models logically, using variables and macros for reusability, writing comprehensive tests, and maintaining up-to-date documentation.",
            "mastery": 0    
        },
        {  
            "id": 9,
            "question": "How can you test your dbt models?",
            "answer": "You can write tests in dbt to validate your data transformations. These tests can check for uniqueness, non-nullability, and other business rules.",
            "mastery": 0    
        },
        {  
            "id": 10,
            "question": "What is the purpose of the targets folder in dbt?",
            "answer": "The targets folder holds the compiled SQL statements that dbt generates from your models. When you run dbt, it takes these compiled SQL files and executes them against your database to create tables, run tests, and generate documentation.",
            "mastery": 0    
        },
        {  
            "id": 11,
            "question": "What is jinja and how is it used in dbt?",
            "answer": "Jinja is a templating language that allows you to write dynamic SQL code in dbt. It enables you to create reusable and maintainable SQL models by incorporating variables, conditionals, and loops.",
            "mastery": 0    
        },
        {  
            "id": 12,
            "question": "What does it mean that jinja is a templating language?",
            "answer": "It allows you to write a document with placeholders and logic that get turned into final text later.",
            "mastery": 0    
        },
        {
            "id": 13,
            "question": "What is the ref() function in dbt?",
            "answer": "ref() is how you reference another model inside a dbt project. For example, SELECT * FROM {{ ref('my_model') }}. Using ref() instead of hardcoding a table name lets dbt automatically build the dependency graph and run models in the correct order.",
            "mastery": 0
        },
        {
            "id": 14,
            "question": "What is the source() function in dbt?",
            "answer": "source() is how you reference raw source tables that exist in your database but were not created by dbt (e.g., tables loaded by an ingestion tool). For example, {{ source('stripe', 'payments') }}. Declaring sources in schema.yml lets dbt track freshness and document where raw data comes from.",
            "mastery": 0
        },
        {
            "id": 15,
            "question": "What is the key difference between ref() and source()?",
            "answer": "ref() points to a model that dbt itself built. source() points to a raw table that exists in the database outside of dbt, such as data loaded by an ingestion pipeline. ref() is for internal dependencies; source() is for the starting point of your data.",
            "mastery": 0
        },
        {
            "id": 16,
            "question": "What is a model materialization in dbt?",
            "answer": "Materialization controls how dbt physically creates a model in the database. The four built-in options are: view (a virtual query, no data stored), table (a full physical table rebuilt every run), incremental (only new or changed rows are added to an existing table), and ephemeral (no object is created in the database; the model is injected as a CTE into models that reference it).",
            "mastery": 0
        },
        {
            "id": 17,
            "question": "When would you use an incremental materialization?",
            "answer": "When a table is large and rebuilding it fully every run would be too slow or expensive. Incremental models only process new or updated rows since the last run, making them much more efficient for large datasets like event logs or transaction histories.",
            "mastery": 0
        },
        {
            "id": 18,
            "question": "When would you use an ephemeral materialization?",
            "answer": "When you want to break a complex transformation into smaller logical steps without creating unnecessary objects in the database. Ephemeral models act as reusable CTEs injected directly into the SQL of any model that references them via ref().",
            "mastery": 0
        },
        {
            "id": 19,
            "question": "What is the DAG in dbt?",
            "answer": "DAG stands for Directed Acyclic Graph. dbt automatically builds a DAG by analyzing all the ref() and source() calls across your models. This graph determines the correct execution order — a model will not run until all the models it depends on have finished. It also prevents circular dependencies.",
            "mastery": 0
        },
        {
            "id": 20,
            "question": "How does dbt use the DAG in practice?",
            "answer": "When you run dbt, it reads all your models, traces their ref() dependencies, and builds the DAG. It then executes models in topological order — upstream models first, downstream models after. dbt can also run independent branches of the DAG in parallel to save time.",
            "mastery": 0
        },
        {
            "id": 21,
            "question": "What is schema.yml in dbt?",
            "answer": "schema.yml is a YAML configuration file where you define metadata for your models, sources, and columns. This includes descriptions for documentation, and test definitions such as uniqueness or non-null constraints. It is the central place where dbt tests and docs are declared.",
            "mastery": 0
        },
        {
            "id": 22,
            "question": "Give an example of what a model entry in schema.yml looks like",
            "answer": "A model entry names the model, gives it a description, then lists columns with their own descriptions and tests. For example, a column named order_id might be described as 'the primary key' and have the tests unique and not_null applied to it. dbt reads this file and generates both documentation and test queries from it.",
            "mastery": 0
        },
        {
            "id": 23,
            "question": "What are the four built-in generic tests in dbt?",
            "answer": "1. unique — asserts every value in a column is distinct. 2. not_null — asserts no value in a column is null. 3. accepted_values — asserts every value in a column belongs to a defined list. 4. relationships — asserts every value in a column exists as a key in another model or table, enforcing referential integrity.",
            "mastery": 0
        },
        {
            "id": 24,
            "question": "What is the difference between dbt run, dbt test, and dbt build?",
            "answer": "dbt run executes your models and creates or updates the tables and views in your database. dbt test runs the tests defined in schema.yml to validate data quality, but does not build any models. dbt build does both in the correct DAG order — for each node it runs the model first, then immediately tests it before moving downstream.",
            "mastery": 0
        },
        {
            "id": 25,
            "question": "Why would you prefer dbt build over running dbt run and dbt test separately?",
            "answer": "dbt build respects the DAG at the node level, meaning it tests each model before passing its output to downstream models. If a test fails, dbt can stop before bad data propagates further down the pipeline. Running dbt run followed by dbt test separately would build the entire graph first, potentially letting bad data flow through before any tests catch it.",
            "mastery": 0
        }
    ],
    etl: [
        {  
            "id": 1,
            "question": "What does ETL stand for?",
            "answer": "Extract, Transform, Load",
            "mastery": 0    
        },
        {  
            "id": 2,
            "question": "What does ELT stand for?",
            "answer": "Extract, Load, Transform",
            "mastery": 0    
        },
        {  
            "id": 3,
            "question": "What is ETL?",
            "answer": "A way to pull data from one source to another, while cleaning/transforming it along the way.",
            "mastery": 0    
        },
        {  
            "id": 4,
            "question": "What is ELT",
            "answer": "A way to pull data from one source to another, loading it into the target system before transforming/cleaning it",
            "mastery": 0    
        },
        {  
            "id": 5,
            "question": "What is the difference between ETL and ELT?",
            "answer": "ETL transforms data before loading it, while ELT loads raw data into the target system then transforms it",
            "mastery": 0    
        },
        {  
            "id": 6,
            "question": "What are the advantages of ETL?",
            "answer": "Data is clean before it arrives, so it can be used immediately. It is better for sensitive data because it can be masked/filtered before it lands",
            "mastery": 0    
        },
        {  
            "id": 7,
            "question": "What are the disadvantages of ETL?",
            "answer": "It is slower, since data must be cleaned before being loaded. It is more complex, because data is cleaned on a separate system.",
            "mastery": 0    
        },
        {  
            "id": 8,
            "question": "What are the advantages of ELT?",
            "answer": "Data is loaded faster. Modern warehouses like snowflake and BigQuery are powerful enough to clean data cheap and quick inside themselves",
            "mastery": 0    
        },
        {  
            "id": 9,
            "question": "What are the disadvantages of ELT?",
            "answer": "Raw and messy data is in the warehouse. A powerful destination system is needed to handle transformations.",
            "mastery": 0    
        },
        {  
            "id": 10,
            "question": "When would you choose ETL over ELT?",
            "answer": "ETL is good for security or strict data compliance. If data need to be modified or if storage costs need to be kept low",
            "mastery": 0    
        },
        {  
            "id": 11,
            "question": "When would you choose ELT over ETL?",
            "answer": "ELT is good when there is a high volume of data, speed is necessary, and the original raw data may be needed",
            "mastery": 0    
        },
        {  
            "id": 12,
            "question": "What is data lineage?",
            "answer": "Data lineage is the process of tracking the lifecycle of data from its origins through transformations to its destination",
            "mastery": 0    
        },
        {  
            "id": 13,
            "question": "Why is data lineage important?",
            "answer": "Helps trace back errors, helps understand what systems will break if a source changes, helps with compliance",
            "mastery": 0    
        },
    ],
    practical: [
        {  
            "id": 1,
            "question": "Given a CSV of sensor readings, how would you define duplicate records?",
            "answer": "Define criteria for duplicates, such as identical timestamp and sensor ID, or identical values across all columns. df.drop_duplicates() can be used to remove duplicates based on these criteria.",
            "mastery": 0    
        },
        {  
            "id": 2,
            "question": "Whats the first thing you do when working with a new dataset?",
            "answer": "Understand the data model and buisness context. Review the schema, identiy key tables, relationships, and how data flows. Inspect sample data checking for nulls, duplicates, or inconsistent format",
            "mastery": 0    
        },
        {  
            "id": 3,
            "question": "How would you handle missing values in a dataset?",
            "answer": "Identify the pattern of missing values, then decide on an appropriate strategy such as removing rows with missing values or inputing with mean/median/mode.",
            "mastery": 0    
        },
        {  
            "id": 4,
            "question": "How would you troubleshoot a slow SQL query?",
            "answer": "Identify where the slowdown is happening using timing information. Look for missing indexes, unecessary joins, selecting too many columns, or where filtering is occuring. I can also check if the query is scanning entire tables when it could be using indexes to be efficient",
            "mastery": 0    
        },
        {  
            "id": 5,
            "question": "What's the difference between a primary and foreign key?",
            "answer": "A primary key identifies each record in a table. A foreign key creates relationships by referencing primary keys in other tables",
            "mastery": 0    
        },
        {  
            "id": 6,
            "question": "How would you design a table for storing customer orders?",
            "answer": "Normalize the table into customers, orders, and order_items. Customers stores customer information, orders stores order level data like timestamps, and orderItems stores the individual products in each order.",
            "mastery": 0    
        },
        {  
            "id": 7,
            "question": "Whats an index?",
            "answer": "An index allows a database to find rows more efficiently without scanning the entire table.",
            "mastery": 0    
        },
        {  
            "id": 8,
            "question": "When would you use an index?",
            "answer": "Use indexes for columns frequently used in WHERE clauses, JOIN, or ORDER BY",
            "mastery": 0    
        },
        {  
            "id": 9,
            "question": "How would you handle bad or missing data in a pipeline?",
            "answer": "Identify if the missing data is expected or a system issue. I could filter invalid rows, add validation checks, or fill missing values with defaults.",
            "mastery": 0    
        },
    ],
    data_lakes: [
        {  
            "id": 1,
            "question": "What is a data warehouse?",
            "answer": "Stores data from many system for business intelligence and analytics",
            "mastery": 0    
        },
        {  
            "id": 2,
            "question": "What is a database?",
            "answer": "Stores current organized data for user use",
            "mastery": 0    
        },
        {  
            "id": 3,
            "question": "What is a data lake?",
            "answer": "A place to store all raw data",
            "mastery": 0    
        },
        {  
            "id": 4,
            "question": "What is the difference between a data lake and a data warehouse?",
            "answer": "A data warehouse stored clean data for analytics, a data lake stores all raw data for any future use",
            "mastery": 0    
        },
        {  
            "id": 5,
            "question": "Why do companies use data warehouses?",
            "answer": "They are useful for centralized analysis, combining multiple systems, and improving query performance for analytics",
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
