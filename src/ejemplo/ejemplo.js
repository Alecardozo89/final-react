

/*
return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              {/* Botones para alternar entre Login y Registro }
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

              {/* Formulario de Login }
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
      </div>
    </div>
  );

<div>
      <h1 className="welcomeh1">Bienvenido</h1>
      <div className="productos-listado">
        {productos.map((producto, index) => (
          <div key={index} className="producto">
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <p>SKU: {producto.sku}</p>
            <p>{producto.descripcion}</p>
          </div>
        ) )}
      </div>
    </div>

*/ 


