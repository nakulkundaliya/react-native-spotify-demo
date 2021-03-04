import { StyleSheet, Dimensions } from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const mediumScreenHeight = 750;

export const IMAGE_HEIGHT =
  SCREEN_HEIGHT > mediumScreenHeight
    ? SCREEN_HEIGHT * 0.03
    : SCREEN_HEIGHT * 0.34;

export const CARD_WIDTH = SCREEN_WIDTH / 2;

export const shadow = {
  shadowColor: 'white',
  shadowOpacity: 1,
  backgroundColor: 'white',
  shadowRadius: 7,
  elevation: 5,
};

const commnStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  musicCardContainer: {
    width: CARD_WIDTH - 20,
    borderRadius: 20,
    ...shadow,
  },
  musicListingContainer: {
    width: SCREEN_WIDTH - 20,
    borderRadius: 10,
    paddingVertical: 10,
    marginLeft: 10,
    ...shadow,
  },
  splashScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    width: SCREEN_WIDTH,
  },
  musicName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  trackNo: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default commnStyle;
