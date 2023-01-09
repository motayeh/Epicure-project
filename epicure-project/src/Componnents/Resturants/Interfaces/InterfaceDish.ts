export interface Option {
  name: string;
  title: string;
  type: string;
  values: string[];
}

export interface DishOptions {
  options: Option[];
}

export interface DishInterface {
  ID: number;
  ResturantID: number;
  DishImage: string;
  DishName: string;
  DishDescreption: string;
  FoodType: string;
  Meals: string;
  Price: string;
  Sides: DishOptions;
}
export default DishInterface;
