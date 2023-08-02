import React from "react";
 
const Popupreg = props => {
  return (
    <div className="popup-box-reg">
      <div className="box-reg">
        <span className="close-icon-reg" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popupreg;