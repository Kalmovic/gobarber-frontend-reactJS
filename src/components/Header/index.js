import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';
import logo from '~/assets/logoHeader.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Joseph kaltenecker</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/joseph.kal@email.com.png"
              alt="Joseph Kaltenecker"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
