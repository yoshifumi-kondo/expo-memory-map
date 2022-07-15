import { RootStackParamList } from '@customTypes/type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RememberCardScreen: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'RememberCardScreen'>>();

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
        <View>
          <Image source={require('@assets/cards/club/1.png')} style={styles.cardImage} />
        </View>
        <View>
          <Text
            style={[customStyles.fontSecond, customStyles.defaultText, customStyles.mediumFont]}
          >
            12/52
          </Text>
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('AnswerCardScreen')}
        >
          <Text style={[customStyles.fontWhite, customStyles.defaultText, customStyles.mediumFont]}>
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RememberCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.first,
    paddingHorizontal: 38,
    maxHeight: '100%',
    justifyContent: 'space-around',
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
  cardImage: {
    width: 91 * 1.5,
    height: 136 * 1.5,
  },

  containerMapCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
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
    marginBottom: 18,
  },
});
