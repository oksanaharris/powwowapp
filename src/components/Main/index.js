import React from 'react';

import { Switch, Route } from 'react-router-dom'

import MapView from '../../containers/MapView';
import IndividualArtworkView from '../../containers/IndividualArtworkView';
import ArtGalleryView from '../../containers/ArtGalleryView';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MapView}/>
      <Route path="/artwork/:artworkid" component={IndividualArtworkView} />
      <Route path="/artgallery" component={ArtGalleryView} />
    </Switch>
  </main>
)
