import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerOfTabs = styled.div`
  width: 100%;
`;

export const FooterStarter = styled.div`
  border: 1px solid #f2f2f2;
`;

export const ResturantsTitle = styled.div`
  font-size: 18px;
  font-weight: 200;
  line-height: 22px;
  letter-spacing: 1.9199999570846558px;
  text-align: left;
  text-transform: uppercase;

  color: #000000;
  margin-top: 3%;
  margin-left: 4%;
  margin-bottom: 5%;
`;

export const CardContainerResturants = styled.div`
  width: 92%;
  height: fit-content;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 4%;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 99.3%;
`;

export const FoodImage = styled.img`
  position: relative;
  width: 100%;
  height: 207px;
`;

export const CardDescreption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;
  width: 100%;
  height: 81px;
  margin-bottom: 5%;
  background: #f9f4ea;
`;

export const ResturantName = styled.div`
  font-style: normal;
  font-weight: 450;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 2.67px;
  position: relative;
  top: 16px;
  left: 16px;
  color: #000000;
`;

export const ResturantCheif = styled.div`
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 30px;
  /* identical to box height, or 188% */
  position: relative;
  top: 8px;
  left: 16px;
  letter-spacing: 1.97px;

  color: #000000;
`;
export const LinktoItem = styled(Link)`
  text-decoration: none;

  width: 100%;
`;
