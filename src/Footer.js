import { Component } from "react";
import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const IconsContainer = styled.div`
      width:25%;
  height:40px;
  display: inline;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Icons = styled.img`
  width:100%;
  display: inline;
  width: 40px;
  margin-right: 15px;
`;
const TextMenuContainer = styled.ul`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:700px) {
        display: none;
    }
`;
const TextMenu = styled.li`
  width:25%;
  height:40px;
  display: inline;
  padding: 0px 40px 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  :hover {
    border: 3px solid #373737;
  }
`;
const InformationContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #446061;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8f8378;
  font-size: 10px;
`;
const InformationP = styled.p`
    flex-wrap: wrap;
    width:100%;
`

export default class FooterApp extends Component {
  render() {
    return (
      <>
        <Footer>
          <IconsContainer>
            <Icons
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=be118639-10a8-4930-a611-631b7ea07a0e&api_key=CometServer1&access_token=1656125739_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_d994fdb2dabea996d5c43b98f33e7879bf57478d"
              alt=""
            />
            <Icons
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=a2797177-e28c-4b17-8141-8689e233524e&api_key=CometServer1&access_token=1656125739_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_d994fdb2dabea996d5c43b98f33e7879bf57478d"
              alt=""
            />
            <Icons
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=f3e5e452-9a6f-47dd-8e06-22152aa125ef&api_key=CometServer1&access_token=1656125739_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_d994fdb2dabea996d5c43b98f33e7879bf57478d"
              alt=""
            />
            <Icons
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=d5ec94b2-d459-45cb-85d1-6df6740d6b87&api_key=CometServer1&access_token=1656125739_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_d994fdb2dabea996d5c43b98f33e7879bf57478d"
              alt=""
            />
          </IconsContainer>
          <nav>
            <TextMenuContainer>
              <TextMenu>About</TextMenu>
              <TextMenu>Recipes</TextMenu>
              <TextMenu>Subscribe</TextMenu>
            </TextMenuContainer>
          </nav>
        </Footer>
        <InformationContainer>
          <InformationP>
            Layout produzido por Vai na Web para fins exclusivamente
            educacionais. Referência:
            https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
          </InformationP>
        </InformationContainer>
      </>
    );
  }
}
