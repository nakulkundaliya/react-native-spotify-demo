import { StyleSheet, Dimensions } from 'react-native';
import { SCREEN_HEIGHT, IMAGE_HEIGHT, CARD_WIDTH } from './CommonStyle';

const style = StyleSheet.create({
  musicImage: {
    alignSelf: 'center',
    width: CARD_WIDTH - 20,
    height: IMAGE_HEIGHT - 14,
    borderRadius: 20,
  },
  footerContainer: {
    paddingHorizontal: SCREEN_HEIGHT * 0.03,
    paddingVertical: 10,
  },
  flatListWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default style;
