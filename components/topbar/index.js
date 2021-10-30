// External modules
import Image from 'next/image';

// Internal modules
import Navbar from '@/components/navbar';
import { StyledHeader } from '@/components/topbar/style';
import logo from '@/public/logo.png';

const Topbar = () => (
  <StyledHeader>
    <Image src={logo} alt="Kepomon logo" />
    <Navbar />
  </StyledHeader>
);

export default Topbar;
