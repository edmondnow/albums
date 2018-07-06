//Import libraries for making the component
import React, { Component } from 'react';
import axios from 'axios';
import { View, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

  state = { albums: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => {
       return <AlbumDetail key={album.title} album={album} />;
    });
  }

  render() {
    return (
      <ScrollView>
        <View>
          {this.renderAlbums()}
        </View>
      </ScrollView>
    );
  }

}

export default AlbumList;
