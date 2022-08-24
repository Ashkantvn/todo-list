import { render } from "@testing-library/react";
import Item from "./item";


describe(Item,()=>{
    it("Should render the note from props",()=>{
        const {getByTestId}=render(<Item note="note"/>);
        const pElement = getByTestId("note-of-props");
        expect(pElement.innerHTML).toBe("note");
    })
})