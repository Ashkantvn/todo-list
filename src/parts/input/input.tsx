import "./style/input.css";
const Input = () => {
  return (
    <>
      <form>
        <h1>ToDo-list</h1>
        <label htmlFor="textarea">Enter note :</label>
        <textarea name="" id="textarea" cols={30} rows={5} />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default Input;
