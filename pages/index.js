import Head from "next/head";
import Image from "next/image";
import FirstChain from "../components/FirstChain";
import NewProjects from "../components/NewProjects";
import Product from "../components/Product";
import TopBlockChain from "../components/TopBlockChain";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Assignment</title>
        <meta name="description" content="my assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstChain />
      <TopBlockChain />
      <NewProjects />
      <Product />
    </div>
  );
}
