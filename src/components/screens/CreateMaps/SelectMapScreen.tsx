import { RootStackParamList } from '@customTypes/type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const SelectMapScreen: FC = () => {
  const maps = Array(10).fill('v');
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'SelectMapScreen'>>();

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.mapsContainer}>
            {maps.map((_v, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => navigation.navigate('EditMapScreen')}
                style={styles.mapContainer}
              >
                <View style={styles.mapImageContainer}>
                  <Image source={require('@assets/map.png')} style={styles.img} />
                  <Text
                    style={[customStyles.defaultText, customStyles.largeFont, styles.mapAmountText]}
                  >
                    52
                  </Text>
                </View>
                <Text style={[customStyles.defaultText, customStyles.smallFont]}>map_name{i}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.containerCreateButton}
        onPress={() => navigation.navigate('EditMapScreen')}
      >
        <View style={styles.createButton}>
          <Text
            style={[customStyles.defaultText, customStyles.mediumFont, styles.createButtonText]}
          >
            CREATE NEW MAP
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default SelectMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.first,
    paddingHorizontal: 38,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 32,
  },
  img: {
    width: 482 * 0.3,
    height: 352 * 0.3,
  },
  mapsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  mapContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  mapImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapAmountText: {
    position: 'absolute',
    color: customColor.secound,
  },
  containerCreateButton: {
    paddingHorizontal: 38,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createButton: {
    position: 'absolute',
    bottom: 40,
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
  },
  createButtonText: {
    color: 'white',
  },
});
