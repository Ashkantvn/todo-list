const Input = () => {
  return (
    <>
      <form>
        <h1>ToDo-list</h1>
        <label>
          Enter note : <textarea name="" id="" cols={30} rows={5}></textarea>
        </label>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default Input;
