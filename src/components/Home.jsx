import '../App.css';
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    precio: 0,
    descripcion: ""
  });
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const obtenerProductos = async () => {
    try {
      const productosCollection = collection(db, "productos")
      const productosSnapshot = await getDocs(productosCollection)
      const productosList = productosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setProductos(productosList);
      setLoading(false)
      console.log(productos)
      
    } catch (error) {
      console.error("Error al cargar productos", error)
    }
    };

    useState(()=>{
      obtenerProductos();
    }), [] 
    
    console.log(productos)

    const handleChange = (event) =>{
      const {marca, modelo, precio, descripcion} = <event className="target"></event>
      setFormData({...formData, [precio]: type === "text" ? Text : Number})
    }

    const handleSubmit = async(event) =>{
      event.preventDefault();
      try {
        if(editMode){
          const productRef = doc(db, "productos", editProductId);
          await updateDoc(productRef, formData)
          alert("Porducto actualizado")
          setEditMode(false)
          setEditProductId(null)
          obtenerProductos()
        }else{
          await addDoc(collection(db, "producto"), formData)
          alert("Agregado exitoso");
          obtenerProductos()
        }
       
        } catch (error) {
          console.error("Error al guardar el producto", error);
      }
    }

    const handleEdit = async(producto) =>{
      setFormData({
        marca: producto.marca,
        modelo: producto.modelo,
        precio: producto.precio,
        descripcion: producto.descripcion
      })
      setEditMode(true)
      setEditProductId(producto.id)
    }

  

    const handleDelete = async (productoId) =>{
      try {
        await deleteDoc(doc(db, "producto", productoId))
        obtenerProductos()
      } catch (error) {
        
      }
    }

  return (
    <>
      <div className='container p-5'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label className='labelMarca'>Marca: </label>
            <div className='divControl'>
              <input 
                className='input'
                type="text" 
                name="name" 
             /*   value={formData.name}
                onChange={handleChange}
                required */
              />
            </div>
          </div>
          <div className='field'>
            <label className='labelModelo'>Modelo: </label>
            <div>
              <input 
                className='input'
                type="text"
                name='name'
              /*  value={formData.name}
                onChange={handleChange}
                required */
             />
            </div>
          </div>
          <div className='field'>
          <label className='labelPrecio'>Precio: </label>
            <div>
              <input 
                className='input'
                type="number"
                name='name'
             /*   value={formData.name}
                onChange={handleChange}
                required */
             />
            </div>
          </div>
          <div className='field'>
          <label className='labelDescripcion'>Descripcion: </label>
            <div>
              <input 
                className='input'
                type="text"
                name='name'
            /*    value={formData.name}
                onChange={handleChange}
                required */
             />
            </div>
            <div>
              <button className='btn-guardar' type='submit'>
                {/*editMode ? "Guardar cambios" : "Agregar producto"*/ }BOTON
              </button>
            </div>
          </div>
        </form>

      <table className='table is-fullwidth is-striped'>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((product) => (
            <tr key={product.id}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button onClick={()=> handleEdit(product)} className='button'>Modificar</button>
                <button onClick={()=> handleDelete(product.id)} className='button'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>
      
    </>
  );
};

export default Home;
