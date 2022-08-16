import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'resource/Api';

const Cast = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.cast(movieId);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, []);

 

  return (
    <ul>
      {data.map((el,idx) => (
        <li key={el.id + idx}>
          {el['profile_path'] ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${el['profile_path']}`}
              alt={el.name}
              width="200px"
              height="300px"
            />
          ) : (
            <img
              src="https://as2.ftcdn.net/v2/jpg/03/25/37/33/1000_F_325373321_nq44026wWts7e0C2DMjQqV7kdHEKRn14.jpg"
              alt="notPhoto"
              width="200px"
              height="300px"
            />
          )}
          <div>
            <p>
              <b>Name: </b> {el.name}
            </p>
            <p>
              <b>Character: </b> {el.character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;