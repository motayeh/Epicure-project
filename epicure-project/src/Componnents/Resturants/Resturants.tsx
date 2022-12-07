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
import React from 'react';
import MostPopularOnes from './MostPopularResturants';
import ResturantCards from '../../Data/CardsData/ResturantCards.json';
import moment from 'moment';
import { convertRoutesToDataRoutes } from '@remix-run/router/dist/utils';

const Resturants = () => {
  const [value, setValue] = React.useState('All');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    window.history.replaceState('', '', `homePage_restaurants_${newValue}`);
  };
  const GetToday = () => {
    const date = new Date();
    const dayIs = moment(date).format('dddd');
    let resturantDataForDay = ResturantCards.map((C) => {
      switch (dayIs) {
        case 'Sunday':
          return C.working_Days.Sunday;
        case 'Monday':
          return C.working_Days.Monday;
        case 'Tuesday':
          return C.working_Days.Tuesday;
        case 'Wednesday':
          return C.working_Days.Wednesday;
        case 'Thursday':
          return C.working_Days.Thursday;
        case 'Friday':
          return C.working_Days.Friday;
        case 'Suturday':
          return C.working_Days.Suturday;
      }
      return null;
    });
    resturantDataForDay.map((s) => {
      let openCurrently = moment(s?.Open, 'H:mm').format('H:mm');
      let closedCurrently = moment(s?.Close, 'H:mm').format('H:mm');
      let openNow = moment().isBetween(openCurrently, closedCurrently);
      return openNow ? s : null;

      // moment(openCurrently).isBetween(closedCurrently);
    });
    // moment()
  };

  const getList = () => {
    switch (value) {
      case 'All':
        return ResturantCards.map((allOn) => allOn);
      case 'New':
        return ResturantCards.sort((b, a) => a.Since - b.Since);
      case 'Most_Popular':
        return ResturantCards.sort((b, a) => a.Rate - b.Rate);

      case 'Open_Now':
        return GetToday();
    }
  };

  return (
    <>
      <ResturantsTitle>Restaurants</ResturantsTitle>
      <ColorTabs handleChanger={handleChange}></ColorTabs>

      <CardContainerResturants>
        <Cards>
          {ResturantCards.map((Data) => {
            return (
              <>
                <FoodImage src={Data.ResturantImage} />
                <CardDescreption>
                  <ResturantName>{Data.ResturantName}</ResturantName>
                  <ResturantCheif>{Data.CheifName}</ResturantCheif>
                </CardDescreption>
              </>
            );
          })}
        </Cards>
      </CardContainerResturants>

      <FooterStarter></FooterStarter>
    </>
  );
};
export default Resturants;
