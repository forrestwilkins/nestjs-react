import Head from "next/head";
import { ReactChild } from "react";
import { ThemeProvider, Container, CssBaseline } from "@mui/material";
import muiTheme from "../../styles/theme";
import HeadContent from "./HeadContent";

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Head>
        <HeadContent />
        <title>nextjs-nestjs</title>
      </Head>

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />

        <Container maxWidth="md" sx={{ marginTop: "50px" }}>
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
