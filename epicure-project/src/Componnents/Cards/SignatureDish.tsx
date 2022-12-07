import {
  FoodTypeSpicy,
  FoodTypeSpicyText,
  FoodTypeVegan,
  FoodTypeVeganText,
  FoodTypeVegeterian,
  FoodTypeVegeterianText,
  SigntuerDish,
  SigntuerDishText,
  SpicyContainer,
  VeganContainer,
  VegeterianContainer,
} from '../Home/HomeStyle';
import VeganBig from '../../assets/VeganBig.svg';
import SpicyBig from '../../assets/SpicyBig.svg';
import VegeterianBig from '../../assets/VegeterianBig.svg';

const SignaturDish = () => {
  return (
    <SigntuerDish>
      <SigntuerDishText>Signature Dish Of:</SigntuerDishText>
      <SpicyContainer>
        <FoodTypeSpicy src={SpicyBig} alt="" />
        <FoodTypeSpicyText>Spicy</FoodTypeSpicyText>
      </SpicyContainer>

      <VegeterianContainer>
        <FoodTypeVegeterian src={VegeterianBig} alt="" />
        <FoodTypeVegeterianText>Vegeterian</FoodTypeVegeterianText>
      </VegeterianContainer>

      <VeganContainer>
        <FoodTypeVegan src={VeganBig} alt="" />
        <FoodTypeVeganText>Vegan</FoodTypeVeganText>
      </VeganContainer>
    </SigntuerDish>
  );
};
export default SignaturDish;
