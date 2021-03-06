import React, {
  Fragment,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Link } from 'react-router-dom';
import { SpinnerLinear } from '../LoadingComponents/SpinnerLinear/SpinnerLinear';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import cx from 'classnames';
import styles from './Button.module.scss';

export enum BUTTON_THEMES {
  'DEFAULT' = 'default',
  'TRANSPARENT' = 'transparent',
  'WARN' = 'warn',
}
export enum BUTTON_ALIGN {
  'LEFT' = 'left',
  'MIDDLE' = 'middle',
  'RIGHT' = 'right',
}

export type ButtonProps = {
  label?: string;
  title?: string;
  theme?: BUTTON_THEMES;
  border?: boolean;
  Icon?: FunctionComponent<SvgIconProps>;
  iconSize?: 'icon-regular' | 'icon-small' | 'icon-big';
  to?: string;
  onClick?: Function;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  height?: number;
  align?: BUTTON_ALIGN;
  style?: Object;
  className?: string;
  tabIndex?: number;
  autofocus?: boolean;
  timeToEnable?: number;
};

export function Button({
  theme = BUTTON_THEMES.DEFAULT,
  border = false,
  label = 'Button',
  title = '',
  Icon = undefined,
  iconSize = 'icon-small',
  to = '',
  onClick = function () {},
  primary = false,
  disabled = false,
  loading = false,
  height = 40,
  align = BUTTON_ALIGN.MIDDLE,
  style = {},
  className = '',
  autofocus = false,
  tabIndex = -1,
  timeToEnable = 0,
}: ButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [timerRemainingTime, setTimerRemainingTime] = useState(timeToEnable);

  useEffect(() => {
    let timerInterval: number;

    if (timeToEnable && timerRemainingTime) {
      timerInterval = window.setInterval(() => {
        setTimerRemainingTime(timerRemainingTime - 1);
        if (timerRemainingTime === 0) clearInterval(timerInterval);
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [timeToEnable, timerRemainingTime]);

  useEffect(() => {
    if (autofocus && buttonRef.current && !timerRemainingTime) {
      buttonRef.current.focus();
    }
  }, [autofocus, timerRemainingTime]);

  const remainingTimeTxt = timerRemainingTime && `(${timerRemainingTime}) `;

  const content = loading ? (
    <SpinnerLinear size={30} dark />
  ) : (
    <Fragment>
      {Icon && <Icon className={iconSize} />}
      <span>{`${remainingTimeTxt || ''}${label}`}</span>
    </Fragment>
  );

  function handleKeyPress(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  // Another test

  const btn = (
    <div
      className={cx(className, styles.btn, styles[theme], styles[align], {
        [styles.primary]: primary,
        [styles.border]: border,
        [styles.label]: !primary,
        [styles.disabled]: disabled || timerRemainingTime,
        [styles.noLabel]: label === '',
        [styles.notFocussable]: tabIndex === -1,
      })}
      style={{ ...style, height, lineHeight: `${height}px` }}
      onClick={() => onClick()}
      onKeyPress={handleKeyPress}
      title={title}
      tabIndex={timerRemainingTime ? -1 : tabIndex}
      ref={buttonRef}
    >
      {content}
    </div>
  );

  const linkButton = to ? (
    <Link to={to} data-testid="buttonLink">
      {btn}
    </Link>
  ) : null;

  return !disabled && to !== '' ? linkButton : btn;
}
