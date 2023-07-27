
//4 category
//each category has 3 questions
//each question has 4 answers
// 12 questions
// 48 answers
var q = "";
var AperQ = 4 
var QperC = 3
function get_CQAS(){
    const category = ["Transportation", "Home", "Food", "Spending"];
    const question = [
        "What is your primary method of transportation?", "What fuel does your car use?", "How many miles do you fly a year?",
        "What type of power does your home primarily use? ", "How much of your home's electricity comes from renewable sources?", "How large is your residence in square feet?",
        "What is your diet?", "What percent of your diet is self-grown or bought locally?", "What percent of food do you waste?",
        "How much do you spend on appliances each month?", "What type of clothing do you generally purchase?", "How much do you spend on luxuries per month?"
    ];
    const answer = [
        "Car", "Walk/Bike", "Public Transport", "None of the above",
        "Diesel", "Gas", "Electric/Hybrid", "I do not drive a car",
        "10000+", "10000-1000", "1000-500", "less than 500",
        "Electricity", "Renewable Energy", "Natural Gas", "I don't know",
        "Most", "Some", "None", "Not sure",
        "4000+", "2500-4000", "900-2500", "less than 900",
        "Carnivore", "Mixed Diet", "Vegetarian", "Vegan",
        "75-100%", "50-75%", "25-50%", "0-25%",
        "50%+", "30-50%", "5-30%", "less than 5%",
        "$150+", "$100-150", "$50-100", "less than $50",
        "Second-hand", "Organic Fabric", "Synthetic material", "I'm not sure",
        "$300+", "$200-300", "$100-200", "less than $100"
    ];
    const score = [
        "0", "10", "7", "4",
        "0", "4", "7", "10",
        "0", "3", "6", "10",
        "6", "10", "0", "4",
        "10", "6", "0", "4",
        "0", "3", "7", "10",
        "0", "4", "8", "10",
        "10", "8", "6", "0",
        "0", "1", "4", "10",
        "0", "4", "7", "10",
        "10", "9", "0", "4",
        "0", "3", "7", "10"
    ];
    return ([category,question,answer,score])
}
function Category(db, category){
    q = "INSERT INTO SimpleCarbonTracker.Category (Category_Name) VALUES (?);"
    for(let i = 0; i < category.length; i++){
        db.query(q,category[i], (err, data)=>{
            return console.log("Entering Category:", i)
        })
    }
}
function Question(db, question){
    q = "INSERT INTO SimpleCarbonTracker.Question (Question_Text, Question_Num) VALUES (?);"
    for(let i = 0; i < question.length; i++){
        db.query(q,[[question[i], i+1]], (err, data)=>{
            if (err) return console.log(err)
            return console.log("Entering Question:", i)
        })
    }
}
function Answer(db, answer){
    q = "INSERT INTO SimpleCarbonTracker.Answer (Answer_Text) VALUES (?);"
    for(let i = 0; i < answer.length; i++){
        db.query(q,answer[i], (err, data)=>{
            return console.log("Entering Answer:", i)
        })
    }
}
function categoryQuestion(db, category, question, answer){
    for(let i = 0; i < category.length; i++){
        for(let j = 0; j < QperC; j++){
            q = "INSERT INTO SimpleCarbonTracker.CategoryQuestion (idQuestion, idCategory) VALUES ((SELECT idQuestion FROM simplecarbontracker.Question WHERE Question_Text = (?)),(SELECT idCategory FROM simplecarbontracker.Category WHERE Category_Name = (?)));"
            db.query(q,[question[i*QperC+j], category[i]], (err, data)=>{
                console.log("Question:",question[i*QperC+j], "Category:",category[i])
            })
        }    
    }
}
function questionAnswer(db, category, question, answer, score){
        for(let j = 0; j < question.length; j++){
            for(let k = 0; k < AperQ; k++){
                //console.log(j*AperQ+k)
                //console.log("Question:",question[j], "Answer:",answer[j*AperQ+k], "Score:", score[j*AperQ+k])
                q = "INSERT INTO SimpleCarbonTracker.QuestionAnswer (idQuestion, idAnswer, Score) VALUES ((SELECT idQuestion FROM simplecarbontracker.Question WHERE Question_Text = (?)),(SELECT idAnswer FROM simplecarbontracker.Answer WHERE Answer_Text = (?)),(?));"
                db.query(q,[question[j], answer[j*AperQ+k], score[j*AperQ+k]], (err, data)=>{
                    //if (err) return console.log(err)
                    return console.log("Question:",question[j], "Answer:",answer[j*AperQ+k], "Score:", score[j*AperQ+k])
                })
            }
        }    
}
export default get_CQAS;
export {Category, Question, Answer, categoryQuestion, questionAnswer};