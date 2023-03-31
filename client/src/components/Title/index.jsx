import React, {useState, useEffect} from "react";
import axios from "axios";
import styles from './styles.css'

function Title() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios("https://server-qnkf.onrender.com/")
      .then((response) => {
        setTitle(response.data["random_line"]);
      })
  }, []);

  return (
		<div className={styles.title}>
      <div>
        <img src="logo192.png" className={styles.pic}/>
        <h1 className={styles.titleBig}>{title}</h1>
      </div>

			<p>Repository <a href="https://github.com/jasonngap1/container-course-app">https://github.com/jasonngap1/container-course-app</a></p>
		</div>    
  );
}

export default Title;

