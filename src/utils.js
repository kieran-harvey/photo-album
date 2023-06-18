export const saveToLocalStorage = (data, param) => {
  const now = Date.now() + 3600 * 1000 * 24;
  const item = {
    data: data,
    expiry: now,
  };
  if (param === "album") {
    localStorage.setItem("albumData", JSON.stringify(item));
  } else {
    localStorage.setItem("photoData", JSON.stringify(item));
  }
};

export const getFromLocalStorage = (param) => {
  const albumData = JSON.parse(localStorage.getItem("albumData"));
  const photoData = JSON.parse(localStorage.getItem("photoData"));
  if (param === "album") {
    if (albumData && albumData.expiry > Date.now()) {
      return albumData.data;
    }
  } else {
    if (photoData && photoData.expiry > Date.now()) {
      return photoData.data;
    }
  }
};

export const getFirstImageFromAlbum = (id) => {
  const photos = JSON.parse(localStorage.getItem("photoData"));
  const photo = photos.data.find((item) => item.albumId === id);
  return photo.thumbnailUrl;
};

export const getPhotoAlbum = (id) => {
  const photos = JSON.parse(localStorage.getItem("photoData"));
  return photos.data.filter((item) => item.albumId === id);
};

export const getAlbumInfo = (id) => {
  const albums = JSON.parse(localStorage.getItem("albumData"));
  return albums.data.filter((album) => album.id === id)[0];
};
