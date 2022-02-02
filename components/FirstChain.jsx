import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../styles/first.module.css";
import img from "../public/images/header.png";

const FirstChain = () => {
  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item xs={12} sm={6} md={6} lg={6} className={styles.left}>
        <div>
          <p className={styles.title}>
            First-Ever Multi Chain
            <br />
            Defi Presale LaunchPad
          </p>
          <p className={styles.subHeading}>
            Built For All Major Chains In Defi
          </p>
        </div>
        <div>
          <p className={styles.secondary}>
            With Defipad, it will be possible to issue tokens and generate
            liquidity for the promising DEFI Projects and Ecosystems
          </p>
          <div className={styles.btndiv}>
            <button className={styles.headerbtn}>Community Compaigns</button>
            <button className={styles.headerbtn}> Analysis By Graphlinq</button>
          </div>
        </div>
        <div>
          <p className={styles.secondary}>
            Our goal is straightforward. Scalability is defined by automation,
            and trust is defined by protocols.
            <strong className={styles.strong}>Say welcome to Defipad!</strong>
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <div className={styles.imgContainer}>
          <Image src={img} alt="banner" />
        </div>
      </Grid>
    </Grid>
  );
};

export default FirstChain;
