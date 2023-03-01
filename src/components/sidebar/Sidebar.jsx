import logo from '../../images/svg/Logo.svg';
import dashboard from '../../images/svg/dashboard.svg';
import dashboard_active from '../../images/svg/dashboard_active.svg';
import cards from '../../images/svg/cards.svg';
import product from '../../images/svg/product.svg';
import wear_tear from '../../images/svg/wear_tear.svg';
import games from '../../images/svg/games.svg';
import settings from '../../images/svg/settings.svg';

import { SidebarItem } from '../';

import { Container, Logo } from './Sidebar.styled';

function Sidebar() {
  return (
    <Container>
      <Logo src={logo} alt='logo' />
      <SidebarItem
        icon={dashboard}
        activeIcon={dashboard_active}
        link={'/dashboard'}
      />
      <SidebarItem icon={cards} link={'/'} />
      <SidebarItem icon={product} link={'/'} />
      <SidebarItem icon={wear_tear} link={'/'} />
      <SidebarItem icon={games} link={'/'} />
      <SidebarItem icon={settings} link={'/'} />
    </Container>
  );
}

export default Sidebar;
