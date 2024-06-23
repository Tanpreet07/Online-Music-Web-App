"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Leftsidebar from "../../components/Leftsidebar";
import Mainsection from "../../components/Mainsection";
import { useState } from "react";

export default function Home() {
  const [showsidebar, setshowsidebar] = useState(false);
  return (
    <>
    <div className={styles.container}>
      <div className={styles.inner1_container}>
        <Leftsidebar showsidebar={showsidebar}/>       
        <div className={styles.box1}>
          <Navbar showsidebar={showsidebar} setshowsidebar={setshowsidebar}/>
          <Mainsection showsidebar={showsidebar} setshowsidebar={setshowsidebar}/>
        </div>
      </div>
    </div>
    
    </>
  );
}
