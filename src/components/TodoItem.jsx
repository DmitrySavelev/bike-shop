import { removeTodo, ToggleTodoComplete } from "@/store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const StyledText = styled.span`
  font-size: 20px;
`;
const StyledDelete = styled.span`
  color: red;
  cursor: pointer;
  font-size: 30px;
`;
const StyledCheckbox = styled.input`
  cursor: pointer;
  &:checked + span {
    text-decoration: line-through;
    color: gray;
  }
`;

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <StyledLi key={id}>
      <StyledCheckbox
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(ToggleTodoComplete({ id }))}
      />
      <StyledText>{text}</StyledText>
      <StyledDelete
        onClick={() => {
          dispatch(removeTodo({ id }));
        }}
        onKeyDown={() => {
          dispatch(removeTodo({ id }));
        }}
      >
        &times;
      </StyledDelete>
    </StyledLi>
  );
};

export default TodoItem;
