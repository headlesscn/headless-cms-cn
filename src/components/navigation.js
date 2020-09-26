import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <header>
    <h1>Headless CMS 无头中文站</h1>
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
  </header>
)
