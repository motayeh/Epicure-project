import {
  Footer1,
  Footer2,
  Footer3,
  Hamburger,
  HamburgerPhoto,
  HamburgerResturant,
  HamburgerSplitter,
  LinkStyle,
  LowerHamburger,
  StyledDialog,
  UpperHamburger,
  XOut,
} from '../../Style';
import hamburber from '../../../../assets/hamburber.svg';
import x from '../../../../assets/x.svg';
import { useState } from 'react';

const HamburgerHeader = () => {
  const [ifHamburger, setIfHamburger] = useState<boolean>(false);
  return (
    <>
      <Hamburger>
        <HamburgerPhoto
          src={hamburber}
          alt=""
          onClick={() => setIfHamburger(true)}
        ></HamburgerPhoto>

        <StyledDialog
          open={ifHamburger}
          scroll="body"
          fullScreen={true}
          style={{
            height: '44%',
          }}
          BackdropProps={{ invisible: true }}
          onClose={() => setIfHamburger(false)}
        >
          <XOut src={x} alt="" onClick={() => setIfHamburger(false)} />
          <UpperHamburger>
            <HamburgerResturant>
              <LinkStyle to="/homePage_restaurants_All">Resturants</LinkStyle>
            </HamburgerResturant>
            <LinkStyle to="/Mobile/Chefs/All">Chefs</LinkStyle>
          </UpperHamburger>
          <HamburgerSplitter></HamburgerSplitter>
          <LowerHamburger>
            {/* foter here */}
            <Footer1>Contact Us</Footer1>
            <Footer2>Terms Of Use</Footer2>
            <Footer3>Privacy Policy</Footer3>
          </LowerHamburger>
        </StyledDialog>
      </Hamburger>
    </>
  );
};
export default HamburgerHeader;
