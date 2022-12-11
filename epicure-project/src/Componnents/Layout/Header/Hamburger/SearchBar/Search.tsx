import { Dialog } from '@mui/material';
import {
  RightSearch,
  ItemsMove,
  OpenedSearch,
  XOut,
  BarSearchItems,
  SearchImgInBar,
  SearchBar,
} from '../../../Style';
import search from '../../../../../assets/search.svg';
import x from '../../../../../assets/x.svg';
import { useState } from 'react';
import {
  CheifsFound,
  DishesFound,
  FirstInSearch,
  ItemsFoundContainer,
  ResturantsFound,
  SeconedInSearch,
} from './SearchStyles';
import React from 'react';
import dataResturants from '../../../../../Data/CardsData/ResturantCards.json';
import dataDishes from '../../../../../Data/CardsData/DishData.json';
import { keys } from '@mui/system';

const Searchfiltered = () => {
  const [ifSearch, setIfSearch] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<String>('');
  const [data1, setData1] = React.useState(dataResturants);
  const [data2, setData2] = React.useState(dataDishes);

  const onChange = (event: any) => {
    setValue(event.target.value);
    console.log(data1, data2);
  };

  const onSearch = (searchValue: any) => {
    setValue(searchValue);
    console.log(searchValue);
  };
  const EnableSearchResults = () => {
    return value !== '';
  };

  return (
    <>
      <RightSearch
        src={search}
        alt=""
        onClick={() => setIfSearch(true)}
      ></RightSearch>

      <OpenedSearch>
        <Dialog
          open={ifSearch}
          scroll="body"
          fullScreen={true}
          style={{ height: '50%' }}
          BackdropProps={{ invisible: true }}
          onClose={() => setIfSearch(false)}
        >
          <XOut src={x} alt="" onClick={() => setIfSearch(false)}></XOut>
          <BarSearchItems>
            <SearchImgInBar src={search} alt="" />
            <SearchBar
              type="search"
              placeholder="Search for restaurant cuisine, chef"
              onChange={onChange}
            />
          </BarSearchItems>
          {EnableSearchResults() && (
            <ItemsFoundContainer>
              <FirstInSearch>Resturants:</FirstInSearch>
              {data1
                .filter((res1) => {
                  const searchOnChange = value.toLowerCase();
                  const resturantName = res1.ResturantName.toLowerCase();

                  return (
                    searchOnChange && resturantName.startsWith(searchOnChange)
                  );
                })

                .map((res1) => {
                  return (
                    <ResturantsFound
                      onClick={() => onSearch(res1.ResturantName)}
                      key={res1.ID}
                    >
                      {res1.ResturantName}
                    </ResturantsFound>
                  );
                })}
              <SeconedInSearch>Dishes:</SeconedInSearch>

              {data2
                .filter((res2) => {
                  const SearchCheckDish = value.toLowerCase();
                  const DishName = res2.DishName.toLowerCase();
                  return (
                    SearchCheckDish && DishName.startsWith(SearchCheckDish)
                  );
                })
                .map((res2) => {
                  return (
                    <DishesFound onClick={() => onSearch(res2.DishName)}>
                      {res2.DishName}
                    </DishesFound>
                  );
                })}
            </ItemsFoundContainer>
          )}
        </Dialog>
      </OpenedSearch>
    </>
  );
};
export default Searchfiltered;
