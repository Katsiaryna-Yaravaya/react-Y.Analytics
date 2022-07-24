import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <div>
        <h1 className={'col'}>Main</h1>
      </div>
      <div>
        <Link className={'link'} to="/about">About</Link>
       </div>
      <div>
        <button type="button" className={'fill'} onClick={()=>{
          console.log('click');
        }}>click me</button>
      </div>
    </div>
   );
};

export default Main;
