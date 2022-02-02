import { Grid } from "@mui/material";
import React from "react";
import styles from "../styles/footer.module.css";
import CustomIcon from "./CustomIcon";

const Footer = () => {
  return (
    <Grid container spacing={2} className={styles.Footer}>
      <Grid item md={3} className={styles.custom}>
        <h2
          style={{
            color: "#1F1F1F",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-Start",
          }}
        >
          DefIPAD
        </h2>
      </Grid>
      <Grid item md={3} className={styles.custom}>
        <h4 className={styles.heading}>Terms And Conditions</h4>
        <h4 className={styles.heading}>Privacy Policy</h4>
        <h4 className={styles.heading}>Documentation</h4>
        <h4 className={styles.heading}>Audits</h4>
      </Grid>
      <Grid item md={3} className={styles.custom}>
        <CustomIcon imgpath="M13.5034 18.0548C13.972 18.0548 14.3938 18.4297 14.3938 18.9452C14.3938 19.4139 14.0189 19.8357 13.5034 19.8357C13.0347 19.8357 12.6129 19.4608 12.6129 18.9452C12.6129 18.4297 13.0347 18.0548 13.5034 18.0548ZM27.2818 12.6184C26.8132 12.6184 26.3914 12.2435 26.3914 11.728C26.3914 11.2593 26.7663 10.8375 27.2818 10.8375C27.7505 10.8375 28.1722 11.2125 28.1722 11.728C28.1722 12.1966 27.7505 12.6184 27.2818 12.6184ZM27.2818 9.00979C25.7821 9.00979 24.5636 10.2283 24.5636 11.728C24.5636 12.0092 24.6105 12.2904 24.7042 12.5716L15.7529 17.3518C15.2374 16.602 14.3938 16.1802 13.5034 16.1802C12.4724 16.1802 11.535 16.7894 11.0664 17.6799L3.00555 13.462C2.16197 12.9933 1.50586 11.6343 1.59959 10.322C1.64646 9.66591 1.88078 9.15039 2.20884 8.96293C2.44317 8.82233 2.67749 8.8692 3.00555 9.00979L3.05242 9.05666C5.20822 10.1814 12.1912 13.8369 12.4724 13.9775C12.941 14.165 13.1753 14.2587 13.972 13.8838L28.4066 6.38533C28.6409 6.2916 28.8752 6.10414 28.8752 5.77608C28.8752 5.3543 28.4534 5.16683 28.4534 5.16683C27.6099 4.79191 26.3445 4.18266 25.126 3.62028C22.5015 2.40178 19.5022 0.995816 18.1899 0.292836C17.0652 -0.316414 16.1279 0.199105 15.9873 0.292836L15.6592 0.433432C9.7073 3.43282 1.83392 7.32264 1.36526 7.60383C0.568552 8.07249 0.0530333 9.05666 0.0061679 10.2752C-0.0875628 12.1966 0.89661 14.2119 2.30257 14.9148L10.8321 19.3202C11.0195 20.6324 12.1912 21.6634 13.5034 21.6634C15.0031 21.6634 16.1747 20.4918 16.2216 18.9921L25.5947 13.9307C26.0633 14.3056 26.6726 14.493 27.2818 14.493C28.7815 14.493 30 13.2745 30 11.7749C30 10.2283 28.7815 9.00979 27.2818 9.00979Z" />
        <p className={styles.text}>
          Find the latest news and <br />
          announcements from our main Defipad <br />
          Team account.
        </p>
        <CustomIcon imgpath="M24.9533 8.96518V9.05308C24.9405 11.0068 24.5043 12.7137 23.8652 13.894C23.1899 15.1414 22.4646 15.5277 21.973 15.5277C21.4814 15.5277 20.7562 15.1414 20.0808 13.894C19.4321 12.6961 18.9925 10.9556 18.9925 8.96518C18.9925 6.97472 19.4321 5.23426 20.0807 4.03629C20.756 2.78896 21.4812 2.40262 21.9727 2.40262C22.4645 2.40262 23.1897 2.78892 23.865 4.03596C24.5136 5.23373 24.9533 6.97414 24.9533 8.96518ZM8.46104 1.9165C12.4665 1.9165 15.6718 5.0951 15.6718 8.96518C15.6718 12.8352 12.4663 16.0136 8.46104 16.0136C4.45576 16.0136 1.25 12.8351 1.25 8.96518C1.25 5.09516 4.45555 1.9165 8.46104 1.9165ZM28.2745 8.96518C28.2745 7.57051 28.3645 6.29446 28.5122 5.25545C28.6599 6.29442 28.75 7.57045 28.75 8.96518C28.75 10.3598 28.6599 11.636 28.5122 12.6752C28.3645 11.6361 28.2745 10.36 28.2745 8.96518Z" />
        <p className={styles.text}>
          Actively engage and participate with the <br />
          community in our different channels.
        </p>
      </Grid>
      <Grid item md={3} className={styles.custom}>
        <CustomIcon imgpath="M13.5034 18.0548C13.972 18.0548 14.3938 18.4297 14.3938 18.9452C14.3938 19.4139 14.0189 19.8357 13.5034 19.8357C13.0347 19.8357 12.6129 19.4608 12.6129 18.9452C12.6129 18.4297 13.0347 18.0548 13.5034 18.0548ZM27.2818 12.6184C26.8132 12.6184 26.3914 12.2435 26.3914 11.728C26.3914 11.2593 26.7663 10.8375 27.2818 10.8375C27.7505 10.8375 28.1722 11.2125 28.1722 11.728C28.1722 12.1966 27.7505 12.6184 27.2818 12.6184ZM27.2818 9.00979C25.7821 9.00979 24.5636 10.2283 24.5636 11.728C24.5636 12.0092 24.6105 12.2904 24.7042 12.5716L15.7529 17.3518C15.2374 16.602 14.3938 16.1802 13.5034 16.1802C12.4724 16.1802 11.535 16.7894 11.0664 17.6799L3.00555 13.462C2.16197 12.9933 1.50586 11.6343 1.59959 10.322C1.64646 9.66591 1.88078 9.15039 2.20884 8.96293C2.44317 8.82233 2.67749 8.8692 3.00555 9.00979L3.05242 9.05666C5.20822 10.1814 12.1912 13.8369 12.4724 13.9775C12.941 14.165 13.1753 14.2587 13.972 13.8838L28.4066 6.38533C28.6409 6.2916 28.8752 6.10414 28.8752 5.77608C28.8752 5.3543 28.4534 5.16683 28.4534 5.16683C27.6099 4.79191 26.3445 4.18266 25.126 3.62028C22.5015 2.40178 19.5022 0.995816 18.1899 0.292836C17.0652 -0.316414 16.1279 0.199105 15.9873 0.292836L15.6592 0.433432C9.7073 3.43282 1.83392 7.32264 1.36526 7.60383C0.568552 8.07249 0.0530333 9.05666 0.0061679 10.2752C-0.0875628 12.1966 0.89661 14.2119 2.30257 14.9148L10.8321 19.3202C11.0195 20.6324 12.1912 21.6634 13.5034 21.6634C15.0031 21.6634 16.1747 20.4918 16.2216 18.9921L25.5947 13.9307C26.0633 14.3056 26.6726 14.493 27.2818 14.493C28.7815 14.493 30 13.2745 30 11.7749C30 10.2283 28.7815 9.00979 27.2818 9.00979Z" />
        <p className={styles.text}>
          Read our documentation and learn how <br /> to use our services.
        </p>
        <CustomIcon imgpath="M24.9533 8.96518V9.05308C24.9405 11.0068 24.5043 12.7137 23.8652 13.894C23.1899 15.1414 22.4646 15.5277 21.973 15.5277C21.4814 15.5277 20.7562 15.1414 20.0808 13.894C19.4321 12.6961 18.9925 10.9556 18.9925 8.96518C18.9925 6.97472 19.4321 5.23426 20.0807 4.03629C20.756 2.78896 21.4812 2.40262 21.9727 2.40262C22.4645 2.40262 23.1897 2.78892 23.865 4.03596C24.5136 5.23373 24.9533 6.97414 24.9533 8.96518ZM8.46104 1.9165C12.4665 1.9165 15.6718 5.0951 15.6718 8.96518C15.6718 12.8352 12.4663 16.0136 8.46104 16.0136C4.45576 16.0136 1.25 12.8351 1.25 8.96518C1.25 5.09516 4.45555 1.9165 8.46104 1.9165ZM28.2745 8.96518C28.2745 7.57051 28.3645 6.29446 28.5122 5.25545C28.6599 6.29442 28.75 7.57045 28.75 8.96518C28.75 10.3598 28.6599 11.636 28.5122 12.6752C28.3645 11.6361 28.2745 10.36 28.2745 8.96518Z" />
        <p className={styles.text}>
          Dedicated articles related to our <br /> in-house technology.
        </p>
      </Grid>
    </Grid>
  );
};

export default Footer;
