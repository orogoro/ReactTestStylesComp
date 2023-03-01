import user from '../../images/svg/statistic/user.svg';
import share from '../../images/svg/statistic/share.svg';
import setting from '../../images/svg/statistic/setting.svg';
import keyhole from '../../images/svg/statistic/keyhole.svg';
import games from '../../images/svg/statistic/games.svg';

import { StatisticItem } from '../';

import { List } from './Statistic.styled';

function Statistic({ statistic }) {
  return (
    <List>
      <StatisticItem
        statistic={statistic?.iam_users}
        text={'IAM Users'}
        icon={user}
        color="rgba(66, 204, 88, 0.15)"
      />
      <StatisticItem
        statistic={statistic?.iam_roles}
        text={'IAM Roles'}
        icon={setting}
        color="rgba(73, 152, 238, 0.15);"
      />
      <StatisticItem
        statistic={statistic?.iam_policies}
        text={'IAM Policies'}
        icon={keyhole}
        color="rgba(242, 93, 93, 0.15);"
      />
      <StatisticItem
        statistic={statistic?.compute_resources}
        text={'Compute Resources'}
        icon={share}
        color="rgba(244, 167, 50, 0.15);"
      />
      <StatisticItem
        statistic={statistic?.games}
        text={'Games'}
        icon={games}
        color="rgba(155, 83, 248, 0.15);"
      />
    </List>
  );
}

export default Statistic;
