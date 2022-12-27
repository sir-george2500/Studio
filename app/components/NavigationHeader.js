import { StyleSheet, Text, View, Image,
   TouchableOpacity,
   Modal,
   Button
  } from 'react-native'
import React ,{ useState}from 'react'
import colors from '../config/colors'
import { Ionicons } from '@expo/vector-icons';
import Icon from './Icon';

export default function NavigationHeader({ScreenName}) {

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setTimeout(() => {
      setModalVisible(true);
    }, 1000);
  }
  return (
    <View style={styles.container}>
  <View style={styles.left}>
    <Image 
    source={require('../assets/symbol.png')} 
    style={styles.imag}
    />
    <Text style={styles.mainText}>{ScreenName}</Text>
 </View>
   <View  style={styles.right}>
    <View  style={styles.notificationContainer}>
   <TouchableOpacity>
   <Ionicons name="notifications" style={styles.notification} size={24} color="black" />
   </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={openModal}>
    <View  style={styles.profileContainer}>
    <Icon name="account"  size={34} iconColor={colors.white}/>
    </View>
    </TouchableOpacity>
    </View>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContent}>
          <Text>Modal is visible!</Text>
          <Button onPress={() => setModalVisible(false)} title="Close Modal" />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.light,
        height:65,  
        alignItems: 'center',    
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
    right:{
        marginRight:20,
        flexDirection:"row"
    },
    left:{
        marginLeft:10,
        flexDirection:"row"
    },
    imag:{
        width :24,
        height:24,
        resizeMode:"contain"
    },
   mainText:{
    marginTop:-2,
    fontSize:20,
    fontWeight:"bold"
   },
   notificationContainer:{
    marginRight:14,
    marginTop:4,
   },

   modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    margin: 20,
  },
})