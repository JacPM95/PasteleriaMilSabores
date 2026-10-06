import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import ProductoCard from '../components/ProductoCard';
import CarritoItem from '../components/CarritoItem';
import { calcularTotal, formatearPrecio } from '../utils/carrito';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

function montar(elemento) {
  const contenedor = document.createElement('div');
  document.body.appendChild(contenedor);
  const root = createRoot(contenedor);
  act(() => root.render(elemento));
  return { contenedor, root };
}

describe('Pruebas unitarias de Pastelería 1000 Sabores', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('1. calcula el total del carrito', () => {
    expect(calcularTotal([{ precio: 1000, cantidad: 2 }, { precio: 500, cantidad: 1 }])).toBe(2500);
  });

  it('2. devuelve cero para un carrito vacío', () => {
    expect(calcularTotal([])).toBe(0);
  });

  it('3. formatea un precio chileno', () => {
    expect(formatearPrecio(40000)).toContain('40');
  });

  it('4. muestra el nombre de un producto', () => {
    const p = { codigo: 'A1', nombre: 'Torta de prueba', categoria: 'Tortas', precio: 1000, imagen: 'logo.png' };
    const { contenedor } = montar(<ProductoCard producto={p} agregarAlCarrito={() => {}} />);
    expect(contenedor.textContent).toContain('Torta de prueba');
  });

  it('5. muestra el precio de un producto', () => {
    const p = { codigo: 'A1', nombre: 'Torta', categoria: 'Tortas', precio: 40000, imagen: 'logo.png' };
    const { contenedor } = montar(<ProductoCard producto={p} agregarAlCarrito={() => {}} />);
    expect(contenedor.textContent).toContain('40.000');
  });

  it('6. ejecuta la función al agregar un producto', () => {
    const p = { codigo: 'A1', nombre: 'Torta', categoria: 'Tortas', precio: 1000, imagen: 'logo.png' };
    const agregar = jasmine.createSpy('agregar');
    const { contenedor } = montar(<ProductoCard producto={p} agregarAlCarrito={agregar} />);
    act(() => contenedor.querySelector('button').click());
    expect(agregar).toHaveBeenCalledWith(p);
  });

  it('7. muestra la cantidad en el encabezado', () => {
    const { contenedor } = montar(<MemoryRouter><Header cantidad={3} /></MemoryRouter>);
    expect(contenedor.textContent).toContain('Carrito (3)');
  });

  it('8. muestra el nombre del sitio en el encabezado', () => {
    const { contenedor } = montar(<MemoryRouter><Header cantidad={0} /></MemoryRouter>);
    expect(contenedor.querySelector('img').alt).toBe('Pastelería 1000 Sabores');
  });

  it('9. aumenta la cantidad de un producto', () => {
    const cambiar = jasmine.createSpy('cambiar');
    const item = { codigo: 'A1', nombre: 'Torta', precio: 1000, cantidad: 1 };
    const { contenedor } = montar(<CarritoItem item={item} cambiarCantidad={cambiar} eliminarProducto={() => {}} />);
    const botones = contenedor.querySelectorAll('button');
    act(() => botones[1].click());
    expect(cambiar).toHaveBeenCalledWith('A1', 1);
  });

  it('10. elimina un producto del carrito', () => {
    const eliminar = jasmine.createSpy('eliminar');
    const item = { codigo: 'A1', nombre: 'Torta', precio: 1000, cantidad: 1 };
    const { contenedor } = montar(<CarritoItem item={item} cambiarCantidad={() => {}} eliminarProducto={eliminar} />);
    const botones = contenedor.querySelectorAll('button');
    act(() => botones[2].click());
    expect(eliminar).toHaveBeenCalledWith('A1');
  });
});
