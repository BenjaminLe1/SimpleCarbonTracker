import axios from "axios";

function Signout(){
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:4000/signout")
    window.location.replace("http://localhost:3000")
}
export default Signout