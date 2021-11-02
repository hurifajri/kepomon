// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { listStyle } from '@/components/list/style';

const List = forwardRef((props, ref) => {
  const { children, css, ...rest } = props;

  return (
    <ul ref={ref} css={[listStyle, css]} {...rest}>
      {children}
    </ul>
  );
});

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default List;
