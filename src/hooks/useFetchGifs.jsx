import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

export default function useFetchGists(category) {
  const [state, setState] = useState({
    data    : [],
    loading : true,
  });

  useEffect(() => {
    getGifs(category)
      .then((imgs) => {
        setTimeout(() => {
          setState({
            data    : imgs,
            loading : false,
          });
        }, 2500);
      });
  }, [category]);

  return state;
}
