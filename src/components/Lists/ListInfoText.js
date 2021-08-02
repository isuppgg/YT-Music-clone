import React from 'react';

const ListInfoText = ({ data }) => {
   const { type, author, length, artists, artist, views } = data;
   if (type === 'Playlist')
      return (
         <p className='transparent'>
            {type} • {author} • {length} canciones
         </p>
      );
   else if (type === 'Mix') return <p className='transparent'> {artists} </p>;
   else if (type === 'Live')
      return (
         <p className='transparent'>
            {artist} • {views}
         </p>
      );
};

export default ListInfoText;
