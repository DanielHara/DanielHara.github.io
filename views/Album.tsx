import Grid from '@mui/material/Grid';

import Image from 'next/image'

import React, { useEffect, useState } from 'react';
import { getPictureLoad, IImage } from '../api/getPictures';


const ViewAlbum = () => {
    // TO-DO: server render the first pictures
    const [pictures, setPictures] = useState<IImage[]>([]);

    useEffect(() => {
      getPictureLoad()
          .then(loadedPictures => setPictures(loadedPictures))
          .catch(() => { console.log('Issue fetching images ')});
    }, []);
  
    return (
      <div>
        Just an album here
        <Grid container spacing={2}>
            {pictures.map((picture) => <Grid item xs={12} md={4} height='300px' position="relative">
                <Image src={picture.url} fill style={{ objectFit: 'contain' }}/>
            </Grid>)}
        </Grid>
      </div>
    );
}

export default ViewAlbum;
