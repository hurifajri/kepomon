/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import {
  cardBorderStyle,
  cardShadowStyle,
  cardStyle,
} from '@/components/card/style';

const Card = forwardRef((props, ref) => {
  const { children, cssContent, css, withBorder, withShadow, ...rest } = props;

  return (
    <div
      className="card"
      ref={ref}
      css={[
        cardStyle,
        withBorder && cardBorderStyle,
        withShadow && cardShadowStyle,
        css,
      ]}
      {...rest}
    >
      <div className="card-content" css={cssContent}>
        {children}
      </div>
    </div>
  );
});

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cssContent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  withBorder: PropTypes.oneOf([true, false, undefined]),
  withShadow: PropTypes.oneOf([true, false, undefined]),
};

export default Card;
