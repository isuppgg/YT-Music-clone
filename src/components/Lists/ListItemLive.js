import React from 'react';
import { Link } from 'react-router-dom';
import ListInfoText from './ListInfoText';
import ThreeDotsMenu from '../ThreeDotsMenu';
import PlayBtn from '../Reproductor/PlayBtn';

const ListItemLive = ({ data }) => {
   const { thumbnail, name, type } = data;
   // console.log(data);
   return (
      <div className='list-item-wrapper in-live'>
         <div className='list-item-thumbnail in-live'>
            <div className='item-options'>
               <ThreeDotsMenu transparent={false} />
            </div>
            <img src={thumbnail} alt={`${name} playlist`} />
            <div className='live-play-item'>
               <PlayBtn />
            </div>
         </div>
         <div className='list-item-text'>
            <h3>
               <Link to={`/${type.toLowerCase()}/${name.replace(/ /g, '-')}`}>
                  {name}
               </Link>
            </h3>
            <div className='list-text-wrapper'>
               <ListInfoText data={data} />
            </div>
         </div>
      </div>
   );
};

export default ListItemLive;
