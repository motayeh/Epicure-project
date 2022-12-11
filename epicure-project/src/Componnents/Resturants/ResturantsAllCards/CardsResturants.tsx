import {
  CardContainerResturants,
  CardDescreption,
  Cards,
  FoodImage,
  ResturantCheif,
  ResturantName,
} from '../ResurantsStyle';
import claro from '../../../assets/claro.svg';
import ResturantCards from '../../../Data/CardsData/ResturantCards.json';

function CardsResturants() {
  return (
    <>
      {ResturantCards.map((ResturantData) => {
        return (
          <CardContainerResturants key={ResturantData.ID}>
            <Cards>
              <FoodImage src={ResturantData.ResturantImage} />
              <CardDescreption>
                <ResturantName>{ResturantData.ResturantName}</ResturantName>
                <ResturantCheif>{ResturantData.CheifName}</ResturantCheif>
              </CardDescreption>
            </Cards>
          </CardContainerResturants>
        );
      })}
    </>
  );
}
export default CardsResturants;
