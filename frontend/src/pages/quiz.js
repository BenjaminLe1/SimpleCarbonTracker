import React from "react";
import axios from "axios"
export default class Quiz extends React.Component {

  constructor() {
    super();
    this.state = {
      currq: 1,
      question: "Blank",
      ans1: "Blank",
      ans2: "Blank",
      ans3: "Blank",
      ans4: "Blank"
    }
  }
  //const [currqState, setCurrqState] = useState(1)

    /* useEffect = () => {
      fetch('http://localhost:4000/Quiz')
          .then((response) => response.json())
          .then((data) => {
            this.setState({...this.state, question: data[0].Question_Text})
            this.setState({...this.state, ans1: data[0].Answer_Text})
            this.setState({...this.state, ans2: data[0].Answer_Text})
            this.setState({...this.state, ans3: data[0].Answer_Text})
            this.setState({...this.state, ans4: data[0].Answer_Text})
            console.log(data)
            
          })
          .catch((err) => {
            console.log(err.message);
          });
  }; */
  testGet() {
    console.log("IN testGet")
    axios
      .get("http://localhost:4000/Quiz", {
        currq: this.state.currq
      })
      .then(data => {
        console.log(data)
        this.setState({question: data[0].Question_Text})        
      })
  }
  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/get_currq", {
        currq: this.state.currq
      })
      .then(res => {
        console.log(res)
      })
      this.increaseCount()
      this.testGet()
  }
  
  increaseCount = () => {
    return this.setState({...this.state, currq: this.state.currq + 1});
  }
  render() {
  return (
      <div className="Quiz">
        <form onSubmit={this.handleSubmit}>
            <p> currq: {this.state.currq} question: {this.state.question} </p>
                  <div>
                      <button type="submit">{this.state.ans1}</button>
                  </div>
                  <div>
                      <button type="submit">{this.state.ans2}</button>
                  </div>
                  <div>
                      <button type="submit">{this.state.ans3}</button>
                  </div>
                  <div>
                      <button type="submit">{this.state.ans4}</button>
                  </div>
          </form>
      </div>
    );
  }
}