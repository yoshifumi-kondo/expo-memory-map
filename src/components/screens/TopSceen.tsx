import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TopSceen: FC = () => {
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
        <View style={styles.button}>
          <Text style={[customStyles.defaultText, customStyles.mediumFpnt]}>Create Maps</Text>
        </View>
        <View style={styles.button}>
          <Text style={[customStyles.defaultText, customStyles.mediumFpnt]}>Write on a map</Text>
        </View>
        <View style={styles.button}>
          <Text style={[customStyles.defaultText, customStyles.mediumFpnt]}>Make codes</Text>
        </View>
        <View style={styles.button}>
          <Text style={[customStyles.defaultText, customStyles.mediumFpnt]}>Remember Cards</Text>
        </View>
        <View style={styles.button}>
          <Text style={[customStyles.defaultText, customStyles.mediumFpnt]}>Check your Maps</Text>
        </View>
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
});
