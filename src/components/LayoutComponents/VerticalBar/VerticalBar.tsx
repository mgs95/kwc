import React, { FunctionComponent, ReactElement } from 'react'

import styles from './VerticalBar.module.scss'

type Props = {
  children: ReactElement | ReactElement[]
}

export const VerticalBar: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)