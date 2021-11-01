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

const Dialog = ({ children, handleClose, open }) => {
  return (
    <div css={[backdropStyle, open && openStyle]}>
      <Card
        className="dialog"
        css={dialogStyle}
        cssContent={dialogContentStyle}
        withBorder
        withShadow
      >
        {children}
        <button type="button" onClick={handleClose} css={buttonStyle}>
          <Close />
        </button>
      </Card>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Dialog;
