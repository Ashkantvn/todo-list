import { useContext } from "react";
import { context } from "../../context/context";
import Input from "../../parts/input/input";
import Item from "../../parts/item/item";
import "./style/Home.css";

const Home = () => {
  const getnotes = useContext(context);

  const mappedData = getnotes?.contextValue.notes.map((item) => {
    return (
      <>
        <Item note={item} />
      </>
    );
  });

  return (
    <>
      <header>
        <Input />
      </header>
      <div className="list">{mappedData}</div>
    </>
  );
};

export default Home;
