// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { StyledList } from '@/components/list/style';

const List = forwardRef((props, ref) => {
  const { children, style, ...rest } = props;

  return (
    <StyledList ref={ref} className={style} {...rest}>
      {children}
    </StyledList>
  );
});

List.defaultProps = {
  style: '',
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  style: PropTypes.string,
};

export default List;
