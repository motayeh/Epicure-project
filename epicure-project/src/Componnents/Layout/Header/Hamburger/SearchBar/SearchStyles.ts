import styled from 'styled-components';

export const ItemsFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 12px;
  width: 83%;
  height: 138px;
  left: 136px;
  top: 179px;
  gap: 12%;
  padding-top: 6%;
  width: 277px;
  border: 0.5px solid black;
  margin: 0 20px;
  background: #ffffff;
  overflow-y: auto;
  border-radius: 2%;
  padding-left: 15%;
  &.hidden {
    display: none;
  }
`;

export const FirstInSearch = styled.div`
  font-weight: 200;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.29px;

  color: #000000;
`;
export const SeconedInSearch = styled.div`
  font-weight: 200;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.29px;

  color: #000000;
`;

export const ResturantsFound = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 1.29px;

  color: #000000;
`;

export const DishesFound = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  flex-direction: column;

  letter-spacing: 1.29px;

  color: #000000;
`;

export const CheifsFound = styled.div``;
