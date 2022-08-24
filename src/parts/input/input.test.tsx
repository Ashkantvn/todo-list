import { render, fireEvent } from "@testing-library/react";
import Input from "./input";

describe(Input, () => {
  it("Should change notesInput after textarea changed", () => {
    const { getByTestId } = render(<Input />);
    const textareaOfInput = getByTestId("textarea-of-input");

    fireEvent.change(textareaOfInput, { target: { value: "something" } });
    expect(textareaOfInput.innerHTML).toContain("something");
  });

  it("Submit validation", () => {
    const { getByRole, getByTestId } = render(<Input />);
    const textareaOfInput = getByTestId("textarea-of-input");
    const submitButton = getByRole("button", { name: "Submit" });
    global.alert = jest.fn();

    fireEvent.click(submitButton);
    expect(global.alert).toHaveBeenCalledTimes(1);

    fireEvent.change(textareaOfInput, { target: { value: "something" } });
    fireEvent.click(submitButton);
    expect(textareaOfInput.innerHTML).toHaveLength(0);
  });
  it("Reset button",()=>{
    const {getByRole,getByTestId}=render(<Input/>);
    const resetButton = getByRole("button",{name:"Reset"});
    const textareaOfInput = getByTestId("textarea-of-input");

    
    fireEvent.change(textareaOfInput, { target: { value: "something" } });
    fireEvent.click(resetButton);
    expect(textareaOfInput.innerHTML).toHaveLength(0);
  })
});
