import ColorTabs from '../Tabs';
import {
  CardContainerResturants,
  CardDescreption,
  Cards,
  FoodImage,
  FooterStarter,
  LinktoItem,
  ResturantCheif,
  ResturantName,
  ResturantsTitle,
} from '../ResurantsStyle';
import CardsResturants from '../ResturantsAllCards/CardsResturants';
import React, { useEffect } from 'react';
import ResturantCards from '../../../Data/CardsData/ResturantCards.json';
import moment from 'moment';
import { convertRoutesToDataRoutes } from '@remix-run/router/dist/utils';
import ResturantInterface from '../Interfaces/Interfaces';
import ResturantPage from './ResturantPages/ResturantPage';
import { useLocation } from 'react-router-dom';
import functionHelper from '../ResturantsAllCards/functionHelper';

const Resturants = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { pathname } = useLocation();
  const [value, setValue] = React.useState('All');
  const [datatoAnotherComp, setDatatoAnotherComp] = React.useState({});
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    window.history.replaceState('', '', `homePage_restaurants_${newValue}`);
  };

  const orderNewValues = ResturantCards as ResturantInterface[];
  const MostPopularOrder = ResturantCards;
  const getList = () => {
    switch (value) {
      case 'All':
        return ResturantCards;
      case 'New':
        return orderNewValues.filter((fa) => {
          const dateNow = new Date();
          const tN = moment(dateNow, 'M/D/YYYY H:mm').unix();
          const lessTwoYears = moment(tN).subtract(2, 'years').unix();
          return fa.Since >= -1 * lessTwoYears && fa.Since <= tN;
        });
      case 'Most_Popular':
        return [...MostPopularOrder].sort((b, a) => a.Rate - b.Rate);

      case 'Open_Now':
        return orderNewValues.filter((resturant: ResturantInterface) =>
          functionHelper(resturant)
        );
      default:
        return ResturantCards;
    }
  };

  return (
    <>
      <ResturantsTitle>Restaurants</ResturantsTitle>
      <ColorTabs handleChanger={handleChange}></ColorTabs>
      <CardContainerResturants>
        {getList().map((Data) => {
          return (
            <>
              <Cards key={Data.ID}>
                <LinktoItem
                  to={'/homePage_restaurants/' + Data.ID}
                  state={Data.ID}
                >
                  <FoodImage src={Data.ResturantImage} />
                </LinktoItem>
                <CardDescreption>
                  <ResturantName>{Data.ResturantName}</ResturantName>
                  <ResturantCheif>{Data.CheifName}</ResturantCheif>
                </CardDescreption>
              </Cards>
            </>
          );
        })}
      </CardContainerResturants>
      <FooterStarter></FooterStarter>
    </>
  );
};
export default Resturants;
