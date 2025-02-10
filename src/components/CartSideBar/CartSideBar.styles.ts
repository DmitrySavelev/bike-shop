import styled from "styled-components";

export const StyledContent = styled.div`
  position: absolute;
  right: 20px;
  border: 1px solid;
  width: 25%;
  min-height: 300px;
  padding: 15px;
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const StyledFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const StyledSecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledThirdRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
`;

export const StyledProducts = styled.span`
  font-size: 13px;
`;
export const StyledPromotionText = styled.span`
  font-size: 13px;
`;
export const StyledPromotionValue = styled.span``;
export const StyledPriceNoPromotion = styled.span``;
export const StyledTotalText = styled.span``;
export const StyledTotalValue = styled.span``;

export const StyledArticle = styled.h2`
  font-size: 23px;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledAmount = styled.span`
  font-size: 12px;
`;

export const StyledTextArea = styled.input`
  resize: none;
  width: 80%;
  font-size: 1.7vw;
  text-align: center;
  height: 30px;
  font-weight: 600;
  display: block;
  margin: 0 auto;
`;

export const StyledApplyPromo = styled.input`
  height: 30px;
  width: 50%;
  cursor: pointer;
  border-radius: 15px;
  text-align: center;
  display: block;
  margin: 20px auto 0;
  font-size: 1.5vw;

  &:hover {
    background-color: #c2eced;
  }
`;

export const StyledMakeOrder = styled.input`
  height: 45px;
  width: 70%;
  cursor: pointer;
  display: block;
  margin: 70px auto 0;
  white-space: normal;

  &:hover {
    background-color: #c2eced;
  }
`;
