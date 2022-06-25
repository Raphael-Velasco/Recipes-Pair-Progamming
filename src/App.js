import { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style:none;

  }
`;
export default  class Recipes extends Component{
  render(){
    return(
      <>  
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}
