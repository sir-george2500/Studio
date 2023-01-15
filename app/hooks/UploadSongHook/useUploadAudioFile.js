import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable} from "firebase/storage";

export default async function uploadAddSongFile(audioFile, progressCallback) {
    // Get the current user's id
    const userId = getAuth().currentUser.uid;  
    // Create a storage reference for the audio file
    const storage = getStorage();
    const storageRef = ref(storage, `userSongs/${userId}/${audioFile.name}`);
  
    // Fetch the audio file data as a blob
    const response = await fetch(audioFile.uri);
    const blob = await response.blob();
  
    // Create file metadata including the content type
    const metadata = {
      contentType: audioFile.type,
    };
  
    // Upload the file and metadata
    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);
    uploadTask.on('state_changed', (snapshot) => {
        let progressTrack = (snapshot.bytesTransferred / snapshot.totalBytes);
        progressCallback(progressTrack);
        console.log(`Upload is ${progressTrack}% done`);
    }, (error) => {
      // Handle upload error
      console.log(error);
    }, () => {
      // Upload completed successfully
      console.log('Upload completed successfully');
    });
}
