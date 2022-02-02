import { Grid, Paper, Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import styles from "../styles/Product.module.css";
import Image from "next/image";
import React from "react";
import { products } from "../pages/constants";

const Product = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 4rem",
        background:
          " radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,1) 100%, rgba(9,73,73,1) 100%)",
      }}
    >
      <Grid container spacing={2}>
        {products?.map((it, index) => (
          <React.Fragment key={index}>
            <Grid item xs={10} md={6}>
              <Image src={it.img} alt={`product ${index}`} />
            </Grid>
            <Grid item xs={12} md={6}>
              <p className={styles.heading}>{it.title}</p>
              <div>
                {it.list.map((listItem, i) => (
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    key={i}
                  >
                    {index === 1 && i > 2 ? (
                      <span
                        style={{
                          color: "green",
                          fontSize: 14,
                          fontWeight: 400,
                          marginRight: 10,
                        }}
                      >
                        upcoming :
                      </span>
                    ) : (
                      <CheckCircleOutlineIcon sx={{ color: "green" }} />
                    )}

                    <p className={styles.list}>{listItem}</p>
                  </Box>
                ))}
              </div>
              <button className={styles.headerbtn}>{it.buttonText}</button>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      <Box
        sx={{
          backgroundColor: "#141414",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <p className={styles.heading} style={{ padding: 10 }}>
              Why Investors Should{" "}
              <strong className={styles.def}> Choose Defipad ? </strong>
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <p className={styles.secondary}>
              Defipad offers a secure initial tokens issuing platform for
              trustworthy projects in the blockchain ecosystem.
              <br />
              <br />
              The selection of projects will be very limited and undergoes a
              rigorous screening process with the council members to make sure
              the project is worth the Long-term benefits of investors. So
              investors can invest their hard-earned money with very low risk
              and high reward for the long term. All the projects in the Defipad
              will be KYC verified by the Defipad team. So there won't is any
              risk involved in judging the legality of the project.
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <p className={styles.heading}>
          Want to
          <strong className={styles.def}> launch your project </strong>
          <br />
          on defipad?
        </p>
        <button className={styles.headerbtn}>Apply to Launch</button>
      </Box>
    </Paper>
  );
};

export default Product;
