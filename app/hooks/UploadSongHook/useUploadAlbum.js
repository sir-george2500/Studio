import { getAuth } from "firebase/auth";
import { app } from "../../api/firebase"; 
import { getFirestore ,setDoc ,doc} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable , getDownloadURL,} from "firebase/storage";



export default async function useUploadAlbumFile(audioFile,ablumName,progressCallback,songCallBack) {
    console.log(audioFile);
  
  // Get the current user's id
    const userId = getAuth().currentUser.uid;  
    // Create a storage reference for the audio file
    const storage = getStorage();
    const storageRef = ref(storage, `userAlbumSongs/${userId}/${ablumName}/${audioFile.name}`);
    let songs = [];
    // Fetch the audio file data as a blob
    const response = await fetch(audioFile.uri);
    const blob = await response.blob();
  
    
  
    // Upload the file and metadata
    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);
    uploadTask.on('state_changed', (snapshot) => {
        let progressTrack = (snapshot.bytesTransferred / snapshot.totalBytes);
        progressCallback(progressTrack);
        console.log(`Upload is ${progressTrack}% done`);
    }, (error) => {
      // Handle upload error
      console.log(error);
    }, async () => {

       let url; 

       const downloadRef= uploadTask.snapshot.ref;
         
       getDownloadURL(downloadRef).then((URL)=>{
         url=URL;
        console.log(url)
         const newSong = { name: audioFile.name, url: url };
        songCallBack([...songs, newSong]);

        const firestore = getFirestore(app);
        // Create a reference to the Firestore collection where you want to store the data
       const metadata = {
          name: audioFile.name,
          artist: audioFile.artist || "unknown",
          artWork:audioFile.artWork,     
          album: ablumName,
          contentType:audioFile.type,
          url: url,
         };

       const ref = doc(firestore, `userAlbumSongs/${userId}/${ablumName.replace(/\s/g, '')}/${audioFile.name.replace(/\s/g, '')}`);
       
        try {
        setDoc(ref, metadata).then(()=>console.log("Success meta data Uploaded",audioFile.artword)).catch(e=>console.log("Error on Upload",e))
        } catch (error) {
          console.log("Error while uploading meta data",error);
        }
         
       }).catch((e)=>console.log("failed to get the download url"))
        
          
   });
}
