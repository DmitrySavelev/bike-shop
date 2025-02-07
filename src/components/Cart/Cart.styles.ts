import styled from "styled-components";

export const StyledCart = styled.div``;

export const StyledBack = styled.button`
  position: fixed;
  right: 150px;
  top: 15px;
  opacity: 0.3;
  border-radius: 15px;
  z-index: 99999;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const StyledBackImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const CartContent = styled.div`
  width: 70%;
  background-color: #dbd4d4;
  display: flex;
  border: 1px solid black;
  padding: 20px;
  height: 190px;
  margin-left: 20px;
`;

export const StyledArticle = styled.div`
  font-size: 30px;
  padding: 20px 0 30px 50px;
`;

export const StyledAbsentProducts = styled.span`
  display: block;
  margin-top: 150px;
  margin-right: 150px;
  font-size: 20px;
  text-align: center;
`;
