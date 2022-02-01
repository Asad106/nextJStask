import { Grid, Paper } from "@mui/material";
import React from "react";
import styles from "../styles/Newproject.module.css";
import imageTop from "../public/images/imageTop.png";
import imageBottom from "../public/images/imageBottom.png";
import Image from "next/image";

const NewProjects = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#141414",
      }}
    >
      <p className={styles.heading}>
        Effortless <strong className={styles.def}>Additional Benefits </strong>
        <br /> For Our New Projects
      </p>
      <Grid container spacing={2} className={styles.container}>
        <Grid item xs={12} md={6}>
          <Image src={imageTop} alt="top" />
        </Grid>
        <Grid item xs={12} md={6}>
          <p className={styles.heading}>
            Inbuilt <strong className={styles.def}>Token Vesting </strong>{" "}
            Feature
          </p>
          <p className={styles.secondary}>
            Project owners and early adopters may both take use of vesting
            possibilities. This independent service is an extension of the
            in-house ILO Platform. The vesting tokens in wallets is represented
            in a separate UI, which makes it simpler for anybody to find, and is
            particularly helpful for new people.
          </p>
        </Grid>

        <Grid item xs={12} md={6}>
          <p className={styles.heading}>
            Instant <strong className={styles.def}> Liquidity Lockers </strong>
          </p>
          <p className={styles.secondary}>
            We're happy to help out our project developers by providing them
            with our security feature, which gives them the ability to lock
            their liquidity provider tokens. The ability to limit liquidity is
            becoming more common in the DeFi space, and we are pleased to
            reaffirm that Defipad was one of the first companies to use this
            strategy.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={imageBottom} alt="bottom" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NewProjects;
