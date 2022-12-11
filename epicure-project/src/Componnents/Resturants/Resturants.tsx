import ColorTabs from './Tabs';
import {
  CardContainerResturants,
  CardDescreption,
  Cards,
  FoodImage,
  FooterStarter,
  ResturantCheif,
  ResturantName,
  ResturantsTitle,
} from './ResurantsStyle';
import CardsResturants from './ResturantsAllCards/CardsResturants';
import React, { useEffect } from 'react';
import ResturantCards from '../../Data/CardsData/ResturantCards.json';
import moment from 'moment';
import { convertRoutesToDataRoutes } from '@remix-run/router/dist/utils';
import ResturantInterface from './Interfaces/Interfaces';

const Resturants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [value, setValue] = React.useState('All');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    window.history.replaceState('', '', `homePage_restaurants_${newValue}`);
  };

  const isOpened = (resturant: ResturantInterface) => {
    const date = new Date();
    const dayIs = moment(date).format('dddd');
    const today = {
      Open: '',
      Close: '',
    };

    switch (dayIs) {
      case 'Sunday':
        today.Open = resturant.working_Days.Sunday.Open;
        today.Close = resturant.working_Days.Sunday.Close;
        break;
      case 'Monday':
        today.Open = resturant.working_Days.Monday.Open;
        today.Close = resturant.working_Days.Monday.Close;
        break;
      case 'Tuesday':
        today.Open = resturant.working_Days.Tuesday.Open;
        today.Close = resturant.working_Days.Tuesday.Close;
        break;
      case 'Wednesday':
        today.Open = resturant.working_Days.Wednesday.Open;
        today.Close = resturant.working_Days.Wednesday.Close;
        break;
      case 'Thursday':
        today.Open = resturant.working_Days.Thursday.Open;
        today.Close = resturant.working_Days.Thursday.Close;
        break;
      case 'Friday':
        today.Open = resturant.working_Days.Friday.Open;
        today.Close = resturant.working_Days.Friday.Close;
        break;
      case 'Saturday':
        today.Open = resturant.working_Days.Suturday.Open;
        today.Close = resturant.working_Days.Suturday.Close;
        break;
    }

    const currentTime = moment(moment().format('LT'), 'hh:mm a');
    let openCurrently = moment(today.Open, 'hh:mm');
    let closedCurrently = moment(today.Close, 'hh:mm');
    let openNow = currentTime.isBetween(openCurrently, closedCurrently);

    return openNow;
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
          isOpened(resturant)
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
                <FoodImage src={Data.ResturantImage} />
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
