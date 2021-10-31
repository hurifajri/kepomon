/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { StyledCard } from '@/components/card/style';

const Card = forwardRef((props, ref) => {
  const { children, cssContent, css, ...rest } = props;

  return (
    <StyledCard ref={ref} css={css} {...rest}>
      <div css={cssContent}>{children}</div>
    </StyledCard>
  );
});

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cssContent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Card;
