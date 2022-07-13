import { RootStackParamList } from '@customTypes/type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TopSceen: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'TopScreen'>>();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={require('@assets/map.png')} style={styles.img} />
          <Text style={[styles.topLogoText, customStyles.largeFont, customStyles.boldText]}>
            Memory Map
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelectMapScreen')}
        >
          <Text style={[customStyles.defaultText, customStyles.mediumFont, styles.buttonText]}>
            Create Maps
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelectEditObjectsScreen')}
        >
          <Text style={[customStyles.defaultText, customStyles.mediumFont, styles.buttonText]}>
            Drop objects on a map
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelectCodeScreen')}
        >
          <Text style={[customStyles.defaultText, customStyles.mediumFont, styles.buttonText]}>
            Make codes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CardSettingScreen')}
        >
          <Text style={[customStyles.defaultText, customStyles.mediumFont, styles.buttonText]}>
            Remember Cards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelectMapScreen')}
        >
          <Text style={[customStyles.defaultText, customStyles.mediumFont]}>Check your Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.first,
    paddingHorizontal: 38,
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: 32,
  },
  img: {
    width: 482 * 0.6,
    height: 352 * 0.6,
  },
  imageContainer: {
    flexDirection: 'column',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLogoText: {
    position: 'absolute',
    color: customColor.secound,
  },
  buttonText: { color: customColor.secound },
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
});
