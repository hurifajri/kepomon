/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { StyledItem } from '@/components/item/style';

const Item = forwardRef((props, ref) => {
  const { children, style, ...rest } = props;

  return (
    <StyledItem ref={ref} css={style} {...rest}>
      {children}
    </StyledItem>
  );
});

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  style: PropTypes.string,
};

export default Item;
