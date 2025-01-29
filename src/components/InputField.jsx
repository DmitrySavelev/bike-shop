import { addTodo } from "@/store/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StyledTextArea = styled.input`
  height: 30px;
  color: #744ce7;
`;
const StyledButton = styled.button`
  height: 30px;
  background-color: #8282e1;
  color: white;
  padding: 0 10px;
`;

const InputField = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addTask();
    }
  };

  return (
    <label>
      <StyledTextArea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      ></StyledTextArea>
      <StyledButton onClick={addTask}>New task</StyledButton>
    </label>
  );
};

export default InputField;
