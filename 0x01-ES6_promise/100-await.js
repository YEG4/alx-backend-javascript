import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto().catch(() => ({
      photo: null,
      user: null,
    }));
    const user = await createUser();
    return { photo, user };
  } catch (e) {
    return { photo: null, user: null };
  }
}
