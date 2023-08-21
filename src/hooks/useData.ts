import {
  OrderByDirection,
  doc,
  collection as docs,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";

export const useData = (
  collection: "stories",
  field: "index",
  direction?: OrderByDirection,
  id?: string
) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (!id) {
        const snapshot = await getDocs(query(docs(firestore, collection), orderBy(field, direction))); // prettier-ignore
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } else {
        const snapshot = await getDoc(doc(firestore, collection, id));
        setData({ id, ...snapshot.data() });
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  return { data, isLoading };
};
