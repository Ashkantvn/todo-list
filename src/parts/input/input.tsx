import "./style/input.css";
import { useState, useContext, ChangeEvent, MouseEventHandler } from "react";
import { context } from "../../context/context";

const Input = () => {
  const [notesInput, setNotesInput] = useState<string>("");
  const getContext = useContext(context);

  ////function of onchange to add value of textarea to notesOfinput
  const textareaHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void = (
    e
  ) => {
    setNotesInput((notesInput) => (notesInput = e.target.value));
  };

  /////function of submit button  for pushing notesOfInput to notes of context and validation
  const submitHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    if (notesInput) {
      getContext?.setContextValue((valueOfcontext) => ({
        notes: [...valueOfcontext.notes, notesInput],
      }));
      setNotesInput((notesInput) => (notesInput = ""));
    } else {
      alert("fill empty parts");
    }
  };
  //////function of reset button
  const resetHandler: MouseEventHandler = () => {
    setNotesInput((notesInput) => (notesInput = ""));
  };
  return (
    <>
      <form>
        <h1>ToDo-list</h1>
        <label htmlFor="textarea">Enter note :</label>
        <textarea
          onChange={textareaHandler}
          data-testid="textarea-of-input"
          id="textarea"
          cols={30}
          rows={5}
          value={notesInput}
        ></textarea>
        <button onClick={submitHandler} type="submit">
          Submit
        </button>
        <button onClick={resetHandler} type="reset">Reset</button>
      </form>
    </>
  );
};

export default Input;
