import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { AlbumContext } from '../Redux/Reducer';
import commnStyle from './Styles/CommonStyle';

const AlbumScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { state, actions } = useContext(AlbumContext);
  const { album } = state;

  const getAlbumList = async () => {
    const { id } = route.params;
    await actions.getAblumByTrackId(id);
  };

  useEffect(() => {
    setIsLoading(true);
    getAlbumList();
    setIsLoading(false);
  }, [route.params]);

  const keyExtractor = (item, index) => item + index;

  const renderAlbumList = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[commnStyle.musicListingContainer, { marginTop: 20 }]}
      >
        <View style={{ paddingLeft: 20 }}>
          <Text numberOfLines={1} style={commnStyle.musicName}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={commnStyle.trackNo}>
            Duration : {(item.duration_ms / 60000).toFixed(2)}
          </Text>
          <Text style={commnStyle.trackNo}>{item.total_tracks}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={commnStyle.mainContainer}>
      {isLoading ? (
        <ActivityIndicator color="white" size={50} />
      ) : (
        <FlatList
          data={album}
          key={'musicdata'}
          keyExtractor={keyExtractor}
          renderItem={renderAlbumList}
          contentContainerStyle={commnStyle.flatList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default AlbumScreen;
