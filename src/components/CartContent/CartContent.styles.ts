import styled from "styled-components";

export const StyledBack = styled.button`
  position: fixed;
  right: 100px;
  bottom: 50px;
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

export const StyledProduct = styled.div`
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
export const StyledName = styled.span`
  margin-left: 20px;
`;

export const StyledImage = styled.img``;

export const StyledPrice = styled.span`
  margin-left: auto;
`;

export const StyledButtons = styled.div`
  margin: 20px 0 0 20px;
`;

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  &:hover {
    background-color: #c2eced;
  }
`;

export const StyledMiddleInput = styled.input`
  width: 60px;
  height: 30px;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  text-align: center;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const StyledRemove = styled.img`
  width: 22px;
  height: 22px;
  bottom: 0;
  cursor: pointer;
  margin-top: auto;
  &:hover {
    background-color: red;
    border-radius: 50%;
  }
`;
export const StyledAbsentProducts = styled.span`
  display: block;
  margin-top: 150px;
  margin-right: 150px;
  font-size: 20px;
  text-align: center;
`;
