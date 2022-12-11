import Cards from '../Cards/Cards';
import {
  ChefDiscreption,
  ChefImage,
  ChefImageContainer,
  ChefName,
  ChefOfTheWeekContainer,
  ChefTitle,
  ResturantsTitle,
} from './HomeStyle';
import Yossi from '../../assets/Yossi.svg';
import SignaturDish from '../Cards/SignatureDish';
import HeroHome from './Hero';
import ChefCard from '../Cards/ChefCards';
import { ChefOfTheWeekCardTitle } from '../Cards/CardsStyle';
import AboutUs from './AboutUs/AboutUs';
const Home = () => {
  return (
    <>
      <HeroHome></HeroHome>
      <ResturantsTitle>popular restaurant in epicure:</ResturantsTitle>
      <Cards key={1}></Cards>
      <SignaturDish key={2}></SignaturDish>
      <ChefOfTheWeekContainer>
        <ChefTitle>Chef of the week:</ChefTitle>
        <ChefImageContainer>
          <ChefImage src={Yossi} alt="" />
          <ChefName>Yossi Shitrit</ChefName>
        </ChefImageContainer>
        <ChefDiscreption>
          Chef Yossi Shitrit has been living and breathing his culinary dreams
          for more than two decades, including running the kitchen in his first
          restaurant, the fondly-remembered Violet, located in Moshav Udim.
          Shitrit's creativity and culinary acumen born of long experience are
          expressed in the every detail of each and every dish.
        </ChefDiscreption>
        <ChefTitle>Chef of the week:</ChefTitle>
        <ChefCard key={3}></ChefCard>
      </ChefOfTheWeekContainer>
      <AboutUs></AboutUs>
    </>
  );
};

export default Home;
