import { FC, useState } from "react";
import "./style/item.css"
import { propsOfItem } from "../../context/interface";


const Item :FC<propsOfItem>= ({note}) => {
  const [success , setSuccess] = useState<boolean>(false);
  const [forget , setforget] = useState<boolean>(false);
  const [del , setDel] = useState<boolean>(false);
  
  const styleOfMainDiv:()=>string = ()=>{
    if(success){
      return "item success";
    }if(forget){
      return "item danger";
    }if(del){
      return "del-item";
    }else{
      return "item";
    }
  }

  return (
    <>
      <div className={styleOfMainDiv()}>
        <p data-testid="note-of-props">{note}</p>
        <button onClick={()=>{setSuccess(success=>!success)}} className="success">Success</button>
        <button onClick={()=>{setDel(success=>!success)}} className="del" >Delete</button>
        <button onClick={()=>{setforget(forget=>!forget)}}className="danger">Forget</button>
      </div>
    </>
  );
};

export default Item;
