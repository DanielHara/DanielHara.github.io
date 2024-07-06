import React from 'react';
import Header from '../../components/Header';
import ViewAlbum from '../../views/Album';

function Album() {
  return (
    <>
      <Header tag='hidden' title='Travel photo gallery' />
      <ViewAlbum />
    </>
  );
}

export default Album;
