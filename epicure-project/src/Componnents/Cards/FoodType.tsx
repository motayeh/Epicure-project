import Vegan from '../../assets/Vegan.svg';
import Spicy from '../../assets/Spicy.svg';
import Vegeterian from '../../assets/Vegeterian.svg';

const FoodType = (TypeOfFood: String) => {
  if (TypeOfFood === 'Spicy') return Spicy;
  else if (TypeOfFood === 'Vegan') return Vegan;
  else return Vegeterian;
};
export default FoodType;
