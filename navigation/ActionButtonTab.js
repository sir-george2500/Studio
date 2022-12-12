import { Tab, useNavigation } from '@react-navigation/native';

// Import the UploadScreen component
import UploadScreen from './UploadScreen';
import plus from '../app/assets/plus.png'

// Define the action button tab screen
const ActionButtonTab = () => {
// Use the useNavigation hook to get access to the navigation object
const navigation = useNavigation();

// Define the onPress handler for the action button
const onPress = () => {
// Navigate to the upload screen when the action button is pressed
navigation.navigate('UploadScreen');
};

return (
<Tab.Screen
name={"ActionButton"}
component={UploadScreen}
options={{
tabBarActiveTintColor: colors.brandColor,
title:'',
tabBarIcon: ({ focused }) => (
<TouchableOpacity onPress={onPress}>
<View style={{
width: 90,
height: 90,
backgroundColor: colors.white,
borderRadius: 90*0.5,
justifyContent: 'center',
alignItems: 'center',
borderColor: colors.brandColor,
borderWidth:2,
marginBottom: Platform.OS == "android" ? 50 : 30
}}>
<Image
source={plus}
style={{
width: 22,
height: 22,
tintColor: colors.black,
}}
/>
</View>
</TouchableOpacity>
),
}}
/>
);
};

// Export the action button tab screen to use it in the tab navigator
export default ActionButtonTab;