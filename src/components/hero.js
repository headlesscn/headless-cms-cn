import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div class="container container-w100">
      <Img
        className={styles.heroImage}
        alt={data.name}
        fluid={data.heroImage.fluid}
      />
    </div>
  </div>
)
