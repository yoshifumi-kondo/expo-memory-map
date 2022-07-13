import { RootStackParamList } from '@customTypes/type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const SelectEditObjectsScreen: FC = () => {
  const maps = Array(12).fill('v');
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'SelectEditObjectsScreen'>>();

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View>
            {maps.map((_v, i) => (
              <View key={i} style={styles.selectMapContainer}>
                <View style={styles.cookieImageContainer}>
                  <Image source={require('@assets/cookie.png')} style={styles.cookieImage} />
                </View>
                <TouchableOpacity
                  style={styles.mapButton}
                  onPress={() => navigation.navigate('EditObjectsScreen')}
                >
                  <Text
                    style={[customStyles.defaultText, customStyles.smallFont, styles.mapButtonText]}
                  >
                    map_name
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.containerCreateButton}
        onPress={() => navigation.navigate('EditObjectsScreen')}
      >
        <View style={styles.createButton}>
          <Text
            style={[customStyles.defaultText, customStyles.mediumFont, styles.createButtonText]}
          >
            Create
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default SelectEditObjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.first,
    paddingHorizontal: 38,
    minHeight: '100%',
    justifyContent: 'space-between',
    paddingVertical: 32,
  },
  selectMapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cookieImageContainer: {
    marginVertical: 16,
  },
  cookieImage: { width: 122 * 0.6, height: 124 * 0.6 },
  mapButton: {
    width: 216,
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
  mapButtonText: {
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
