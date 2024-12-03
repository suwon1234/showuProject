// 뉴스 인기순 세부 페이지

import React from 'react';
import { useParams } from 'react-router-dom';

const Popularity = () => {
    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );
};

export default Popularity;