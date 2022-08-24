import { FC } from "react";
import "./style/item.css"
import { propsOfItem } from "../../context/interface";


const Item :FC<propsOfItem>= ({note}) => {
  return (
    <>
      <div className="item">
        <p data-testid="note-of-props">{note}</p>
        <button className="success-button">.</button>
        <button className="del-button" >.</button>
        <button className="danger-button">.</button>
      </div>
    </>
  );
};

export default Item;
