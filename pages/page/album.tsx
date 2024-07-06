import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ViewAlbum from '../../views/Album';
import { getPictureLoad, IImage } from '../../api/getPictures';


function Album() {
  return (
    <>
      <Header tag='hidden' title='About me' />
      <ViewAlbum />
    </>
  );
}

export default Album;
