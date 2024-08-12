//import React, { Children } from 'react'
import './Data.jsx';
import Data from './Data.jsx';

//let data =["list1","list2","list3"];

 const Header = ({email}) => {
  return (
    
    <div>Header section and {email}  {Children}
      <div>
        <ul>
          <div>{Data.map((item,i)=>{
            return(
              <li key={i}>{item.name}</li>
            );
          })}</div>
        </ul>
      </div>
    </div>
    
    
  )
}

export default Header;