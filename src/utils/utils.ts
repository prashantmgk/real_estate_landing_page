import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const storage = getStorage();

async function uploadImage(image) {
   const storageRef = ref(storage, `/images/${Date.now()}-${image.name}`);

   const response = await uploadBytes(storageRef, image);
   const url = await getDownloadURL(response.ref);
   return url;
}

export async function uploadImages(images) {
   const imagePromises = Array.from(images, (image) => uploadImage(image));

   const imageRes = await Promise.all(imagePromises);
   return imageRes;
}


export async function uploadVideo(video) {
   const storageRef = ref(storage, `/videos/${Date.now()}-${video.name}`);

   const response = await uploadBytes(storageRef, video);
   const url = await getDownloadURL(response.ref);
   return url;
}


export async function deleteImage(url) {
   const imageRef = ref(storage, url);
   await deleteObject(imageRef);
}

export async function deleteImages(urls) {
   const imagePromises = urls.map((url) => deleteImage(url));
   await Promise.all(imagePromises);
}

export async function deleteVideo(url) {
   const videoRef = ref(storage, url);
   await deleteObject(videoRef);
}