import React, { useState, useEffect} from "react";
import styles from './styles.css'
import axios from 'axios'

function InnerExample() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("http://localhost:5000/")
      .then((response) => {
        setContacts(response.data);
        setError(null);
      })
      .catch(setError);
  }, []);

	return (
		<div>
			<p>Hello World</p>
			<p>{contacts['time']}</p>
		</div>
	);
}

export default InnerExample