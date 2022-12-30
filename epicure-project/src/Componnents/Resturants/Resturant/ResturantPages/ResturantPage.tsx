import react, { useEffect } from 'react';
import {
  BorderDrawer,
  CheifNamePg,
  Container,
  ContainerCards,
  DeatilsOfDish,
  DeatilsOfResturant,
  DishDescreption,
  Hero,
  HeroImg,
  InlineCardDeatils,
  LinktoDishPage,
  OpenCheck,
  OpenImg,
  OpenState,
  Price,
  ResturantDetailsContainer,
  ResturantName,
  ResturantNamePg,
} from './ResturantPageStyled';
import Dish from '../../../../Data/CardsData/DishData.json';
import Resturant from '../../../../Data/CardsData/ResturantCards.json';
import InterfaceDish from '../../Interfaces/InterfaceDish';
import React from 'react';
import ColorTabsResturantPage from './TabsResturant';
import ResturantInterface from '../../Interfaces/Interfaces';
import { useLocation, useParams } from 'react-router-dom';
import Resturants from '../Resturants';
import functionHelper from '../../ResturantsAllCards/functionHelper';
import Clock from '../../../../assets/Clock.svg';

const ResturantPage = () => {
  const [open, setOpen] = react.useState<String>('');
  const [value, setValue] = React.useState<String>('BreakFast');
  const { id } = useParams();
  const idd = Number(id);
  const state = useLocation().state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: String) => {
    setValue(newValue);
    const origin = event;

    document.title = 'Epicure Resturant Page';
  };

  let meal = '';

  const lists = Dish as InterfaceDish[];

  const resturantID = () => {
    console.log(origin);
    switch (value) {
      case 'BreakFast':
        return lists.filter(
          (ids) => ids.ResturantID === Number(id) && ids.Meals === value
        );
      case 'Lunch':
        return lists.filter(
          (ids) => ids.ResturantID === Number(id) && ids.Meals === value
        );

      case 'Dinner':
        return lists.filter(
          (ids) => ids.ResturantID === Number(id) && ids.Meals === value
        );

      default:
        return lists.filter((ids) => ids.ResturantID === Number(id));
    }
  };
  const rest = Resturant as ResturantInterface[];
  const getHero = () => {
    return rest.filter((hero) => hero.ID === Number(id));
  };

  return (
    <>
      <Container>
        {getHero().map((hero) => {
          <></>;
          return (
            <>
              <Hero src={hero.ResturantImage} />
              <ResturantDetailsContainer>
                <ResturantNamePg>{hero.ResturantName}</ResturantNamePg>

                <CheifNamePg>{hero.CheifName}</CheifNamePg>
                <OpenCheck>
                  <OpenImg src={Clock} />
                  <OpenState>
                    {functionHelper(hero) ? `Open now` : `Closed`}
                  </OpenState>
                </OpenCheck>
              </ResturantDetailsContainer>
            </>
          );
        })}
        <ColorTabsResturantPage
          handleChanger={handleChange}
        ></ColorTabsResturantPage>
        <DeatilsOfResturant>
          {resturantID().map((Data) => {
            return (
              <>
                <ContainerCards>
                  <LinktoDishPage to={'/restaurant/Page/' + Data.ID}>
                    <HeroImg src={Data.DishImage} />
                  </LinktoDishPage>
                  <DeatilsOfDish>
                    <ResturantName>{Data.DishName}</ResturantName>
                    <DishDescreption>{Data.DishDescreption}</DishDescreption>
                    <InlineCardDeatils>
                      <Price>{Data.Price}</Price>
                      <BorderDrawer></BorderDrawer>
                    </InlineCardDeatils>
                  </DeatilsOfDish>
                </ContainerCards>
              </>
            );
          })}
        </DeatilsOfResturant>
      </Container>
    </>
  );
};
export default ResturantPage;
