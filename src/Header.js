import { Component } from "react";
import styled from "styled-components";

const Header = styled.div`
  width: calc(100% - 40px);
  height:150vh;
  margin:20px;
  padding:25px;
  background: url("https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=8444393a-5d93-4997-8ad0-0d450a8011e0&api_key=CometServer1&access_token=1659157200_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_520787adb39eadc394a98c0d5a0cf5dbe76c2a6a") no-repeat;
  background-size:cover;
  display: flex;
  justify-content:space-between;
  align-items:flex-start;
  flex-wrap: wrap;
  color:#373737;
  margin-bottom:100px;
  @media (max-width: 700px)  {
    width: 100vw;
    height:150vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    background: url("https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=e0bf267d-1d9d-43c5-8a19-ebe90993d608&api_key=CometServer1&access_token=1659157200_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_520787adb39eadc394a98c0d5a0cf5dbe76c2a6a");
    background-size:cover;
  }
`
const Logo = styled.img`
  width:68px;
  margin-left:10px;
  @media (max-width: 700px) {
  display:none;
  }
`;
const TextMenuContainer = styled.ul`
  margin-top:15px;
  width:500px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px)  {
   display :none ;
  }
`
const TextMenu = styled.li`
  display:inline;
  width:25%;
  height:40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0px 40px 0px 40px;
  text-transform: uppercase;
  :hover{
    border:3px solid #373737;
  
  }
`
const Title = styled.h1`
  width:100%;
  color:#373737;
  font-size:8vw;
  text-align: center;
  margin-top:60px;
  @media (max-width: 700px) {
  color:#373737;
  font-size:12vw;
  }
`
export default class HeaderApp extends Component {
  render() {
    return (
      <Header>
        <Logo
          src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=96b0b497-674d-472a-89e9-aa680a0712af&api_key=CometServer1&access_token=1659157200_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_520787adb39eadc394a98c0d5a0cf5dbe76c2a6a"
          alt=""
        />
        <nav>
          <TextMenuContainer>
            <TextMenu>About</TextMenu>
            <TextMenu>Recipes</TextMenu>
            <TextMenu>Subscribe</TextMenu>
          </TextMenuContainer>
        </nav>
        <Title>RECIPES</Title> 
      </Header>
    );
  }
}
