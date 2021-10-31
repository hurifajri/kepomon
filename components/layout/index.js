/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import Container from '@/components/container';
import { layoutStyle, mainStyle } from '@/components/layout/style';
import Topbar from '@/components/topbar';

const Layout = ({ children }) => (
  <div className="layout" css={layoutStyle}>
    <Container>
      <Topbar />
      <main css={mainStyle}>{children}</main>
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Layout;
