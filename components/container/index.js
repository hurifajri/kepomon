/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { StyledContainer } from '@/components/container/style';

const Container = forwardRef((props, ref) => {
  const { children, css, ...rest } = props;

  return (
    <StyledContainer ref={ref} css={css} {...rest}>
      {children}
    </StyledContainer>
  );
});

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Container;
