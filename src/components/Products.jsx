// src/pages/DetalleProducto.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProducto(docSnap.data());
      } else {
        console.log("No se encontró el producto");
      }
    };
    
    obtenerProducto();
  }, [id]);

  return (
    <div>
      {producto ? (
        <div>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <p>SKU: {producto.sku}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DetalleProducto;
