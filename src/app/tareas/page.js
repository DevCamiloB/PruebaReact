'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const TareasPage = () => {
  const router = useRouter();
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await axios.get('http://localhost:3002/todos');
        setTareas(response.data);
        setLoading(false);
      } catch (error) {
        alert('Error obteniendo tareas');
        setLoading(false);
      }
    };

    fetchTareas();
  }, []);

  const handleSalir = () => {
    router.push('/login');
  };

  const handleCrearTarea = () => {
    router.push('/principal');
  };

  const handleEliminarTarea = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/todos/${id}`);
      setTareas(tareas.filter(tarea => tarea.id !== id));
      alert('Tarea elimninada correctamente');
    } catch (error) {
      alert('Error eliminando tarea', error);
    }
  };

  const handleActualizarTarea = async (id) => {
    try {
        const tarea = tareas.find((t) => t.id === id);
        const updatedTarea = { ...tarea, completed: !tarea.completed };

        await axios.put(`http://localhost:3002/todos/${id}`, updatedTarea);
        setTareas(tareas.map((t) => (t.id === id ? updatedTarea : t)));
        alert('Tarea actualizada correctamente');
    } catch (error) {
        alert('Error actualizando tarea', error);
    }
  };

  if (loading) {
    return <p>Cargando tareas...</p>;
  }

  return (
    <div className="bg-[#ecf3f4] min-h-screen flex">
      <aside className="bg-[#382b78] w-[221px] p-4 flex flex-col">
        <button className="text-white mb-2">Bookings</button>
        <button className="text-white mb-2">Request</button>
        <button className="text-white mt-auto" onClick={handleSalir}>Salir</button>
      </aside>
      <main className="flex-1 p-8">
        <div className="flex flex-col">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Lista de tareas</h1>
            <div className="flex mt-4">
              <div className="bg-white p-4 rounded shadow-md mr-4">
                <p>Estado Completada</p>
                <p className="text-2xl">{tareas.filter(tarea => tarea.completed).length}</p>
              </div>
              <div className="bg-white p-4 rounded shadow-md">
                <p>Estado Abierta</p>
                <p className="text-2xl">{tareas.filter(tarea => !tarea.completed).length}</p>
              </div>
            </div>
          </header>
          <section>
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Filtrar tareas"
                className="p-2 border rounded"
              />
              <button className="bg-orange-400 text-white py-2 px-4 rounded" onClick={handleCrearTarea}>
                Nueva tarea
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <div className="mb-4">
                <h2 className="font-semibold">Completadas</h2>
              </div>
              <div>
                {tareas.map(tarea => (
                  <div key={tarea.id} className="flex justify-between items-center mb-4 border-b pb-4">
                    <div>
                      <p>ID: {tarea.id}</p>
                      <p>Nombre tarea: {tarea.title}</p>
                      <p>Estado: {tarea.completed ? 'Completada' : 'Abierta'}</p>
                      <p>Fecha de creación: {new Date(tarea.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="flex items-center">
                      {tarea.completed ? (
                        <button className="bg-green-400 text-white py-2 px-4 rounded mr-2"
                        onClick={() => handleActualizarTarea(tarea.id)}>Completada</button>
                      ) : (
                        <button className="bg-yellow-400 text-white py-2 px-4 rounded mr-2" 
                        onClick={() => handleActualizarTarea(tarea.id)}>Pendiente</button>
                      )}
                      <button
                        className="bg-gray-400 text-white py-2 px-4 rounded"
                        onClick={() => handleEliminarTarea(tarea.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TareasPage;
