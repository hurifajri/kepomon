// External modules
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// Internal modules
import Card from '@/components/card';
import Close from '@/components/icons/close';
import If from '@/components/if';
import {
  backdropStyle,
  buttonCloseStyle,
  buttonLabelStyle,
  buttonsStyle,
  buttonStyle,
  cardContentStyle,
  cardStyle,
  openStyle,
} from '@/components/dialog/style';
import Portal from '@/components/portal';

const Dialog = ({
  children,
  onCancel,
  cancelText,
  onConfirm,
  confirmText,
  open,
  withButtons,
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <If condition={mounted && typeof window !== 'undefined'}>
      <Portal id="dialog">
        <div css={[backdropStyle, open && openStyle]}>
          <Card
            className="dialog"
            css={cardStyle}
            cssContent={cardContentStyle}
            withBorder
            withShadow
          >
            <button type="button" onClick={onCancel} css={buttonCloseStyle}>
              <Close />
            </button>
            {children}
            <If condition={withButtons}>
              <section css={buttonsStyle}>
                <button css={buttonStyle} onClick={onCancel}>
                  <span css={buttonLabelStyle}>{cancelText}</span>
                </button>
                <button css={buttonStyle}>
                  <span css={buttonLabelStyle} onClick={onConfirm}>
                    {confirmText}
                  </span>
                </button>
              </section>
            </If>
          </Card>
        </div>
      </Portal>
    </If>
  );
};

Dialog.defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  withButtons: true,
};

Dialog.propTypes = {
  cancelText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  confirmText: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  withButtons: PropTypes.oneOf([true, false, undefined]),
};

export default Dialog;
