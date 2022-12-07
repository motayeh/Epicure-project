import {
  AllResturantsCard,
  ArrowToResturants,
  ResturantsRouter,
  ResturantsTitle,
} from '../Home/HomeStyle';
import {
  AllCardsInside,
  CardContainer,
  CardDescreption,
  CardImage,
  CardsLayout,
  CardStyled,
  DishPrice,
  DishType,
} from './CardsStyle';
import Arrow from '../../assets/Arrow.svg';
import FoodType from './FoodType';
import DishData from '../../Data/CardsData/DishData.json';

const DishCard = () => {
  return (
    <>
      <CardStyled>
        <ResturantsTitle>Signature Dish Of:</ResturantsTitle>
        <AllCardsInside>
          {DishData.map((dish) => {
            return (
              <CardContainer>
                <CardImage />
                <CardsLayout>
                  {dish.DishName}
                  <CardDescreption>{dish.DishDescreption}</CardDescreption>
                  <DishType src={FoodType(dish.FoodType)} alt="" />
                  <DishPrice>{dish.Price}</DishPrice>
                </CardsLayout>
              </CardContainer>
            );
          })}
        </AllCardsInside>
      </CardStyled>
      <AllResturantsCard>
        <ResturantsRouter>All Resturants</ResturantsRouter>
        <ArrowToResturants src={Arrow} alt="" />
      </AllResturantsCard>
    </>
  );
};
export default DishCard;
