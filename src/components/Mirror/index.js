import React from 'react';

import { useCount } from '../../context/Count';

const Mirror = () => {
    const { count } = useCount();
    return (
        <span>
            <b> Count: </b>
            {count}
        </span>
    );
}
export default Mirror;
