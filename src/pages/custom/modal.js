import Head from "next/head";
import { useState } from "react";
import styles from "../styles/home.module.css";
import Header from "../components/shared/header/header";
import Modal from "../components/shared/modal/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <a href="https://facebook.com">Facebook</a>
        This is testing modal
        <a href="https://google.com">Google</a>
      </Modal>
      <button onClick={handleOpen}>Open Modal</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      This is the page Content
      <a href="https://google.com">Next Expecting Link</a>
    </div>
  );
}
