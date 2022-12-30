import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Hero = styled.img`
  width: 100%;
  height: 272px;
`;

export const DeatilsOfResturant = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
  margin-bottom: 9%;
`;

export const ImageOfDish = styled.img``;
export const ResturantName = styled.div`
  position: relative;
  bottom: 5%;
  margin-left: 6%;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 2.67px;

  color: #000000; ;
`;

export const DishDescreption = styled.div`
  width: 80%;
  margin-left: 6%;
  position: relative;
  bottom: 5%;
  height: 40%;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  letter-spacing: 1.97px;

  color: #000000;
`;

export const HeroImg = styled.img`
  height: 213px;
  width: 100%;
  padding-left: 1%;
`;
export const ContainerCards = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  justify-items: center;
  padding-left: 10%;
  align-items: center;
  padding: 0px;
  width: 90%;
  height: 375.84px;
`;
export const OpenImg = styled.img``;
export const OpenCheck = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0px;
`;
export const ResturantNamePg = styled.div`
  padding-top: 7%;
  font-weight: 550;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 2.67px;

  color: #000000;
`;
export const CheifNamePg = styled.div`
  font-weight: 200;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  letter-spacing: 1.97px;

  color: #000000;
`;
export const OpenState = styled.div`
  font-weight: 200;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  letter-spacing: 1.97px;

  color: #000000;
`;
export const ResturantDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  margin-bottom: 9%;
  gap: 16px;
`;
export const DeatilsOfDish = styled.div`
  display: flex;

  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-left: 11%;
  gap: 16px;

  width: 100%;
  height: 100%;

  background: #f9f4ea;
`;
export const InlineCardDeatils = styled.div`
  display: inline;
`;

export const Price = styled.div`
  padding-left: 6%;
`;

export const BorderDrawer = styled.div`
  border: 0.5px solid #979797;
  margin-left: 17%;
  position: relative;
  bottom: 42%;
  width: 75%;
  height: 0.4px;
`;

export const LinktoDishPage = styled(Link)`
  width: 100%;
  text-decoration: none !important;
  border: 0px !important;
  outline: none;
  border-width: 0px;
  outline-width: 0px;
  border-bottom: none;
  text-decoration-style: none;
  padding-left: 9%;
  height: 56.5%;
`;
