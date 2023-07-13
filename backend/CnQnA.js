function CnQnA():
    //4 category
    //each category has 3 questions
    //each question has 4 answers
    // 12 questions
    // 48 answers
    const q = "";
    let category = ["dog", "cat", "rat", "squid"];
    let question = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let answer = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
                "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
                "41", "42", "43", "44", "45", "46", "47", "48"];
    let score = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
                "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
                "41", "42", "43", "44", "45", "46", "47", "48"];
    
    function Category{  
        q = "INSERT INTO SimpleCarbonTracker.Category (Category_Name) VALUES (?);"
        for(let i = 0; i < length(category); i++){
            db.query(q,category[i], (err, data)=>{
                return console.log("Entering Category:", i)
            })
        }
    }
    function Question{
        q = "INSERT INTO SimpleCarbonTracker.Category (Category_Name) VALUES (?);"
        for(let i = 0; i < length(question); i++){
            db.query(q,question[i], (err, data)=>{
                return console.log("Entering Question:", i)
            })
        }
    }
    function Answer{
        q = "INSERT INTO SimpleCarbonTracker.Answer (Answer_Text) VALUES (?);"
        for(let i = 0; i < length(answer); i++){
            db.query(q,answer[i], (err, data)=>{
                return console.log("Entering Answer:", i)
            })
        }
    }
    function categoryQuestion{
            for(let i = 0; i < length(category); i++){
                q = "SELECT idCategory FROM simplecarbontracker.Category WHERE Category_Name = (?)"
                db.query(q,category[i], (err, data)=>{
                    var c_id = data[0];
                })
                for(let j = 0; j < 3; j++){
                    q = "SELECT idQuestion FROM simplecarbontracker.Question WHERE Question_Text = (?)"
                    db.query(q,question[i*j], (err, data)=>{
                        var q_id = data[0];
                    })
                    q = "INSERT INTO SimpleCarbonTracker.Person (idQuestion, idCategory) VALUES (?);"
                    db.query(q,[qid,cid], (err, data)=>{
                        console.log("qid:",question[i*j], "cid:",category[i])
                    })
                }
            }
    }
    function questionAnswer{
            for(let i = 0; i < length(category); i++){
                for(let j = 0; j < 3; j++){
                    q = "SELECT idQuestion FROM simplecarbontracker.Question WHERE Question_Text = (?)"
                    db.query(q,question[i*j], (err, data)=>{
                        var q_id = data[0];
                    })
                    for(let k = 0; k < 4; k++){
                        q = "SELECT idAnswer FROM simplecarbontracker.Answer WHERE Answer_Text = (?)"
                        db.query(q,answer[i*j*k], (err, data)=>{
                            var a_id = data[0];
                        })
                        q = "INSERT INTO SimpleCarbonTracker.Person (idQuestion, idAnswer, Score) VALUES (?);"
                        db.query(q,[qid,aid,score[i*j*k]], (err, data)=>{
                            console.log("qid:",question[i*j], "aid:",answer[i*j*k], "score:", score[i*j*k])
                        })
                    }
                }
            }
    }
export default CnQnA;