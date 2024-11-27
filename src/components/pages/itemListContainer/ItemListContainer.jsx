import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config-firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const itemsCollection = collection(db, "productos");
    let consulta = itemsCollection;
    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }

    getDocs(consulta).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
