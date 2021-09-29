import React from "react";
import 'antd/dist/antd.css';
import styles from './app.module.scss';
import NavMenu from './Components/NavMenu/NavMenu';
import HomePageBackground from './Components/PageBackgrounds/HomePageBackground/HomePageBackground';
import { Route } from "react-router";
import MainHeader from "./Components/Header/MainHeader";
import Showcase from "./Components/Showcase/Showcase";

function App() {
  return (
    <>
      <Route exact path='/'>
        <HomePageBackground />
      </Route>
      <div className={styles.appWrapper}>
        <Route path='/:params?'>
          <MainHeader />
        </Route>
        <div className={styles.navSection} />
        <Route path='/:params?'>
          <NavMenu />
        </Route>
        <main className={styles.contentWrapper}>
          <Route path='/:params?'>
            <Showcase />
          </Route>
        </main>
      </div>
    </>
  );
}

export default App;
