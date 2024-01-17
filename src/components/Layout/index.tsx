import React, { ReactNode, FC } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Header from "../Header";
import Footer from "../Footer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type LayoutProps = {
  children: ReactNode;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
}));

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{ minHeight: "100vh", flexDirection: "column" }}
      >
        <Grid item xs={12}>
          <Item>
            <Header />
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Item style={{ minHeight: "100%", width: "100%" }}>{children}</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
