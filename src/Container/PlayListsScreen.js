import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import style from './Styles/PlayListsStyle';
import { PlayListContext } from '../Redux/Reducer';
import commnStyle from './Styles/CommonStyle';
import { ScreenName } from '../Navigation/AppRoute';

const PlayListsScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  const { state, actions } = useContext(PlayListContext);

  const { playlists, offset, loading, next } = state;
  const getPlayLists = async (offset) => {
    await actions.getPlayLists(offset);
    setIsLoadMoreLoading(false);
  };
  useEffect(() => {
    getPlayLists(0);
  }, []);

  const getMoreData = () => {
    if (!loading && next !== null) {
      setIsLoadMoreLoading(true);
      getPlayLists(offset);
    }
  };

  const keyExtractor = (item, index) => item + index;

  const renderMusicListing = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ScreenName.tracksScreen, { id: item.id })
        }
        style={[commnStyle.musicCardContainer, { marginTop: 20 }]}
      >
        <Image source={{ uri: item.images[0].url }} style={style.musicImage} />
        <View style={style.footerContainer}>
          <Text style={commnStyle.musicName}>{item.name}</Text>
          <Text style={commnStyle.trackNo}>Track : {item.tracks.total}</Text>
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
          data={playlists}
          key="data"
          numColumns={2}
          keyExtractor={keyExtractor}
          renderItem={renderMusicListing}
          contentContainerStyle={commnStyle.flatList}
          columnWrapperStyle={style.flatListWrapper}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            return (
              isLoadMoreLoading && <ActivityIndicator color="white" size={30} />
            );
          }}
          onEndReached={() => getMoreData()}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default PlayListsScreen;
