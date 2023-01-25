import * as DocumentPicker from 'expo-document-picker';



export default async function useSelectAudioFile() {
  try {
    const audioFile = await DocumentPicker.getDocumentAsync({
      type: 'audio/*',
    });

    if (audioFile && audioFile.name) {
      // Use fetch to retrieve the audio file
      
      const result = {
        modal: true,
        audioFile,
      };
      return result;
    } else {
      console.error('Invalid audio file');
    }
  } catch (error) {
    console.log(error);
  }
}
