import {
  AllResturantsCard,
  ArrowRouter,
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
import { keys } from '@mui/system';

const ChefCard = () => {
  return (
    <>
      <CardStyled>
        <AllCardsInsideChef>
          {ChefCards.map((card) => {
            return (
              <CardContainer key={card.ID}>
                <CardImage src={card.DishImage} />
                <CardsLayout>{card.DishName}</CardsLayout>
              </CardContainer>
            );
          })}
        </AllCardsInsideChef>
      </CardStyled>
      <AllResturantsCardChef>
        <ResturantsRouterChef to="/homePage_restaurants_All">
          All Resturants
        </ResturantsRouterChef>
        <ArrowRouter to="/homePage_restaurants_All">
          <ArrowToResturants src={Arrow} alt="" />
        </ArrowRouter>
      </AllResturantsCardChef>
    </>
  );
};
export default ChefCard;
