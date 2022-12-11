import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardStyled = styled.div`
  width: 100%;
`;
export const AllCardsInside = styled.div`
  display: flexbox;
  overflow-x: scroll;
  height: fit-content;
  margin: 8px 20px;
  margin-right: 2px;
  gap: 15px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;
export const CardsLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  padding-right: 0px;
  background-color: white;
  width: 229px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 2.67px;

  background: #f9f4ea;
`;

export const CardDescreption = styled.div`
  width: 200px;
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  padding-top: 10px;
  letter-spacing: 1.97px;
  height: 50%;
  color: #000000;
  background: #f9f4ea;
`;
export const CardImage = styled.img`
  width: 245px;
  height: 236px;

  display: flex;

  align-items: flex-end;
`;

export const DishType = styled.img`
  display: flex;
  width: fit-content;
  height: 29.17px;
  padding-top: 10%;
`;

export const DishPrice = styled.div`
  display: flex;
  padding-top: 6%;
`;

export const ChefOfTheWeekCardTitle = styled.div`
  padding-left: 6%;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 35px;

  /* identical to box height, or 194% */

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #000000;
`;

export const AllCardsInsideChef = styled.div`
  display: flexbox;
  overflow-x: scroll;
  height: fit-content;
  margin: 8px;
  margin-right: 2px;
  gap: 15px;
`;

export const ResturantsRouterChef = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  text-decoration: none;
  /* identical to box height, or 219% */
  padding-bottom: 3px;

  letter-spacing: 2px;
  text-transform: capitalize;

  color: #000000;
`;

export const AllResturantsCardChef = styled.div`
  display: flex;
  flex-direction: inline;
  padding-left: 15px;
  align-content: center;
`;
