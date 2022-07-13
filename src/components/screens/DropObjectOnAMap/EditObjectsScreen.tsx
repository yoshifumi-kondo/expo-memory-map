import { RootStackParamList } from '@customTypes/type';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const EditObjectsScreen: FC = () => {
  const pins = Array(52).fill('v');
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'SelectEditObjectsScreen'>>();

  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.rowsContainer}>
            <View style={styles.columnContainer}>
              <Image source={require('@assets/active_pin.png')} style={styles.pinImage} />
              <Text
                style={[customStyles.defaultText, customStyles.mediumFont, customStyles.fontSecond]}
              >
                Pin
              </Text>
            </View>

            <View style={styles.columnContainer}>
              <Image source={require('@assets/cookie.png')} style={styles.cookieImage} />
              <Text
                style={[customStyles.defaultText, customStyles.mediumFont, customStyles.fontSecond]}
              >
                Object
              </Text>
            </View>
          </View>
          <ScrollView>
            {pins.map((_v, i) => (
              <View key={i} style={styles.rowsContainer}>
                <View style={styles.columnContainer}>
                  <Text
                    style={[
                      customStyles.defaultText,
                      customStyles.smallFont,
                      customStyles.fontSecond,
                    ]}
                  >
                    {i + 1}.Some Text
                  </Text>
                </View>
                <View style={styles.columnContainer}>
                  <TextInput
                    style={[
                      styles.inputForm,
                      customStyles.defaultText,
                      customStyles.smallFont,
                      customStyles.fontSecond,
                    ]}
                  />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <TouchableOpacity
        style={styles.containerSaveButton}
        onPress={() => navigation.navigate('TopScreen')}
      >
        <View style={styles.saveButton}>
          <Text style={[customStyles.defaultText, customStyles.mediumFont, styles.saveButtonText]}>
            SAVE THE OBJECTS
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default EditObjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.third,
    paddingHorizontal: 38,
    minHeight: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 32,
  },
  rowsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  columnContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinImage: {
    width: 312 * 0.1,
    height: 382 * 0.1,
    marginRight: 16,
  },
  cookieImage: { width: 122 * 0.3, height: 124 * 0.3, marginRight: 16 },
  inputForm: { borderBottomWidth: 2, width: '100%' },
  containerSaveButton: {
    paddingHorizontal: 38,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveButton: {
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
  saveButtonText: {
    color: 'white',
  },
});
