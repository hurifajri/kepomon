/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { baseStyle } from '@/components/item/style';

const Item = forwardRef((props, ref) => {
  const { children, css, ...rest } = props;

  return (
    <li ref={ref} css={[baseStyle, css]} {...rest}>
      {children}
    </li>
  );
});

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Item;
