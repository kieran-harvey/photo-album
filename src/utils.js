export const saveToLocalStorage = (data, param) => {
  if (param === "album") {
    localStorage.setItem("albumData", JSON.stringify(data));
  } else {
    localStorage.setItem("photoData", JSON.stringify(data));
  }
};

export const getFromLocalStorage = (param) => {
  if (param === "album") {
    if (localStorage.getItem("albumData")) {
      return JSON.parse(localStorage.getItem("albumData"));
    }
  } else {
    if (localStorage.getItem("photoData")) {
      return JSON.parse(localStorage.getItem("photoData"));
    }
  }
};

export const getFirstImageFromAlbum = (id) => {
  const photos = JSON.parse(localStorage.getItem("photoData"));
  const photo = photos.find((item) => item.albumId === id);
  return photo.thumbnailUrl;
};

export const getPhotoAlbum = (id) => {
  const photos = JSON.parse(localStorage.getItem("photoData"));
  return photos.filter((item) => item.albumId === id);
};

export const getAlbumInfo = (id) => {
  const albums = JSON.parse(localStorage.getItem("albumData"));
  return albums.filter((album) => album.id === id)[0];
};
