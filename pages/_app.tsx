import type { AppProps } from "next/app";
import { wrapper } from "../redux/store/store";

import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  
    & * {
      box-sizing: border-box;
    }
  }
  p {
    margin:0
  }
  }
`;

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 0 50px;
`;

const MainContent = styled.div`
  min-height: 100vh;
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <PageLayout>
    <GlobalStyle />
    <Header title="Blog" />
    <MainContent>
      <Component {...pageProps} />
    </MainContent>
    <Footer text="FOOTER" />
  </PageLayout>
);

export default wrapper.withRedux(MyApp);
