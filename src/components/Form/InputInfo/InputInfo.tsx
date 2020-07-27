import React from 'react'
import cx from 'classnames'
import styles from './InputInfo.module.scss'

type Props = {
  message?: string
}

export function InputInfo({ message = '' }: Props) {
  return (
    <div className={cx(styles.infoMessage, { [styles.show]: message !== '' })}>
      {message && `(${message})`}
    </div>
  )
}