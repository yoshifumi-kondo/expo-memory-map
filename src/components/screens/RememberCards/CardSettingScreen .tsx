import { RootStackParamList, SutisType } from '@customTypes/type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardSettingScreen: FC = () => {
  const suits: Array<SutisType> = ['spade', 'club', 'heart', 'diamond'];
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'CardSettingScreen'>>();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('@assets/map.png')} style={styles.img} />
            <Text style={[styles.topLogoText, customStyles.mediumFont, customStyles.boldText]}>
              Selected Map Name
            </Text>
          </View>
          <TouchableOpacity style={[styles.button, styles.mapSelectButtonAdjustoment]}>
            <Text style={[customStyles.defaultText, customStyles.smallFont, styles.buttonText]}>
              Map Select
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.codeContainer}>
            <Text
              style={[
                customStyles.defaultText,
                customStyles.extraSmallFont,
                customStyles.fontSecond,
              ]}
            >
              Show Code
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingContainer}>
          {suits.map((v, i) => (
            <View key={i} style={styles.suitContainer}>
              <View>
                {v === 'club' ? (
                  <Image source={require('@assets/suits/club.png')} style={styles.suitImage} />
                ) : v === 'diamond' ? (
                  <Image source={require('@assets/suits/diamond.png')} style={styles.suitImage} />
                ) : v === 'heart' ? (
                  <Image source={require('@assets/suits/heart.png')} style={styles.suitImage} />
                ) : (
                  <Image source={require('@assets/suits/spade.png')} style={styles.suitImage} />
                )}
              </View>
              <TouchableOpacity>
                <Text
                  style={[
                    customStyles.defaultText,
                    customStyles.mediumFont,
                    customStyles.fontSecond,
                  ]}
                >
                  1
                </Text>
              </TouchableOpacity>
              <View>
                <Text
                  style={[
                    customStyles.defaultText,
                    customStyles.mediumFont,
                    customStyles.fontSecond,
                  ]}
                >
                  ⬇︎
                </Text>
              </View>
              <TouchableOpacity>
                <Text
                  style={[
                    customStyles.defaultText,
                    customStyles.mediumFont,
                    customStyles.fontSecond,
                  ]}
                >
                  13
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.containerStartButton}>
        <View style={styles.startButton}>
          <TouchableOpacity onPress={() => navigation.navigate('RememberCardScreen')}>
            <Text
              style={[customStyles.defaultText, customStyles.mediumFont, styles.startButtonText]}
            >
              START
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.codeContainer}>
          <Text
            style={[
              customStyles.defaultText,
              customStyles.smallFont,
              styles.startButtonText,
              customStyles.fontSecond,
            ]}
          >
            Advanced
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CardSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.first,
    paddingHorizontal: 38,
    minHeight: '100%',
    justifyContent: 'flex-start',
    paddingVertical: 32,
  },
  img: {
    width: 482 * 0.4,
    height: 352 * 0.4,
  },
  imageContainer: {
    flexDirection: 'column',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suitImage: { width: 26 * 1.5, height: 26 * 1.5 },
  topLogoText: {
    position: 'absolute',
    color: customColor.secound,
  },
  buttonText: { color: 'white' },
  codeContainer: {
    borderBottomWidth: 1,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    height: '60%',
  },
  button: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
    height: 64,
    shadowColor: 'black',
    textShadowOffset: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  mapSelectButtonAdjustoment: {
    backgroundColor: customColor.fifth,
    borderRadius: 6,
    height: 36,
    color: 'white',
    width: 150,
    margin: 12,
  },
  settingContainer: {
    marginVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  suitContainer: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'space-between',
  },
  containerStartButton: {
    paddingHorizontal: 38,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  startButton: {
    width: '100%',
    backgroundColor: customColor.secound,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
    height: 64,
    shadowColor: 'black',
    textShadowOffset: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 18,
  },
  startButtonText: {
    color: 'white',
  },
});
