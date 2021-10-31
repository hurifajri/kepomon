/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import Container from '@/components/container';
import { baseLayoutStyle, baseMainStyle } from '@/components/layout/style';
import Topbar from '@/components/topbar';

const Layout = ({ children }) => (
  <div className="layout" css={baseLayoutStyle}>
    <Container>
      <Topbar />
      <main css={baseMainStyle}>{children}</main>
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Layout;
