import axios from "axios";

function Signout(){
    //DELETE COOKIE AFTER SIGNOUT (REMOVE SESSION)
    axios.post("http://localhost:4000/signout")
    window.location.replace("http://localhost:3000/login")
}
export default Signout