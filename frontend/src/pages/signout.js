import axios from "axios";

function Signout(){
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:4000/signout")
    window.location.replace("https://main.d38ai00lc1thuw.amplifyapp.com")
}
export default Signout