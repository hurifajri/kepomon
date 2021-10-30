// External modules
import Image from 'next/image';

// Internal modules
import { StyledHeader } from '@/components/topbar/style';
import logo from '@/public/logo.png';

const Topbar = () => (
  <StyledHeader>
    <Image src={logo} alt="Kepomon logo" />
  </StyledHeader>
);

export default Topbar;
