'use client';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const PrincipalPage = () => {
  const router = useRouter();

  const handleVerTareas = () => {
    router.push("/tareas");
  };

  const handleSalir = () => {
    router.push("/login");
  };

  const LimpiarCampos = () =>   {
    document.getElementById('taskTitle').value = "";
  };

  const handleCrearTarea = async (event) => {
    event.preventDefault();  
    const taskTitle = document.getElementById('taskTitle').value;
    const data = {
      title: taskTitle,
      completed: true,
    };
    

    try {
      const response = await axios.post('http://localhost:3002/todos', data);
      alert('Tarea creada correctamente!');
    } catch (error) {
      alert('Error en crear la tarea');
    }
  };

  return (
    <div className="bg-[#ecf3f4] flex flex-row justify-center w-full">
      <div className="bg-[#ecf3f4] overflow-hidden w-[100%] h-[950px]">
        <div className="relative h-full">
          <div className="absolute top-0 left-0 h-full w-[221px] bg-[#382b78] flex flex-col justify-start p-4">
            <button className="text-white mb-2">Bookings</button>
            <button className="text-white mb-2">Request</button>
            <button className="text-white mb-2" onClick={handleVerTareas}>Ver Tareas</button>
            <button className="text-white mt-auto" onClick={handleSalir}>Salir</button>
          </div>
          <div className="ml-[221px] p-8">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Nueva Tarea</h1>
                <div className="flex items-center">
                  <img src="/logo.png" alt="User Avatar" className="w-10 h-10 rounded-full mr-2"/>
                  <span>Dr. Sadie Nader MD</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-md">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la tarea</label>
                <input 
                  id="taskTitle"
                  type="text" 
                  className="border border-gray-300 rounded-md w-full p-2"
                  placeholder="Escribe el título de la tarea"
                  maxLength="15"
                />
                <p className="text-right text-red-500 mt-1">15 Caracteres max.</p>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2" onClick={LimpiarCampos}>Cancelar</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={handleCrearTarea}>Crear Tarea</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalPage;
