/** @jsxImportSource @emotion/react */

// External modules
import Image from 'next/image';

// Internal modules
import Navbar from '@/components/navbar';
import { baseStyle } from '@/components/topbar/style';
import logo from '@/public/logo.png';

const Topbar = () => (
  <header css={baseStyle}>
    <Image src={logo} alt="Kepomon logo" />
    <Navbar />
  </header>
);

export default Topbar;
