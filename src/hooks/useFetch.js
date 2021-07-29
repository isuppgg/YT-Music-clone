import { useState, useEffect } from 'react';

export const useFetch = url => {
   const [data, setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function getData(url) {
         try {
            const res = await fetch(url);

            if (!res.ok)
               throw {
                  error: true,
                  status: res.status,
                  statusText: res.statusText || 'ocurrio un error',
               };

            const json = await res.json();
            setIsPending(false);
            setData(json);
            setError({ err: false });
         } catch (err) {
            setIsPending(true);
            setError(err);
         }
      }
      getData(url);
   }, [url]);

   return { data, isPending, error };
};
