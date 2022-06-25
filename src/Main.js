import { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  color: #373737;
`;
const BoxsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  @media (max-width: 700px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;
const Title = styled.h2`
  padding: 15px;
  text-transform: uppercase;

`;
const Line = styled.hr`
  width: 104px;
  height: 5px;
  background-color: #373737;
`;
const Box1 = styled.div`
  width: 25vw;
  height: 500px;
  text-align: center;
  box-shadow: 0px 7px 6px #00000029;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const Box2 = styled.div`
  width: 25vw;
  height: 500px;
  text-align: center;
  box-shadow: 0px 7px 6px #00000029;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const Box3 = styled.div`
  width: 25vw;
  height: 500px;
  text-align: center;
  box-shadow: 0px 7px 6px #00000029;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  flex-direction: column;
`;
const BoxsImages = styled.img`
  max-width: 25vw;
`;
const BoxsLines = styled.hr`
  background-color:#373737;
  width:30px;
  height:4px;
  margin-bottom: 10px;
`
const TextsBoxs = styled.h2``;
const Titles = styled.div`
  margin-top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AboutContainer = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px)  {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }
`;
const AboutBox = styled.div`
  width: 50vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AboutImage = styled.img`
  width: 50vw;
  height: 100vh;
  @media (max-width: 700px)  {
   width:100%;
   height:400px; 
  }
`;
const AboutTitle = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
`;
const AboutLine = styled.hr`
  width: 45px;
  height: 5px;
  background-color: #373737;
  margin-top: 10px;
`;
const AboutP = styled.p`
  font-size: 12px;
  width: 350px;
  margin-top: 70px;
  text-align: left;
`;
const SubscribeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 400px;
  background-color: #dfe4de;
`;
const SubscribeTitle = styled.h2`
  text-transform: uppercase;
`;
const SubscribeP = styled.p`
  margin-top: 8px;
`;
const SubscribeInput = styled.input`
  border: none;
  width: 450px;
  height: 50px;
  padding: 30px;
  margin: 30px;
`;
const SubscribeButton = styled.button`
  background: none;
  width: 120px;
  height: 40px;
  border: 3px solid #373737;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  color: #373737;

  :hover {
    transition: 0.5s linear;
    background-color: #7c7673;
  }
`;
export default class MainApp extends Component {
  render() {
    return (
      <Main>
        <TitleContainer>
          <Title>Latest Recipes</Title>
          <Line></Line>
        </TitleContainer>
        <BoxsContainer>
          <Box1>
            <BoxsImages
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=3f630898-5430-4084-a530-83df642c4b76&api_key=CometServer1&access_token=1656037450_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_f5c751301ac83bb2180d74d25ad16840176e671d"
              alt=""
            />
            <Titles>
              <BoxsLines></BoxsLines>
              <TextsBoxs>Red Velvet Cake</TextsBoxs>
            </Titles>
          </Box1>
          <Box2>
            <BoxsImages
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=6940ecee-9497-47c7-bc32-30dc58ecb408&api_key=CometServer1&access_token=1656037450_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_f5c751301ac83bb2180d74d25ad16840176e671d"
              alt=""
            />
            <Titles>
            <BoxsLines></BoxsLines>
              <TextsBoxs>Margherita Pizza</TextsBoxs>
            </Titles>
          </Box2>
          <Box3>
            <BoxsImages
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=bf663e2d-434a-4d4d-8185-a9a0e5dce49d&api_key=CometServer1&access_token=1656037450_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_f5c751301ac83bb2180d74d25ad16840176e671d"
              alt=""
            />
            <Titles>
            <BoxsLines></BoxsLines>
              <TextsBoxs>Peanut Smoothie</TextsBoxs>
            </Titles>
          </Box3>
        </BoxsContainer>
        <AboutContainer>
          <AboutImage
            src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=f27a09e5-c3d7-4466-924a-c97490798175&api_key=CometServer1&access_token=1656080842_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_96841ae20e67e3e670e60fc3c8d328c3b373fae2"
            alt=""
          />
          <AboutBox>
            <AboutTitle>About</AboutTitle>
            <AboutLine></AboutLine>
            <AboutP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
              tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
              dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur
              lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec
              mollis sagittis, enim risus euismod nisi, quis rutrum quam augue
              id mauris. Pellentesque mattis hendrerit semper. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien
              facilisis aliquam.
            </AboutP>
          </AboutBox>
        </AboutContainer>
        <SubscribeContainer>
          <SubscribeTitle>Subscribe</SubscribeTitle>
          <SubscribeP>Sign up for newsletter</SubscribeP>
          <SubscribeInput placeholder="Your Email" type="email" />
          <SubscribeButton type="">S u b m i t</SubscribeButton>
        </SubscribeContainer>
      </Main>
    );
  }
}
