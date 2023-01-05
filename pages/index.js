import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from "../components/hero/hero";
import Feature from "../components/feature/feature";
import Info from "../components/info/info";
import Register from "../components/Register";
import Footer from "../components/footer/footer";

export default function Home() {
    return (
        <div className={`w-full h-screen`}>
            <Hero/>
            <Feature/>
            <Info/>
            <Register/>
            <Footer/>
          {/*  <Feature/>

            <Register/>*/}
        </div>
    )
}
