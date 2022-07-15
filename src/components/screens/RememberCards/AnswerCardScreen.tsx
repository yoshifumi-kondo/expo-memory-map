import { RootStackParamList } from '@customTypes/type';
import { suits } from '@libs/variables';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AnswerCardScreen: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'AnswerCardScreen'>>();

  const number = Array(4)
    .fill('v')
    .map((_v, i) => i + 1);

  return (
    <>
      <View style={styles.containerMap}>
        <TouchableOpacity>
          <Text style={[customStyles.fontSecond, customStyles.defaultText, customStyles.largeFont]}>
            ◀︎
          </Text>
        </TouchableOpacity>
        <View style={styles.containerMapCenter}>
          <Image source={require('@assets/active_pin.png')} style={styles.pinImage} />
          <Text
            style={[customStyles.fontSecond, customStyles.defaultText, customStyles.mediumFont]}
          >
            6
          </Text>
          <Text
            style={[customStyles.fontSecond, customStyles.defaultText, customStyles.mediumFont]}
          >
            Pin name
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={[customStyles.fontSecond, customStyles.defaultText, customStyles.largeFont]}>
            ▶︎
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.containerChoosenCard}>
          <Image source={require('@assets/suits/heart.png')} style={styles.suitImage} />
          <Text
            style={[
              customStyles.fontSecond,
              customStyles.defaultText,
              customStyles.largeFont,
              { marginLeft: 18 },
            ]}
          >
            13
          </Text>
        </View>
        <View style={styles.rowContainer}>
          {suits.map((v) =>
            v === 'club' ? (
              <Image source={require('@assets/suits/club.png')} style={styles.suitImage} />
            ) : v === 'diamond' ? (
              <Image source={require('@assets/suits/diamond.png')} style={styles.suitImage} />
            ) : v === 'heart' ? (
              <Image source={require('@assets/suits/heart.png')} style={styles.suitImage} />
            ) : (
              <Image source={require('@assets/suits/spade.png')} style={styles.suitImage} />
            ),
          )}
        </View>
        <View style={styles.rowContainer}>
          {number.map((v, i) => (
            <TouchableOpacity key={i} style={styles.numberButton}>
              <Text
                style={[customStyles.fontSecond, customStyles.defaultText, customStyles.mediumFont]}
              >
                {v}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {number.map((v, i) => (
            <TouchableOpacity key={i} style={styles.numberButton}>
              <Text
                style={[customStyles.fontSecond, customStyles.defaultText, customStyles.mediumFont]}
              >
                {v + 4}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {number.map((v, i) => (
            <TouchableOpacity key={i} style={styles.numberButton}>
              <Text
                style={[customStyles.fontSecond, customStyles.defaultText, customStyles.mediumFont]}
              >
                {v + 8}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainerLast}>
          <TouchableOpacity style={styles.numberButton}>
            <Text
              style={[customStyles.fontSecond, customStyles.defaultText, customStyles.mediumFont]}
            >
              {13}
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={[customStyles.fontSecond, customStyles.defaultText, customStyles.mediumFont]}
            >
              12/52
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('ResultCardScreen')}
        >
          <Text style={[customStyles.fontWhite, customStyles.defaultText, customStyles.mediumFont]}>
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AnswerCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.first,
    paddingHorizontal: 38,
    maxHeight: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 32,
  },
  containerMap: {
    flex: 1,
    backgroundColor: customColor.third,
    paddingHorizontal: 38,
    maxHeight: '35%',
    justifyContent: 'space-between',
    paddingVertical: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinImage: {
    width: 312 * 0.2,
    height: 382 * 0.2,
  },
  suitImage: { width: 26 * 2, height: 26 * 2 },

  containerMapCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowContainerLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  numberButton: {
    borderWidth: 3,
    borderColor: customColor.secound,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 64,
    width: 52,
    height: 52,
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
  containerChoosenCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    width: 200,
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
  },
});
