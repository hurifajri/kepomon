// External modules
import PropTypes from 'prop-types';

// Internal modules
import Container from '@/components/container';
import { StyledLayout } from '@/components/layout/style';
import Topbar from '@/components/topbar';

const Layout = ({ children }) => (
  <StyledLayout>
    <Container>
      <Topbar />
      <main>{children}</main>
    </Container>
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Layout;
