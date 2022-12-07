import {
  AllResturantsCard,
  ArrowToResturants,
  ResturantsRouter,
} from '../Home/HomeStyle';
import {
  AllCardsInside,
  AllCardsInsideChef,
  AllResturantsCardChef,
  CardContainer,
  CardDescreption,
  CardImage,
  CardsLayout,
  CardStyled,
  ResturantsRouterChef,
} from './CardsStyle';
import Arrow from '../../assets/Arrow.svg';
import ChefCards from '../../Data/CardsData/ChefCards.json';

const ChefCard = () => {
  return (
    <>
      <CardStyled>
        <AllCardsInsideChef>
          {ChefCards.map((card) => {
            return (
              <CardContainer>
                <CardImage />
                <CardsLayout>{card.DishName}</CardsLayout>
              </CardContainer>
            );
          })}
        </AllCardsInsideChef>
      </CardStyled>
      <AllResturantsCardChef>
        <ResturantsRouterChef>All Resturants</ResturantsRouterChef>
        <ArrowToResturants src={Arrow} alt="" />
      </AllResturantsCardChef>
    </>
  );
};
export default ChefCard;
