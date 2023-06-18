import React, { useState } from "react";
import { getPhotoAlbum, getAlbumInfo } from "../../utils";
import { useParams } from "react-router-dom";
import "./album-detail.css";

const AlbumDetails = () => {
  const { id } = useParams();
  const photoAlbum = getPhotoAlbum(parseInt(id));
  const albumInfo = getAlbumInfo(parseInt(id));
  const [clickedImage, setClickedImage] = useState();
  const [showModal, setShowModal] = useState(false);
  const setImage = (id) => {
    const photo = photoAlbum.filter((photo) => photo.id === parseInt(id));
    setClickedImage(photo);
    setShowModal(!showModal);
  };
  return (
    <>
      <div>
        <div className="album-details-container">
          <div className="left-side">
            <div className="left-side-content">
              <img
                src={photoAlbum[0]?.thumbnailUrl}
                alt="thumbnailleft"
                className="left-side-img"
              />
              <p className="title">
                <b>Album Title:</b>
                {albumInfo?.title}
              </p>
              <p className="id">
                <b>Album Id:</b>
                {albumInfo?.id}
              </p>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-photo-count">
              <span>Photos:{photoAlbum.length}</span>
            </div>
            <div className="right-side-content-container">
              {photoAlbum.map((item, idx) => (
                <div className="right-side-content" key={idx}>
                  <img
                    src={item?.thumbnailUrl}
                    alt="mini"
                    className="listImg"
                    data-id={item.id}
                    onClick={(e) =>
                      setImage(e.currentTarget.getAttribute("data-id"))
                    }
                  />
                  <span
                    className="photo-title"
                    onClick={(e) =>
                      setImage(e.currentTarget.getAttribute("data-id"))
                    }
                  >
                    {item?.title}
                  </span>
                  <span className="photo-id">{item?.id}</span>
                  <span className="album-id">{item?.albumId}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <div className="modal" onClick={() => setShowModal(!showModal)}>
          <div className="modal-main" onClick={(e) => e.stopPropagation()}>
            <span
              className="close-button"
              onClick={() => setShowModal(!showModal)}
            >
              X
            </span>
            <h4>{clickedImage[0]?.title}</h4>
            <img src={clickedImage[0]?.url} alt="" className="img-large" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AlbumDetails;
