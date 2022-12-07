import {
  AboutLogo,
  Aboutus,
  AboutUsDescreption,
  AboutUsText,
  AboutUsTitle,
  AppleStore,
  GoogleStore,
  Stores,
} from '../HomeStyle';
import AboutLogos from '../../../assets/AboutLogos.svg';
import GoogleLogo from '../../../assets/GoogleLogo.svg';
import AppleLogo from '../../../assets/AppleLogo.svg';

const AboutUs = () => {
  return (
    <Aboutus>
      <AboutLogo src={AboutLogos} alt="" />
      <Stores>
        <GoogleStore src={GoogleLogo} alt="" />
        <AppleStore src={AppleLogo} alt="" />
      </Stores>
      <AboutUsDescreption>
        <AboutUsTitle>about us:</AboutUsTitle>
        <AboutUsText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum
          bibendum no eu ipsum. Cras porta malesuada eros.
        </AboutUsText>
      </AboutUsDescreption>
    </Aboutus>
  );
};
export default AboutUs;
