import React, { Children } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({childre, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end:true});
    return (
        <div>
            <Link style={{color : match ? 'chocolate':'white'}} to={to} {...props}>
                {Children}
            </Link>
        </div>
    );
};

export default ActiveLink;