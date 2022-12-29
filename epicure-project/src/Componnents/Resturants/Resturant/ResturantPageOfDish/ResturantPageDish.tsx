import React from 'react';
import { useParams } from 'react-router-dom';
import DishInterface from '../../Interfaces/InterfaceDish';
import DishData from './../../../../Data/CardsData/DishData.json';
import Checkbox from '@mui/material/Checkbox';
import { getEnvironmentData } from 'worker_threads';
import { HeroOfDish } from './DishPageStyled';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ResturantPageDish = () => {
  const { id2 } = useParams();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const list = DishData as DishInterface[];
  const getEnvironmentData = () => {
    return list.filter((data) => data.ID === Number(id2));

    function RadioButtonsGroup() {
      return (
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      );
    }
  };

  return (
    <>
      {getEnvironmentData().map((Data) => {
        return <HeroOfDish src={Data.DishImage} />;
      })}
      <Checkbox {...label} />
    </>
  );
};

export default ResturantPageDish;
