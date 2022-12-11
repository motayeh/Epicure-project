import { Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Hamburger = styled.div``;
export const HamburgerPhoto = styled.img`
  display: flex;
  align-items: center !important;
  justify-items: center;
  margin-left: 50%;
`;

export const UpperHamburger = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 32px;
  padding-left: 3%;
  align-content: center;
  gap: 24px;
  text-decoration: none;
  padding-bottom: 40px;
`;
export const HamburgerSplitter = styled.div`
  border: 1px solid #f2f2f2;
  border-width: fit;
  border-height: 0;
`;

export const MiddleBar = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  padding-left: 22.5%;
`;
export const TestMe = styled.div``;

export const HamburgerResturant = styled.div`
  text-decoration: none;
`;
export const ChefPage = styled.a`
  text-decoration: none;

  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 2px;

  color: #000000;
`;
export const LowerHamburger = styled.div`
  /* height: 202px; */
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 24px;
  padding-top: 33px;
  justify-content: flex-end;
  padding-left: 4%;
  font-size: 18px;
  font-weight: 100;
  line-height: 22px;
  letter-spacing: 1.92px;
  color: #000000;
`;
export const Footer1 = styled.div`
  font-weight: 100;
`;
export const Footer2 = styled.div``;
export const Footer3 = styled.div``;

export const RightBar = styled.div`
  display: flex;
  align-items: center;
`;
export const RightSearch = styled.img`
  position: relative;
  left: 14px;
`;
export const RightCart = styled.img``;
export const RightProfile = styled.img``;

export const ItemsMove = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  gap: 13px;
  width: 30%;
`;
export const XOut = styled.img`
  padding-left: 3%;
  width: fit-content;
  height: fit-content;
  padding-bottom: 24px;
  padding-top: 3%;
`;

export const XButton = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
export const LinkMe = styled.a`
  text-decoration: none;

  font-style: normal;
  font-weight: 50;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 1.92px;

  color: #000000;
`;

export const OpenedSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const SearchBar = styled.input`
  display: flex;
  width: 80%;
  height: 20px;
  margin: 0 auto;
  align-content: center;
  align-items: center;
  outline: none;
  border: none;
`;
export const SearchImgInBar = styled.img``;

export const BarSearchItems = styled.div`
  display: flex;
  flex-direction: inline;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  padding: 5px 12px;
  border-radius: 4px;
  border: 0.5px solid #000000;
`;

export const Footer = styled.div`
  position: flex;
  bottom: 3%;
  width: fit-content;
  height: fit-content;
  left: 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 0;
  gap: 40px;
  padding-left: 3%;
  padding-bottom: 24px;
  padding-top: 32px;
`;
export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 1.92px;

  color: #000000;
`;
export const StyledDialog = styled(Dialog)`
  width: 100%;
`;
export const InCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const ImageInCart = styled.img``;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const TitleOfAccount = styled.div`
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  padding-bottom: 15px;
  color: #000000;
`;

export const SubTitleOfAccount = styled.div`
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  text-align: center;
  letter-spacing: 1.97px;

  color: #000000;
`;

export const InputInfo = styled.div`
  display: flex;
  order: 1;
  padding-top: 40px;
  align-content: center;
  justify-content: flex-end;
  padding-left: 25px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  order: 1;
  width: 327px;
  height: 52px;
`;

export const EmailInput = styled.input`
  border: none;
  outline: none;
`;
export const BorderUnder = styled.div`
  display: flex;

  border: 0.5px solid #000000;
  top: auto;
  width: 327px;
  order: 2;
`;

export const PasswordInput = styled.input`
  border: none;
  outline: none;
`;

export const AccountButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
  align-items: center;
`;

export const LoginBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  gap: 10px;

  width: 206px;
  height: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  background-color: #000000;
  color: #ffffff;

  &:disabled {
    background-color: #979797;
    color: #ffffff;
    border: none;
  }
`;

export const SignUpBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  gap: 10px;

  width: 206px;
  height: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  background-color: white;
  color: #000000;
`;

export const ForgotPass = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */
  padding-top: 16px;
  text-align: center;
  letter-spacing: 1.97px;

  color: #000000;
`;

export const ORContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  padding-top: 40px;
  margin-bottom: 40px;
  width: 292px;
  height: 18px;
`;

export const Left = styled.div`
  width: 126.5px;
  height: 0px;

  border: 0.5px solid #979797;
`;
export const Mid = styled.div``;
export const Right = styled.div`
  width: 126.5px;
  height: 0px;

  border: 0.5px solid #979797;
`;
export const XOutAccount = styled.div`
  width: 100%;
  height: 46px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
`;
