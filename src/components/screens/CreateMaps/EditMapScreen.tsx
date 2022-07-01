import customStyles, { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { RootStackParamList } from '@customTypes/type';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const EditMapScreen: FC = () => {
  const pinNames = Array(20).fill('v');
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'EditMapScreen'>>();
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {pinNames.map((_v, i) => (
            <View key={i} style={styles.pinContainer}>
              <View style={styles.pinImageContainer}>
                <Image source={require('@assets/active_pin.png')} style={styles.img} />
              </View>
              <View>
                <View style={styles.pinTopContainer}>
                  <View>
                    <Text
                      style={[
                        customStyles.defaultText,
                        customStyles.mediumFont,
                        customStyles.fontSecond,
                      ]}
                    >
                      {i + 1}
                    </Text>
                  </View>
                  <View style={styles.upDownContainer}>
                    <TouchableOpacity>
                      <AntDesign name='arrowup' size={24} color={customColor.secound} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <AntDesign name='arrowdown' size={24} color={customColor.secound} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.pinMiddleContainer}>
                  <TextInput
                    style={[styles.inputForm, customStyles.defaultText, customStyles.smallFont]}
                  />
                </View>
                <View style={styles.pinButtonContainer}>
                  <TouchableOpacity style={styles.pinButton}>
                    <Entypo name='plus' size={24} color={'white'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.pinButton, styles.pinDeleteButton]}>
                    <Entypo name='minus' size={24} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.containerSaveButton}
        onPress={() => navigation.navigate('SelectMapScreen')}
      >
        <View style={styles.saveButton}>
          <Text style={[customStyles.defaultText, customStyles.mediumFont, styles.saveButtonText]}>
            SAVE THE MAP
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default EditMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.third,
    paddingHorizontal: 38,
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 32,
  },
  img: {
    width: 312 * 0.15,
    height: 382 * 0.15,
  },
  pinContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'nowrap',
    paddingVertical: 20,
  },
  pinImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 36,
  },
  pinNumText: {
    position: 'absolute',
    color: customColor.secound,
  },
  pinTopContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  upDownContainer: {
    flexDirection: 'row',
  },
  pinMiddleContainer: {},
  inputForm: { borderBottomWidth: 2, height: 48 },

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
  pinButtonContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pinButton: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customColor.secound,
    height: 36,
    shadowColor: 'black',
    textShadowOffset: 10,
    borderRadius: 36,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  pinDeleteButton: {
    backgroundColor: customColor.fifth,
  },
});
