/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { baseStyle } from '@/components/container/style';

const Container = forwardRef((props, ref) => {
  const { children, css, ...rest } = props;

  return (
    <div className="container" ref={ref} css={[baseStyle, css]} {...rest}>
      {children}
    </div>
  );
});

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Container;
