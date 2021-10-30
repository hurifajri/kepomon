// External modules
import Link from 'next/link';

// Internal modules
import Card from '@/components/card';
import Item from '@/components/item';
import List from '@/components/list';
import {
  cardContentStyle,
  StyledIcon,
  StyledNav,
  StyledRoute,
} from '@/components/navbar/style';
import routes from '@/utils/routes';

const Navbar = () => (
  <StyledNav>
    <List>
      {
        // Iterate each route from routes
        routes.map(route => (
          <Item key={route.id}>
            <Link href={route.path} passHref={true}>
              <a>
                <Card border={2} contentStyle={cardContentStyle}>
                  <StyledIcon>{route.icon}</StyledIcon>
                  <StyledRoute>{route.name}</StyledRoute>
                </Card>
              </a>
            </Link>
          </Item>
        ))
      }
    </List>
  </StyledNav>
);

export default Navbar;
