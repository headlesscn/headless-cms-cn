import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Logo from '../images/hcclogo.svg'

export default () => (
  <header>
    <div class="container site-header-container">
      <Link to="/" className={"no-decoration site-header-logo-container"}>
        <h1>
          <img src={Logo} class="global-site-logo" alt="Logo" width="64" height="64" />
          <span class="global-site-title-s1">Headless</span> 
          <span class="global-site-title-s2">CMS</span>
          <span class="global-site-title-s3">无头</span>
          <span class="global-site-title-s4">中文站</span>
        </h1>
      </Link>
      <nav role="navigation">
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/">首页</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">最新文章</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
