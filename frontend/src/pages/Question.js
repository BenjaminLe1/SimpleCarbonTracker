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
    backgroundColor: "#C70039",
    width: "200px",
    height: "100px",
    marginTop: "20px"
}

function Question(){
    return(
        <div>
            <p style={paraStyle}>How many times a week do you drive to work?</p>
            <ol style={listStyle}>
                <div style={answerStyle1}>
                    <p>1-3 times a weeks</p>
                </div>
                <div style={answerStyle2}>
                    <p>3-5 times a week</p>
                </div>
                <div style={answerStyle3}>
                    <p>Everyday</p>
                </div>
            </ol>
        </div>
    );
}

export default Question;