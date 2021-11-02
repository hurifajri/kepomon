// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import {
  cardBorderStyle,
  cardContentStyle,
  cardShadowStyle,
  cardStyle,
} from '@/components/card/style';

const Card = forwardRef((props, ref) => {
  const { children, cssContent, css, withBorder, withShadow, ...rest } = props;

  return (
    <div
      className="card"
      data-testid="card"
      ref={ref}
      css={[
        cardStyle,
        withBorder && cardBorderStyle,
        withShadow && cardShadowStyle,
        css,
      ]}
      {...rest}
    >
      <div
        className="card-content"
        css={[cardContentStyle, cssContent]}
        suppressHydrationWarning
      >
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
