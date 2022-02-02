import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { tokens, topChains } from "../pages/constants";
import styles from "../styles/Top.module.css";
import image from "../public/images/image.png";

const TopBlockChain = () => {
  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item md={12} sm={12}>
        <p className={styles.heading}>
          Support All
          <br />
          <span className={styles.def}>Top Blockchains</span>
        </p>
      </Grid>
      {topChains.map((it, i) => {
        return (
          <Grid key={i} item xs={8} md={3}>
            <Image src={it.img} />
            <p className={styles.title}>{it.title}</p>
          </Grid>
        );
      })}
      <Grid item md={12}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Grid item xs={12} md={6} sm={6}>
            <p className={styles.heading1}>
              DEFIPAD
              <span className={styles.def} style={{ paddingLeft: 2 }}>
                Ecosystem
              </span>
            </p>
            <p className={styles.title}>The Defi Token Presale Pad</p>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {tokens?.map((it, i) => (
                <Grid item xs={12} md={6} sm={6} key={i}>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      md={12}
                      sm={12}
                      className={styles.tokimg}
                    >
                      <Image src={it.img} alt="tokens" />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <p className={styles.tokens}>{it.desc}</p>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image alt="complex" src={image} alt="token" />
          </Grid>
        </Grid>
      </Grid>
      //{" "}
    </Grid>
  );
};

export default TopBlockChain;
