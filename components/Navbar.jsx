import Link from "next/link";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import SvgIcon from "@mui/material/SvgIcon";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.firstItem}>
          <Link href="/">
            <a className={styles.navlogo}>
              <p className={styles.def}>Def</p>
              <span className={styles.pad}>IPAD</span>
            </a>
          </Link>
          <div className={styles.icons}>
            <p className={styles.navitem}>
              <TwitterIcon sx={{ color: "white", cursor: "pointer" }} />
            </p>
            <p className={styles.navitem}>
              <SvgIcon>
                {
                  <path
                    d={
                      "M12.6494 5.927L8.73245 9.462C8.63961 9.54585 8.5666 9.64932 8.51871 9.76489C8.47082 9.88046 8.44926 10.0052 8.45558 10.1302C8.4619 10.2551 8.49594 10.3771 8.55525 10.4872C8.61455 10.5974 8.69763 10.6929 8.79845 10.767L14.1764 14.74C14.2982 14.83 14.4406 14.888 14.5906 14.9087C14.7406 14.9294 14.8933 14.912 15.0349 14.8583C15.1764 14.8045 15.3022 14.7161 15.4007 14.6011C15.4992 14.4861 15.5672 14.3481 15.5984 14.2L18.2394 1.753C18.2684 1.61647 18.26 1.47465 18.2151 1.34252C18.1701 1.21038 18.0903 1.09284 17.9841 1.0023C17.8779 0.911752 17.7492 0.851571 17.6116 0.82811C17.474 0.804648 17.3327 0.818776 17.2024 0.869002L1.68745 6.853C1.58716 6.89134 1.50133 6.96001 1.44192 7.04944C1.38251 7.13886 1.35247 7.2446 1.35599 7.35191C1.35951 7.45921 1.39642 7.56275 1.46157 7.64809C1.52672 7.73343 1.61686 7.79632 1.71945 7.828L5.79645 9.1"
                    }
                    fill="white"
                  />
                }
              </SvgIcon>{" "}
            </p>

            <p className={styles.navitem}>
              <SvgIcon>
                {
                  <path
                    d={
                      "M5.62207 0C8.42582 0 10.6985 2.22935 10.6985 4.97921C10.6985 7.72906 8.42565 9.95825 5.62207 9.95825C2.81849 9.95825 0.545441 7.72906 0.545441 4.97921C0.545441 2.22935 2.81832 0 5.62207 0ZM13.7291 0.291669C15.131 0.291669 16.2674 2.39014 16.2674 4.97921H16.2676C16.2676 7.5676 15.1311 9.66674 13.7293 9.66674C12.3274 9.66674 11.1909 7.5676 11.1909 4.97921C11.1909 2.39081 12.3272 0.291669 13.7291 0.291669ZM17.6527 0.779912C18.1456 0.779912 18.5454 2.65997 18.5454 4.97921C18.5454 7.29777 18.1458 9.1785 17.6527 9.1785C17.1596 9.1785 16.7602 7.29828 16.7602 4.97921C16.7602 2.66014 17.1598 0.779912 17.6527 0.779912Z"
                    }
                    fill="white"
                  />
                }
              </SvgIcon>{" "}
            </p>
            <p className={styles.navitem}>
              <SvgIcon>
                {
                  <path
                    d={
                      "M5.62207 0C8.42582 0 10.6985 2.22935 10.6985 4.97921C10.6985 7.72906 8.42565 9.95825 5.62207 9.95825C2.81849 9.95825 0.545441 7.72906 0.545441 4.97921C0.545441 2.22935 2.81832 0 5.62207 0ZM13.7291 0.291669C15.131 0.291669 16.2674 2.39014 16.2674 4.97921H16.2676C16.2676 7.5676 15.1311 9.66674 13.7293 9.66674C12.3274 9.66674 11.1909 7.5676 11.1909 4.97921C11.1909 2.39081 12.3272 0.291669 13.7291 0.291669ZM17.6527 0.779912C18.1456 0.779912 18.5454 2.65997 18.5454 4.97921C18.5454 7.29777 18.1458 9.1785 17.6527 9.1785C17.1596 9.1785 16.7602 7.29828 16.7602 4.97921C16.7602 2.66014 17.1598 0.779912 17.6527 0.779912Z"
                    }
                    fill="white"
                  />
                }
              </SvgIcon>{" "}
            </p>
          </div>
        </div>

        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Services
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/token">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Token
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/media">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Media Kit
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/about">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                About Us
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <button className={styles.launchbtn}>Launch App</button>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={openMenu}>
          <MenuIcon sx={{ color: "white", backgroundColor: "black" }} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
