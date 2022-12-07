import {
  BarSearchContainer,
  Hero,
  SearchHeroBar,
  SearchImgInBackGround,
  SearchInBackGround,
} from './HomeStyle';
import search from '../../assets/search.svg';
const HeroHome = () => {
  return (
    <Hero>
      <SearchHeroBar>
        Epicure works with the top chef restaurants in Tel Aviv
        <BarSearchContainer>
          <SearchImgInBackGround src={search} alt="" />
          <SearchInBackGround placeholder="Search for restaurant cuisine, chef"></SearchInBackGround>
        </BarSearchContainer>
      </SearchHeroBar>
    </Hero>
  );
};
export default HeroHome;
