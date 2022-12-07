import styled from 'styled-components';
import HeroMe from '../../assets/HeroMe.svg';
export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  height: 273px;
  background-image: url(${HeroMe});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const SearchHeroBar = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  align-items: center;

  gap: 18px;
  text-align: center;
  font-size: 22px;
  position: absolute;
  width: 335px;
  height: 144px;
  top: 105px;
  left: 27px;
  letter-spacing: 1.97px;
  background: rgba(255, 255, 255, 0.88);
`;

export const HeroText = styled.div`
  width: 315px;
  height: 64px;

  display: flex;

  padding-bottom: 50px;
  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 32px;

  letter-spacing: 1.97px;

  color: #000000;
`;

export const SearchInBackGround = styled.input`
  width: 90%;
  background-color: transparent;
  border: none;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  padding-left: 18px;
  letter-spacing: 1.29px;
`;

export const SearchImgInBackGround = styled.img`
  padding-left: 3%;
`;

export const BarSearchContainer = styled.div`
  width: 90%;

  align-content: center;
  display: flex;
  flex-direction: inline;
  border: 0.5px solid #000000;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  background-color: transparent;
`;

export const ResturantsTitle = styled.div`
  display: flex;
  padding-left: 20px;
  padding-top: 40px;
  height: 24px;
  padding-bottom: 6px;
  top: 367px;

  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  letter-spacing: 1.25px;
  text-transform: uppercase;
`;
export const AllResturantsCard = styled.div`
  display: flex;
  flex-direction: inline;
  padding-left: 26px;
  align-content: center;
`;
export const ResturantsRouter = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  /* identical to box height, or 219% */
  padding-bottom: 3px;
  text-align: right;
  letter-spacing: 2px;
  text-transform: capitalize;

  color: #000000;
`;

export const ArrowToResturants = styled.img`
  padding-left: 8px;
`;

export const AllPage = styled.div``;

export const SigntuerDish = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 20%;
  gap: 32px;
  padding-bottom: 8%;
  width: 100%;
  height: 584px;

  background: #fafafa;
`;

export const SigntuerDishText = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: center;
  padding-top: 10%;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 35px;
  /* identical to box height, or 194% */

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #000000;
`;
export const FoodTypeVegan = styled.img`
  height: 56.45408630371094px;
  width: 56.04487991333008px;
  left: 11.612899780273438px;
`;
export const FoodTypeVeganText = styled.div`
  font-size: 18px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 1.9700000286102295px;
  text-align: center;
`;
export const FoodTypeSpicy = styled.img`
  height: 34.44329071044922px;
  width: 46.137542724609375px;
`;
export const FoodTypeSpicyText = styled.div`
  font-size: 18px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 1.9700000286102295px;
  text-align: center;
`;
export const FoodTypeVegeterian = styled.img`
  height: 56.27864074707031px;
  width: 55.82003402709961px;
`;
export const FoodTypeVegeterianText = styled.div`
  font-size: 18px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: 1.9700000286102295px;
  text-align: center;
`;

export const SpicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-bottom: 10%;
`;
export const VeganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-bottom: 10%;
`;
export const VegeterianContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-bottom: 10%;
`;

export const ChefOfTheWeekContainer = styled.div`
  padding-left: 5%;
  padding-top: 8%;
`;

export const ChefTitle = styled.div`
  height: 35px;
  left: 20px;
  top: 1902px;
  padding-left: 3.5%;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 35px;

  /* identical to box height, or 194% */

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #000000;
`;

export const ChefImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  align-content: center;
  justify-content: center;
`;

export const ChefImage = styled.img`
  padding-top: 5%;
  padding-right: 4%;
`;
export const ChefName = styled.div`
  display: flex;
  position: relative;
  width: 91%;
  height: 51px;
  bottom: 51px;
  margin-right: 4%;

  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 47px;
  /* identical to box height, or 261% */

  text-align: center;
  letter-spacing: 2.67px;

  color: #000000;
  background: rgba(255, 255, 255, 0.8);
`;

export const ChefDiscreption = styled.div`
  width: 90%;
  padding-left: 3%;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */
  padding-bottom: 10%;
  text-align: justify;
  letter-spacing: 1.25px;

  color: #000000;
`;

export const Aboutus = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  gap: 32px;

  width: 100%;
  height: 800px;

  background: #fafafa;
`;

export const AboutLogo = styled.img`
  position: relative;
  width: 102px;
  height: 95px;
  left: 19px;
  top: 24px;
`;

export const Stores = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  position: relative;
  left: 19px;
  top: 3%;
  width: fit-content;
`;

export const AppleStore = styled.img`
  width: 180px;
  height: 52px;
`;
export const GoogleStore = styled.img`
  width: 180px;
  height: 52px;
`;

export const AboutUsDescreption = styled.div`
  position: relative;
  top: 40px;
  left: 20px;
  width: 306px;
`;

export const AboutUsTitle = styled.div`
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 35px;
  /* identical to box height, or 194% */

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #000000;
`;

export const AboutUsText = styled.div`
  padding-top: 4%;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  letter-spacing: 2.14px;

  color: #000000;
`;
