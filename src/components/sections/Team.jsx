import styled from "styled-components";
import ConfettiComponent from "../Confetti";

import img2 from "../../assets/Nfts/bighead-1.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";

const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img7} name="Samarth Mishra" position="Project Head & Developer" />
        <MemberComponent img={img2} name="Kartavya Singh" position="App Developer" />
        <MemberComponent img={img4} name="Kushika Agarwal" position="Developer" />
        <MemberComponent img={img10} name="Prabhavi Tripathi" position="UI/UX Tester" />
        {/* <MemberComponent img={img5} name="Deathstroke" position="Artist" /> */}
        {/* <MemberComponent
          img={img6}
          name="Lazy Kong"
          position="Social Media Manager"
        />
        <MemberComponent
          img={img7}
          name="Cyber Punk"
          position="Blockchain Specialist"
        />
        <MemberComponent img={img8} name="Monk" position="Web3 Developer" />
        <MemberComponent img={img9} name="Banana" position="Graphic Designer" /> */}
      </Container>
    </Section>
  );
};

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  backdrop-filter: blur(4px);
  z-index: 5;

  &:hover {
    img {
      transform: translateY(-1rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  padding: 1rem;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  font-weight: 400;
`;

export default Team;