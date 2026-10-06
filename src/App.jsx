import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Carrito from './pages/Carrito';
import Administrador from './pages/Administrador';
import { productosIniciales } from './data/productos';

function cargarCarrito() {
  return JSON.parse(localStorage.getItem('carritoReact')) || [];
}

export default function App() {
  const [carrito, setCarrito] = useState(cargarCarrito);
  const [productos, setProductos] = useState(productosIniciales);

  useEffect(() => {
    localStorage.setItem('carritoReact', JSON.stringify(carrito));
  }, [carrito]);

  function agregarAlCarrito(producto) {
    const existe = carrito.find((item) => item.codigo === producto.codigo);
    if (existe) {
      setCarrito(carrito.map((item) =>
        item.codigo === producto.codigo
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  function cambiarCantidad(codigo, cambio) {
    setCarrito(carrito
      .map((item) => item.codigo === codigo
        ? { ...item, cantidad: item.cantidad + cambio }
        : item)
      .filter((item) => item.cantidad > 0));
  }

  function eliminarProducto(codigo) {
    setCarrito(carrito.filter((item) => item.codigo !== codigo));
  }

  function RutaProtegida({ children }) {
    return sessionStorage.getItem('adminAutenticado') === 'true'
      ? children
      : <Navigate to="/login" replace />;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cantidad={carrito.reduce((total, item) => total + item.cantidad, 0)} />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} cambiarCantidad={cambiarCantidad} eliminarProducto={eliminarProducto} vaciarCarrito={() => setCarrito([])} />} />
          <Route path="/administrador" element={<RutaProtegida><Administrador productos={productos} setProductos={setProductos} /></RutaProtegida>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
