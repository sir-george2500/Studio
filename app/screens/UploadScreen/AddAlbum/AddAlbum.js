import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Screen from '../../../components/Screen'
import ImageInput from '../../../components/ImageInput';
import colors from '../../../config/colors';
import AddMusic from './AddMusic';
import AlbumDetail from './AlbumDetail';
import FormStepper from '../../../components/Stepper';

 function AddAlbum() {

  const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
  })
  const totalPages = 2;
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
  const steps = [
    {
      label: '1',
      component: <AlbumDetail next={handleNextSteps} data={data} />,
    },
    {
      label: '2',
      component: <AddMusic next={handleNextSteps} data={data} prev={handlePrevSteps} />,
    
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

  return (
    <Screen>

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