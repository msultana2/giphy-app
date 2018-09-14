import React, { Component } from 'react';

const GifList = (props) => (
    <ul className='gif-item'>
        {
            props.gifs.map((item) =>
                <li key={item.id}>
                    <a href='#'><img src={item.images.downsized.url} /></a>
                </li>
            )
        }
    </ul>
   
);

export default GifList;