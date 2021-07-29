import React from 'react';
import PageContainer from '../PageContainer';
import List from '../List';
import ListTitle from '../ListTitle';

const Home = () => {
   return (
      <PageContainer>
         <List type='playlists'>
            <ListTitle>Tus Playlists</ListTitle>
         </List>
         <List type='playlists'>
            <ListTitle>Tus Playlists</ListTitle>
         </List>
      </PageContainer>
   );
};

export default Home;
