import {
  AllResturantsCard,
  ArrowRouter,
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
import CardsData from '../../Data/CardsData/ResturantCards.json';
import Resturants from '../Resturants/Resturant/Resturants';
const Cards = () => {
  return (
    <>
      <CardStyled>
        <AllCardsInside>
          {CardsData.map((card) => {
            return (
              <CardContainer key={card.ID}>
                <CardImage src={card.ResturantImage} alt="" />
                <CardsLayout>
                  {card.ResturantName}
                  <CardDescreption>{card.CheifName}</CardDescreption>
                </CardsLayout>
              </CardContainer>
            );
          })}
        </AllCardsInside>
      </CardStyled>
      <AllResturantsCard>
        <ResturantsRouter to="/homePage_restaurants_All">
          All Resturants
        </ResturantsRouter>
        <ArrowRouter to="/homePage_restaurants_All">
          <ArrowToResturants src={Arrow} alt="" />
        </ArrowRouter>
      </AllResturantsCard>
      <DishCard></DishCard>
    </>
  );
};
export default Cards;
