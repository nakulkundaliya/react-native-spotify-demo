import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TracksContext } from '../Redux/Reducer';
import commnStyle from './Styles/CommonStyle';
import { ScreenName } from '../Navigation/AppRoute';

const TracksScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const { state, actions } = useContext(TracksContext);
  const { tracks } = state;

  const getTrackList = async () => {
    setIsLoading(true);
    const { id } = route.params;
    await actions.getTracksByPlaylistId(id); // TODO
    setIsLoading(false);
  };

  useEffect(() => {
    getTrackList();
  }, [route.params]);

  const keyExtractor = (item, index) => item + index;

  const renderTrackListList = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          commnStyle.musicListingContainer,
          { marginTop: 20, flexDirection: 'row' },
        ]}
        onPress={() =>
          navigation.navigate(ScreenName.albumScreen, {
            id: item.track.album.id,
          })
        }
      >
        <View style={{ justifyContent: 'center' }}>
          <Image
            source={{ uri: item.track.album.images[0].url }}
            style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 10 }}
          />
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text numberOfLines={1} style={commnStyle.name}>
            {item.track.album.name}
          </Text>
          <Text style={commnStyle.trackNo}>
            Track : {item.track.album.total_tracks}
          </Text>
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
          data={tracks}
          key={'trackData'}
          keyExtractor={keyExtractor}
          renderItem={renderTrackListList}
          contentContainerStyle={commnStyle.flatList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default TracksScreen;
