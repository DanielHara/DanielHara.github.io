import Grid from '@mui/material/Grid';

import Image from 'next/image'

import React, { useEffect, useState } from 'react';
import { getPictureLoad, IImage } from '../api/getPictures';
import { useInView } from 'react-intersection-observer';


const ViewAlbum = () => {
    // TO-DO: server render the first pictures
    const [pictures, setPictures] = useState<IImage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { ref: endOfListRef, inView } = useInView();

    useEffect(() => {
        if (inView && !isLoading) {
            setIsLoading(true);
            getPictureLoad()
                .then(loadedPictures => setPictures((previousPictures) => previousPictures.concat(loadedPictures)))
                .then(() => { setIsLoading(false) })
                .catch(() => { console.log('Issue fetching images ')});
        }
      }, [inView]);
  
    return (
      <div>
        <Grid container spacing={2}>
            {pictures.map((picture) => <Grid item xs={12} md={4} height='300px' position="relative">
                <Image src={picture.url} fill style={{ objectFit: 'contain' }}/>
            </Grid>)}
        </Grid>
        <div ref={endOfListRef}>You reached the end of the page</div>
      </div>
    );
}

export default ViewAlbum;
