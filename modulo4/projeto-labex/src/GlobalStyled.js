import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  background: #1c1c1c;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
html, body{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
`;