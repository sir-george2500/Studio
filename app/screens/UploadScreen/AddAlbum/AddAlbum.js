import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Screen from '../../../components/Screen'
import ImageInput from '../../../components/ImageInput';
import colors from '../../../config/colors';
import AddMusic from './AddMusic';
import AlbumDetail from './AlbumDetail';
import FormStepper from '../../../components/Stepper';
import AppText from '../../../components/AppText';

 function AddAlbum() {
 //This is the form initial Data
  const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const [currentStep, setCurrentStep] = useState(0);
  

 //Move to the next component of the Step array

  const handleNextSteps =(nextData)=>{
     setData(prev =>({...prev,...nextData}))
     setCurrentStep(prev => prev + 1);
     
  }

//Move to the previous component of the Step array and mantain the user Data
  const handlePrevSteps =(nextData)=>{
     setData(prev =>({...prev,...nextData}));
     setCurrentStep(prev => prev - 1);
  }

  //Array of Screens then we use the currentStep state to move through it 
  const steps = [
    {
      label: '1',
      instuctUser:'Enter Album Details',
      component: <AlbumDetail next={handleNextSteps} data={data} />,
    },
    {
      label: '2',
      component: <AddMusic next={handleNextSteps} data={data} prev={handlePrevSteps} />,
      instuctUser:'Enter Album Details',
    },
    {
      label: '3',
      
      component: <AddMusic next={handleNextSteps} data={data} prev={handlePrevSteps} />,
    
    },
    {
      label:'4',
      component: <AddMusic next={handleNextSteps} data={data} prev={handlePrevSteps} />,
    
    }
  ]

  console.log(data);
  return (
    <Screen  showHeader={false} >
        <View style={{alignItems:'center',margin:-20}}>
          <AppText style={{color:colors.light}} >Step {steps[currentStep].label} : <Text style={{fontWeight:'bold'}}>{steps[currentStep].instuctUser}</Text></AppText>
        </View>
       <FormStepper activeStep={currentStep} steps={steps} />
      {steps[currentStep].component}
    </Screen>
  )
}

const styles = StyleSheet.create({
 uploadArtWorkView:{
  flexDirection:"row",
  marginLeft:10,
 },
 uploadText:{
  color:colors.white,
  fontSize:14,
  fontWeight:"bold",
 },
 uploadTextView:{
  marginTop:40,
  marginLeft:20,
 }

});

export default AddAlbum;