
//4 category
//each category has 3 questions
//each question has 4 answers
// 12 questions
// 48 answers
var q = "";
var AperQ = 4 
var QperC = 3
function get_CQAS(){
    const category = ["dog", "cat", "rat", "squid"];
    const question = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const answer = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
            "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
            "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
            "41", "42", "43", "44", "45", "46", "47", "48"];
    const score = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
            "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
            "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
            "41", "42", "43", "44", "45", "46", "47", "48"];
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
    q = "INSERT INTO SimpleCarbonTracker.Question (Question_Text) VALUES (?);"
    for(let i = 0; i < question.length; i++){
        db.query(q,question[i], (err, data)=>{
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
                console.log(j*AperQ+k)
                q = "INSERT INTO SimpleCarbonTracker.QuestionAnswer (idQuestion, idAnswer, Score) VALUES ((SELECT idQuestion FROM simplecarbontracker.Question WHERE Question_Text = (?)),(SELECT idAnswer FROM simplecarbontracker.Answer WHERE Answer_Text = (?)),(?));"
                db.query(q,[question[j], answer[j*AperQ+k], score[j*AperQ+k]], (err, data)=>{
                    console.log("Question:",question[j], "Answer:",answer[j*AperQ+k], "Score:", score[j*AperQ+k])
                })
            }
        }    
}
export default get_CQAS;
export {Category, Question, Answer, categoryQuestion, questionAnswer};