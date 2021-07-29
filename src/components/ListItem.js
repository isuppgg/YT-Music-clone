import React from 'react';
import PlayBtn from './Reproductor/PlayBtn';
import ThreeDotsMenu from './ThreeDotsMenu';

const ListItem = ({ data }) => {
   const { thumbnail, author, name, length, type } = data;
   console.log(data);
   return (
      <div>
         <div className='list-item-wrapper'>
            <div className='item-options'>
               <ThreeDotsMenu transparent={false} />
            </div>
            <img src={thumbnail} alt='' />
            <div className='play-item'>
               <PlayBtn />
            </div>
         </div>
         <h3>
            <a href='/'>{name}</a>
         </h3>
         <p>
            {type} • {author} • {length} canciones
         </p>
      </div>
   );
};

export default ListItem;
