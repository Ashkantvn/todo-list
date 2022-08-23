import Input from "../../parts/input/input";
import Item from "../../parts/item/item";

const Home = () => {
  return (
    <>
      <header>
        <Input/>
      </header>
      <div className="list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
};

export default Home;
