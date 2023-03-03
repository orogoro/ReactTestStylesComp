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
      <Logo src={logo} alt="logo" />
      <SidebarItem icon={dashboard} activeIcon={dashboard_active} link={'/'} />
      <SidebarItem icon={cards} link={'/cards'} />
      <SidebarItem icon={product} link={'/product'} />
      <SidebarItem icon={wear_tear} link={'/wear_tear'} />
      <SidebarItem icon={games} link={'/games'} />
      <SidebarItem icon={settings} link={'/settings'} />
    </Container>
  );
}

export default Sidebar;
