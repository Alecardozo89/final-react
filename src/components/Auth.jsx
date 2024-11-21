import '../App.css';
import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import ImagenLogin from '../assets/rb_936.png'
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Controla si mostrar el Login o el Registro
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const navigate = useNavigate()
  // Función para registrar un nuevo usuario
  const registrarUsuario = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, contraseña);
      console.log("Usuario registrado");
    } catch (error) {
      console.error(error.message);
    }
  };

  // Función para iniciar sesión con un usuario
  const iniciarSesion = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, contraseña);
      console.log("Sesión iniciada");
      navigate('/home')
    } catch (error) {
      console.error(error.message);
      alert('Error de usuario o contraseña')
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      <div className="row w-100">
        {/* Columna para el formulario */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {/* Botones para alternar entre Login y Registro */}
              <div className="d-flex justify-content-between mb-3">
                <button
                  className={`btn ${isLogin ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setIsLogin(true)}
                >
                  Iniciar Sesión
                </button>
                <button
                  className={`btn ${!isLogin ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setIsLogin(false)}
                >
                  Registrarse
                </button>
              </div>
  
              {/* Formulario de Login */}
              {isLogin ? (
                <div>
                  <h3 className="mb-3">Iniciar Sesión</h3>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={iniciarSesion}
                      className="btn btn-primary w-100"
                    >
                      Iniciar Sesión
                    </button>
                  </form>
                </div>
              ) : (
                // Formulario de Registro
                <div>
                  <h3 className="mb-3">Registrarse</h3>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={registrarUsuario}
                      className="btn btn-primary w-100"
                    >
                      Registrarse
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
  
        {/* Columna para la imagen */}
        <div className="col-md-6">
          <img src={ImagenLogin} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
  
};

export default Auth;
