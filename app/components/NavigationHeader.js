import { StyleSheet, Text, View, Image,
   TouchableOpacity,
   Modal,
   Button
  } from 'react-native'
import React ,{ useState}from 'react'
import colors from '../config/colors'
import { Ionicons } from '@expo/vector-icons';
import Icon from './Icon';
import AppButton from './AppButton';
import ListItem from './ListItem';
import ListItemSeperator from './ListItemSeperator';

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
         <View style={styles.modalView}>
         <ListItem 
           IconComponent={<Icon name="account"/>}
           title="Edit Account"    
         />
         <ListItemSeperator bgColor={colors.light}/>
         <ListItem 
           IconComponent={<Icon name="logout"/>}
           title="Log Out"   
            
         />
         
         </View>
          <AppButton title="close"
           style={styles.modalButton} 
           color="white"
           styleText={{color:colors.white,fontSize:16}}
           onPress={() => setModalVisible(false)}
           />
      
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
    marginTop:40,
    height:350,
    weight:300,
    borderRadius:5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    margin: 20,
  },

  modalButton:{
    height:50,
    backgroundColor:colors.black,
  
    borderRadius:5,
  },
  modalView:{
    margin:15,
    marginLeft:-2,
    marginRight:-2,
    height:170,
    borderRadius:5,
    backgroundColor:colors.black,
    
  }
})