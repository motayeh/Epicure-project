import moment from 'moment';
import React from 'react';
import ResturantInterface from '../Interfaces/Interfaces';

const functionHelper = (resturant: ResturantInterface) => {
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

export default functionHelper;
