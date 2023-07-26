import axios from "axios";

function Signout(){
    //DELETE COOKIE AFTER SIGNOUT (REMOVE SESSION)
    axios.post("http://localhost:4000/signout")
    return(
        <div>
            <p>Signing out now...</p>
            <a href="/">click here to return home</a>
        </div>
    )
}
export default Signout