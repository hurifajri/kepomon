/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import Card from '@/components/card';
import Close from '@/components/icons/close';
import {
  backdropStyle,
  buttonStyle,
  dialogContentStyle,
  dialogStyle,
  openStyle,
} from '@/components/dialog/style';
import Portal from '@/components/portal';

const Dialog = ({ children, onClose, open }) => (
  <Portal id="modal">
    <div css={[backdropStyle, open && openStyle]}>
      <Card
        className="dialog"
        css={dialogStyle}
        cssContent={dialogContentStyle}
        withBorder
        withShadow
      >
        {children}
        <button type="button" onClick={onClose} css={buttonStyle}>
          <Close />
        </button>
      </Card>
    </div>
  </Portal>
);

Dialog.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Dialog;
