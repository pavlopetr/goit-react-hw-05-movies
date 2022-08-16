import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'resource/Api';
import SearchForm from 'components/SearchForm/SearchForm';
import List from 'components/List/List';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const queryURL = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryURL === '') {
      return;
    }
    setPage(1);

    const data = async () => {
      try {
        const response = await api.search(queryURL, page);
        setData(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, [queryURL, page]);

  return (
    <>
      <SearchForm setData={setData} setSearchParams={setSearchParams} />

      {data.length !== 0 && queryURL !== '' && <List data={data} />}
    </>
  );
};

export default Movies;