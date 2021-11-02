// External modules
import Link from 'next/link';

// Internal modules
import Card from '@/components/card';
import Item from '@/components/item';
import List from '@/components/list';
import {
  cardContentStyle,
  cardStyle,
  iconStyle,
  listStyle,
  routeStyle,
} from '@/components/navbar/style';
import routes from '@/utils/routes';

const Navbar = () => (
  <nav data-testid="navbar">
    <List css={listStyle}>
      {
        // Iterate each route from routes
        routes.map(route => (
          <Item key={route.id}>
            <Link href={route.path} passHref={true}>
              <a>
                <Card css={cardStyle} cssContent={cardContentStyle} withShadow>
                  <span css={iconStyle}>{route.icon}</span>
                  <span css={routeStyle}>{route.name}</span>
                </Card>
              </a>
            </Link>
          </Item>
        ))
      }
    </List>
  </nav>
);

export default Navbar;
