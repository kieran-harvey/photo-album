import React, { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils";
import DetailCard from "../../components/detail-card/DetailCard";
import "./home.css";

const Home = () => {
  const [albumData, setAlbumData] = useState();
  const [photoData, setPhotoData] = useState();
  const [filter, setFilter] = useState("");

  const updateFilter = (e) => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  useEffect(() => {
    if (getFromLocalStorage("album")) {
      setAlbumData(getFromLocalStorage("album"));
    } else {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((data) => {
          setAlbumData(data);
          saveToLocalStorage(data, "album");
        });
    }
    if (getFromLocalStorage("photo")) {
      setPhotoData(getFromLocalStorage("photo"));
    } else {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => {
          setPhotoData(data);
          saveToLocalStorage(data, "photo");
        });
    }
  }, []);
  const getFilteredAlbumCount = () => {
    if (filter) {
      const filteredResults = albumData?.filter((item) =>
        item?.title.includes(filter)
      );
      return filteredResults.length;
    } else {
      return albumData?.length;
    }
  };
  return (
    <>
      <div>
        <div className="home-container">
          <div className="filter">
            <span>{getFilteredAlbumCount()}/100</span>
            <input
              type="text"
              className="filter-field"
              onChange={updateFilter}
              placeholder="Filter albums..."
            />
          </div>
          <div className="card-container">
            {albumData
              ?.filter((item) => {
                return item?.title.toLowerCase().includes(filter);
              })
              .map((item) => {
                return <DetailCard item={item} key={item.id} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
