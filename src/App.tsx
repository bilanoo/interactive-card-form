import React from "react";
import logo from "./logo.svg";
import "./App.css";
import backgroundColor from "../src/images/bg-main-desktop.png";
import CreditCard from "./CreditCard";
import { Grid } from "@mui/material";
import FormController from "./FormController";

const cardBackground = {
  backgroundImage: `url(${backgroundColor})`,
  height: "100vh",
  backgroundRepeat: "no-repeat", // Add this property to prevent image repetition
  backgroundSize: "cover", // Adjust the background size as needed
};

const App = () => {
  return (
    <div className="App">
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={6} style={cardBackground} className="cards-background">
          <CreditCard />
        </Grid>
        <Grid item xs={6}>
          <FormController />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
