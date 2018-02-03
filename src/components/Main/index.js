import React from 'react';

import { Switch, Route } from 'react-router-dom'

import MapView from '../../containers/MapView';
import IndividualArtworkView from '../../containers/IndividualArtworkView';
import IndividualArtistView from '../../containers/IndividualArtistView';
import ArtGalleryView from '../../containers/ArtGalleryView';
import ArtistListView from '../../containers/ArtistListView';
import CommunityView from '../../containers/CommunityView';
import CameraComponent from '../../containers/Camera';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MapView}/>
      <Route path="/artwork/:artworkid" component={IndividualArtworkView} />
      <Route path="/artgallery" component={ArtGalleryView} />
      <Route path="/artist/:artistid" component={IndividualArtistView} />
      <Route path="/artistlist" component={ArtistListView} />
      <Route path="/community" component={CommunityView} />
      <Route path="/camera" component={CameraComponent} />
    </Switch>
  </main>
)
