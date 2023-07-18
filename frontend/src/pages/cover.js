import React from 'react';


const Cover = (props) => {




    return (
        <div>
            <p>Please Create an Account</p>
            <button>Create Account</button>
            <p>or Sign in here</p>
            <button onClick={(e)=>{
                props.handleClick(e)
            }}>Sign in</button>
        </div>
    );
}
export default Cover;