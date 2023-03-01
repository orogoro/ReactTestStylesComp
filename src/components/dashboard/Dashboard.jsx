import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authSelector, authOperations } from '../../redux/auth';
import { dashboardOperations, dashboardSelector } from '../../redux/dashboard';

import { Sidebar, UserPanel, Statistic, GameStats } from '../';

import {
  Container,
  ContainerDashboard,
  ContainerStatistic,
} from './Dashboard.styled';

function Dashboard() {
  const email = useSelector(authSelector.getUserEmail);
  const dashboard = useSelector(dashboardSelector.getDashboard);
  const dispatch = useDispatch();
  console.log(dashboard);

  useEffect(() => {
    if (!email) {
      dispatch(authOperations.fetchCurrentUser());
    }
    dispatch(dashboardOperations.fetchDashboard());
  }, [dispatch, email]);

  return (
    <Container>
      <Sidebar />
      <ContainerDashboard>
        <UserPanel email={email} />
        <Statistic statistic={dashboard?.statistic} />
        <ContainerStatistic>
          <GameStats />
        </ContainerStatistic>
      </ContainerDashboard>
    </Container>
  );
}

export default Dashboard;
