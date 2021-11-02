// External modules
import Image from 'next/image';

// Internal modules
import Navbar from '@/components/navbar';
import { headerStyle } from '@/components/topbar/style';
import logo from '@/public/logo.png';

const Topbar = () => (
  <header data-testid="topbar" css={headerStyle}>
    <Image src={logo} alt="Kepomon logo" />
    <Navbar />
  </header>
);

export default Topbar;
