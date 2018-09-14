import React from 'react';
import GifImage from './GifImage';

const GifList = (props) => (
    <ul className='gif-item'>
        {
            props.gifs.map((item) =>
                <li key={item.id}>
                    <a href='#'>
                        <GifImage 
                            active={item.images.downsized.url} 
                            still={item.images.downsized_still.url} 
                        />
                    </a>
                </li>
            )
        }
    </ul> 
);

export default GifList;