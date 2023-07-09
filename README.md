**Reference**
//https://codewithmarish.com/post/full-stack-crud-app
https://www.wwf.org.uk/
https://www.seanhalpin.xyz/


--
**Helpful links for backend to frontend connection:**
1. https://fearby.com/article/how-to-setup-pooled-mysql-connections-in-node-js-that-dont-disconnect/#google_vignette
2. https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/
3. https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
4. https://stackoverflow.com/questions/39153545/how-to-do-post-in-form-submit-using-reactjs-and-pass-the-object-value-into-rest
5. https://stackoverflow.com/questions/5710358/how-to-access-post-form-fields-in-express


--
**Requirement**
    0) Creating question bank
    1) capturing answers for questions
    2) Person is responding  - Account
    3) Caluclating the footprint
    4) Reporting the result
    5) Storing result to the Person


--
**Plan**
Days     Task
2        Connecting everything
1        API setup
3        Make tables on SQL / Test data
2        API connection with new tables (test frontend connection)        
4        Algorithms
3        Testing algorithms, API, SQL
6        Frontend function
2        Frontend styling and actual content


--
**Entities**
    Question 
        Category
        Answer to questions
        Question to the Category
    Answer
        Question, Answer by person
    Person
        Acoount
    Result
        Result to person


    Front End-> React
    Back-end -> Node -> API/service 
             -> DB

    DB -> Tables -> DAO -> Service -> API -> Front-end 


Create Question -> DAO -> create.Table - Data Access Object
                    Service ->
                        Transaction
                        Business Rule

                    API -> exposes API endpoint to the fron-end and call the service
                        Can this call valid, this person calling can create - Autherization
                        Validate the required data is passed - Validation


--
**DB - Tables**

**THIS IS THE PATH TO GET THE PERSON'S SCORE FROM PersonScore TO THE CATEGORY: THIS ALLOWS US TO HAVE THE SCORE BY CATEGORY TO DISPLAY AFTER

Question
    -> Question id 
    -> Question Text
    
Category
    -> Caretory id
    -> Category Name
    //-> Sequence

CategoryQuestion
    Category id
    Question id
    //Sequence

Answer
    AnswerId                        Yes, No, 10, 
    AnswerText


QuestionAnswer
    question_answer_id
    QuestionID                SPorts, clothing
    AnswerID
    Score

                            **ONE QUESTION -> ALL THE ANSWERS FOR THAT QUESTION -> SCORE FOR EACH QUESTION-ANSWER PAIR**
                            **BEFORE WE DO FRONTEND FOR EACH QUESTION-ANSWER PAIR WE ASSIGN A SCORE**
                            
                            Q1. How much food you waste
                            *user picks*     score
                                Q1-barely      0
                                Q1-somewhat    1 
                                Q1-a lot       2
                                
                            Do You Like Tennis
                            Yes    No        May Be
                            5        10        2
                            Can you stich

Person
    Perosn id   
    Name
    username
    password - Encrypted
    email

PersonScore                  ---> join with QuestionAnswer to get each persons answers to certain questions --> join with category to assign question scores to category               
    question_answer_id
    Person id


--
**API** 
    GET - /Categories -> 
    POST /
    PUT
    PATCH

    GET  /Questions/catoryId/1

    GET /Answers/QuestionId/1


--------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

SELECT CategoryName, SUM(Score) FROM simplecarbontracker.PersonScore, simplecarbontracker.QuestionAnswer, simplecarbontracker.QuestionCategory, simplecarbontracker.Category
WHERE PersonScore.Question_Answer_ID = QuestionAnswer.Question_Answer_ID AND QuestionAnswer.QuestionID = QuestionCategory.QuestionID AND QuestionCategory.CategoryID = Category.CategoryID 
AND PersonScore.PersonID = ?
GROUP BY CategoryName
