import React from 'react';
import './pageContainer.css';

const PageContainer = ({ children }) => {
   return (
      <div className='page-container'>
         <div className='main-content'>{children}</div>
      </div>
   );
};

export default PageContainer;
