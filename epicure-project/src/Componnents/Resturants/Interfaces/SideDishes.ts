export interface Option {
  name: string;
  title: string;
  type: string;
  values: string[];
}

export interface DishOptions {
  id: number;
  options: Option[];
}
export default DishOptions;
