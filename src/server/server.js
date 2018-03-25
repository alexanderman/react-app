/** this is server persistance layer emulator, using local storage */
/** assuming localStorage is available */

const storage = window.localStorage;

function saveItem(key, jsonVal) {
  const stringVal = JSON.stringify(jsonVal);
  storage.setItem(key, stringVal);
  return Promise.resolve(jsonVal);
}

function getItem(key) {
  return Promise.resolve(JSON.parse(storage.getItem(key)));
}

function removeItem(key) {
  storage.removeItem(key);
  return Promise.resolve();
}


const api = {
  fetchUser: () => getItem('user'),
  removeUser: () => removeItem('user'),
  saveUser: (user) => saveItem('user', user),
  
  fetchAvatar: () => getItem('avatar'),
  removeAvatar: () => removeItem('avatar'),
  saveAvatar: (position) => saveItem('avatar', position)
}

export default api;
