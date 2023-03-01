import { Container, Icon } from './SidebarItem.styled';

function SidebarItem({ icon, link, activeIcon }) {
  return (
    <Container to={link}>
      {({ isActive }) =>
        isActive ? (
          <Icon src={activeIcon} alt={`icon`} />
        ) : (
          <Icon src={icon} alt={`icon`} />
        )
      }
    </Container>
  );
}

export default SidebarItem;
