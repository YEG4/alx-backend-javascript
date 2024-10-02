import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto().catch(() => ({ photo: null, user: null }));
  const user = await createUser().catch(() => ({ photo: null, user: null }));

  return { photo: photo, user: user };
}
