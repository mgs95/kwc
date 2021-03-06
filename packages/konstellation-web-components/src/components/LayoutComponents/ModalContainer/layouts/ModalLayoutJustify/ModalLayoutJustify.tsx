import React, { Fragment } from 'react';

import { TextInput } from '../../../../Form/TextInput/TextInput';
import cx from 'classnames';
import styles from './ModalLayoutJustify.module.scss';

export type ModalLayoutJustifyProps = {
  onUpdate: (value: string) => void;
  submit: () => void;
  error: string;
  className?: string;
  label?: string;
};
export function ModalLayoutJustify({
  onUpdate,
  submit,
  error,
  label = 'why are you doing that?',
  className = '',
}: ModalLayoutJustifyProps) {
  return (
    <Fragment>
      <div className={cx(className, styles.comment)}>
        <TextInput
          label={label}
          error={error}
          onChange={onUpdate}
          limits={{
            minWidth: 338,
            maxWidth: 338,
            minHeight: 105,
          }}
          onEnterKeyPress={submit}
          whiteColor
          showClearButton
          textArea
          autoFocus
        />
      </div>
    </Fragment>
  );
}
