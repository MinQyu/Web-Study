import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{details.title}</h2>
      <hr />
      <div className={styles.information_box}>
        <img
          src={details.medium_cover_image}
          alt="img"
          className={styles.cover_img}
        />
        <div className={styles.information_box_content}>
          <p>
            <span>year</span>
            {details.year}
          </p>
          <p>
            <span>genres</span>
            {details.genres}
          </p>
          <p>
            <span>rating</span>
            {details.rating}
          </p>
          <p>
            <span>like</span>
            {details.like_count}
          </p>
          <p className={styles.discription}>{details.description_full}</p>
        </div>
      </div>
    </div>
  );
}
export default Detail;
