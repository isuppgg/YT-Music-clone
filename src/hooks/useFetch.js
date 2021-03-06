import { useState, useEffect } from 'react';

export const useFetch = url => {
   const [data, setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getData = async endpoint => {
         try {
            const res = await fetch(endpoint);

            if (!res.ok) {
               const err = new Error({
                  error: true,
                  status: res.status,
                  statusText: res.statusText || 'ocurrio un error',
               });
               throw err;
            }

            const json = await res.json();
            setIsPending(false);
            setData(json);
            setError({ err: false });
         } catch (err) {
            setIsPending(true);
            setError(err);
         }
      };
      getData(url);
   }, [url]);

   return { data, isPending, error };
};
