import Head from "next/head";
import { Container } from "@material-ui/core";

function DeadByDatabase({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default DeadByDatabase;
