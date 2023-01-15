import * as DocumentPicker from 'expo-document-picker';


export default  async function useSelectAudioFile() {

    try {
      const audioFile = await DocumentPicker.getDocumentAsync({
        type: 'audio/*',
      });
      

     if( audioFile && audioFile.name){
      
      let  result = {
            modal:true,
            audioFile:audioFile,
          }
       return result; 
        
    }else{
      console.error('Invalid audio file');
    } 
     
    } catch (error) {
      console.log(error);
    }
  }