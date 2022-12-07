import {
  AllResturantsCard,
  ArrowToResturants,
  ResturantsRouter,
} from '../Home/HomeStyle';
import {
  AllCardsInside,
  CardContainer,
  CardStyled,
  CardsLayout,
  CardDescreption,
  CardImage,
} from './CardsStyle';
import DishCard from './DishesCards';
import Arrow from '../../assets/Arrow.svg';
import CardsData from '../../Data/CardsData/CardsData.json';
const Cards = () => {
  return (
    <>
      <CardStyled>
        <AllCardsInside>
          {CardsData.map((card) => {
            return (
              <CardContainer>
                <CardImage />
                <CardsLayout>
                  {card.ResturantName}
                  <CardDescreption>{card.ChefName}</CardDescreption>
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
      <DishCard></DishCard>
    </>
  );
};
export default Cards;
