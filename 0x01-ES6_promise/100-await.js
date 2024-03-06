import { uploadPhoto, createUser } from './utils'; // import from utils

export default async function asyncUploadUser() {
  let res = {}; // Declare res dictionary

  try { // Try photo upload and create user
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
