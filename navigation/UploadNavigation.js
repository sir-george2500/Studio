import { createStackNavigator } from "@react-navigation/stack";
import AddAlbum from "../app/screens/UploadScreen/AddAlbum";
import Addother from "../app/screens/UploadScreen/Addother";
import AddSong from "../app/screens/UploadScreen/AddSong/AddSong";
import UploadScreen from "../app/screens/UploadScreen/UploadScreen";
import routes from "./routes";

const UploadStack = createStackNavigator()


function UploadNavigator(){

    return(
        <UploadStack.Navigator
         
        >

            <UploadStack.Screen
            name={routes.UPLOAD_MUSIC}
            component={UploadScreen}
            options={{
                headerShown:false,
            }}
            />
            <UploadStack.Screen
            name={routes.ADD_SONG}
            component={AddSong}
            />

            <UploadStack.Screen
            name={routes.ADD_ALBUM}
            component={AddAlbum}
            />

            <UploadStack.Screen
            name={routes.ADD_NONMUSICAL}
            component={Addother}
            />

        </UploadStack.Navigator>
    )
}

export default UploadNavigator;