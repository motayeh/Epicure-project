import { Footer, LinkStyle } from '../Style';

const Foot = () => {
  return (
    <>
      <Footer>
        <LinkStyle to="/">Contact US</LinkStyle>
        <LinkStyle to="/contact">Terms Of Use</LinkStyle>
        <LinkStyle to="/Privacy">Privacy Policy</LinkStyle>
      </Footer>
    </>
  );
};
export default Foot;
