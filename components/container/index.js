// External modules
import PropTypes from 'prop-types';

// Internal modules
import { StyledContainer } from '@/components/container/style';

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Container;
