import React from "react";

const paraStyle = {
    display: "block",
    textAlign: "center"
}

const listStyle= {
    textAlign: "center"
}

const answerStyle1 ={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "42%",
    backgroundColor: "#C1E1C1",
    width: "200px",
    height: "100px",
    marginTop: "20px"
}

const answerStyle2 ={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "42%",
    backgroundColor: "#FFC300",
    width: "200px",
    height: "100px",
    marginTop: "20px"
}

const answerStyle3 ={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "42%",
    backgroundColor: "navy",
    width: "200px",
    height: "100px",
    marginTop: "20px"
}

const answerStyle4 ={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "42%",
    backgroundColor: "brown",
    width: "200px",
    height: "100px",
    marginTop: "20px"
}

//Onclick: store score to persons account -> load next question
function Question(props){
    return(
        <div>
            <p style={paraStyle}> {props.question_text} </p>
            <ol style={listStyle}>
                <div style={answerStyle1}>
                    <button>{props.ans1}</button>
                </div>
                <div style={answerStyle2}>
                    <button>{props.ans2}</button>
                </div>
                <div style={answerStyle3}>
                    <button>{props.ans3}</button>
                </div>
                <div style={answerStyle4}>
                    <button>{props.ans4}</button>
                </div>
            </ol>
        </div>
    );
}

export default Question;