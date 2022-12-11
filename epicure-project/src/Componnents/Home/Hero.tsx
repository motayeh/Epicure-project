import {
  BarSearchContainer,
  ContainAll,
  DishesFoundHero,
  FirstInSearchHero,
  Hero,
  ResturantsFoundHero,
  SearchHeroBar,
  SearchImgInBackGround,
  SearchInBackGround,
  SearchResults,
  SeconedInSearchHero,
} from './HomeStyle';
import search from '../../assets/search.svg';
import React from 'react';
import dataResturants from '../../Data/CardsData/ResturantCards.json';
import dataDishes from '../../Data/CardsData/DishData.json';

const HeroHome = () => {
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
    <Hero>
      <SearchHeroBar>
        Epicure works with the top chef restaurants in Tel Aviv
      </SearchHeroBar>
      <ContainAll>
        <BarSearchContainer>
          <SearchImgInBackGround src={search} alt="" />

          <SearchInBackGround
            type="search"
            placeholder="Search for restaurant cuisine, chef"
            onChange={onChange}
          ></SearchInBackGround>
        </BarSearchContainer>
        {EnableSearchResults() && (
          <SearchResults>
            <FirstInSearchHero>Resturants:</FirstInSearchHero>
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
                  <ResturantsFoundHero
                    onClick={() => onSearch(res1.ResturantName)}
                    key={res1.ID}
                  >
                    {res1.ResturantName}
                  </ResturantsFoundHero>
                );
              })}
            <SeconedInSearchHero>Dishes:</SeconedInSearchHero>

            {data2
              .filter((res2) => {
                const SearchCheckDish = value.toLowerCase();
                const DishName = res2.DishName.toLowerCase();
                return SearchCheckDish && DishName.startsWith(SearchCheckDish);
              })
              .map((res2) => {
                return (
                  <DishesFoundHero onClick={() => onSearch(res2.DishName)}>
                    {res2.DishName}
                  </DishesFoundHero>
                );
              })}
          </SearchResults>
        )}
      </ContainAll>
    </Hero>
  );
};
export default HeroHome;
