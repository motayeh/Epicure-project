import React from 'react';
import { useParams } from 'react-router-dom';
import DishInterface from '../../Interfaces/InterfaceDish';
import DishData from './../../../../Data/CardsData/DishData.json';
import Checkbox from '@mui/material/Checkbox';
import { getEnvironmentData } from 'worker_threads';
import {
  DataofDishContainer,
  DishName,
  GetData,
  HeroOfDish,
  OptionContainer,
  Options,
} from './DishPageStyled';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { KeyObject } from 'crypto';
import { keyframes } from 'styled-components';
import { SigntuerDish } from '../../../Home/HomeStyle';
import dishSides from '../../../../Data/CardsData/DishSidesData.json';
import SideDishes from '../../Interfaces/SideDishes';
const ResturantPageDish = () => {
  const { id2 } = useParams();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const list = DishData as DishInterface[];
  const getEnvironmentData = () => {
    return list.filter((data) => data.ID === Number(id2));
  };
  const optionsList = dishSides as SideDishes[];
  const getOption = () => {
    return optionsList.find((option) => option.id === Number(id2));
  };

  return (
    <>
      {getEnvironmentData().map((Data) => {
        return (
          <>
            <HeroOfDish src={Data.DishImage} />
            <DataofDishContainer>
              <DishName>{Data.DishName}</DishName>
            </DataofDishContainer>

            {getOption()?.options.map((option) => {
              return (
                <>
                  {option.title}
                  {option.values.map((value) => {
                    return (
                      <>
                        <OptionContainer>
                          <Options
                            name={option.name}
                            type={option.type}
                            value={value}
                          />
                          {value}
                        </OptionContainer>
                      </>
                    );
                  })}
                </>
              );
            })}
            <GetData></GetData>
          </>
        );
      })}
    </>
  );

  // return (
  //   <FormControl>
  //     <FormLabel id="demo-radio-buttons-group-label">Side Dish</FormLabel>

  //     <RadioGroup
  //       aria-labelledby="demo-radio-buttons-group-label"
  //       name="radio-buttons-group"
  //     >
  //       <FormControlLabel
  //         value={sidesExpander(s.Sides)}
  //         control={<Radio />}
  //         label={sidesExpander(s.Sides)}
  //       />
  //     </RadioGroup>
  //   </FormControl>
  // );
};
export default ResturantPageDish;
