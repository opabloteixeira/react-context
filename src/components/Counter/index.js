import React from 'react';

import { useCount } from '../../context/Count';

const Counter = () => {
   const { count, setCount } = useCount(0);
   return (
      <div>
         <span>
               <b> Count: </b>
               {count}
         </span>
         <br />
         <button onClick={() => setCount( count + 1)}>Increase</button>
      </div>
   );
}
export default Counter;
