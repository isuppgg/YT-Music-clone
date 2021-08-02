import React from 'react';
import PageContainer from '../PageContainer';
import List from '../Lists/List';
import ListTitle from '../Lists/ListTitle';

const Home = () => {
   return (
      <PageContainer>
         <List type='playlists'>
            <ListTitle>Tus Playlists</ListTitle>
         </List>
         <List type='mixes'>
            <ListTitle>Mixes Personalizados</ListTitle>
         </List>
         <List type='lives'>
            <ListTitle>Actuaciones en directo</ListTitle>
         </List>
      </PageContainer>
   );
};

export default Home;
