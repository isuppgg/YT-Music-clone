import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import ListItem from './ListItem';
import ListItemLive from './ListItemLive';
import './list.css';

const List = ({ children, type }) => {
   const url = `http://localhost:5000/${type}`;
   const { data, isPending, error } = useFetch(url);

   console.log(data, error);
   return (
      <div className='horizontal-list-container'>
         {children}
         <div className='horizontal-list-scroll'>
            {data &&
               !isPending &&
               data.map(el =>
                  el.live ? (
                     <ListItemLive data={el} key={el.name} />
                  ) : (
                     <ListItem data={el} key={el.name} />
                  )
               )}
         </div>
      </div>
   );
};

export default List;
