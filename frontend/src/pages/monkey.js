const Monkey = () => {
    return (
        <div>
            <div>
                <h1>
                    YOU ARE A
                </h1>
            </div>
            <div>
                <h1>
                    <img src={require("./images/VJ.png")}alt="VJ"></img>
                    <img src={require("./images/Pravin.png")} alt="Pravin" style={{width: '400px',height: '400px'}}></img>
                    <img src={require("./images/Ben.png")} alt="Ben" style={{width: '400px',height: '300px'}}></img>
                </h1>
            </div>
        </div>
    );
}
export default Monkey;