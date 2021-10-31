/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { StyledContainer } from '@/components/container/style';

const Container = forwardRef((props, ref) => {
  const { children, style, ...rest } = props;

  return (
    <StyledContainer ref={ref} css={style} {...rest}>
      {children}
    </StyledContainer>
  );
});

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Container;
