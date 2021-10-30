// Internal modules
import Item from '@/components/item';
import List from '@/components/list';
import { StyledNav } from '@/components/navbar/style';
import routes from '@/utils/routes';

const Navbar = () => (
  <StyledNav>
    <List>
      {
        // Iterate each route from routes
        routes.map(route => (
          <Item key={route.id}>{route.name}</Item>
        ))
      }
    </List>
  </StyledNav>
);

export default Navbar;
