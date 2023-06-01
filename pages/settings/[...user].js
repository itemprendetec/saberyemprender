import withAuth from "@/auth/withAuth";
import { useUser } from "@/auth/useUser";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Settings = ({ data }) => {
  // const router = useRouter();
  // const { user } = router.query;

  const { user, logout } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) { setLoading(false) };
  }, [])


  const updateField = async (upd) => {
    const res = await fetch(`http://localhost:3000/api/updateUser`, {
      method: "PUT",
      body: JSON.stringify(upd),
    });
    return res.json();
  }

  const deleteField = async (upd) => {
    const res = await fetch(`http://localhost:3000/api/deleteUser`, {
      method: "POST",
      body: JSON.stringify(upd),
      
    });
    console.log(JSON.stringify(upd))
    return res.json();
  }

  //req,res,JSON.stringify(upd)
  return (
    <main className="">
      {loading ? <>
        <div className="flex h-screen w-screen justify-center items-center" role="status">
          <svg aria-hidden="true" class="w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Cargando</span>
        </div>
      </> : <>
        {user?.email && (<>
          
          <div class="grid h-screen grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
            <div class="mb-4 col-span-full xl:mb-2">
              <nav class="flex mb-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                  <li class="inline-flex items-center">
                    <a
                      href="http://localhost:3000/"
                      class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                    >
                      <svg
                        class="w-5 h-5 mr-2.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <a
                        href="#"
                        class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                      >
                        Users
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                        aria-current="page"
                      >
                        Settings
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                Información del usuario
              </h1>
              <div class="relative m-4">
                  <button
                  onClick={async () => {
                         
                    const res = await deleteField(data);
                    
                  }}
                   class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 absolute right-0"
                  id="delete">
                   Eliminar Usuario
                  </button>
                </div>
            </div>

            <div class="col-span-full xl:col-auto">
              <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                  <img
                    class="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                    src={
                      "https://ui-avatars.com/api/?name=" +
                      String(data.NOMBRE_APELLIDO).replace(" ", "+") +
                      "&size=128"
                    }
                    alt="Jese picture"
                  />
                  <div>
                    <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                      {data.NOMBRE_APELLIDO}
                    </h3>


                  </div>
                  
                      <button
                      value= {data.ESPERA == "Si" ? "Si" : "No"}
                        onClick={async (e) => {
                          //event.target.value = 
                          //console.log(e.target.value)      
                          data.ESPERA = e.target.value == "Si" ? "No" : "Si"
                          console.log(data.ESPERA)
                          const res = await updateField(data);   
                          window.location.reload();
                        }}
                         class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        id=" save1">
                         En espera: {data.ESPERA == "Si" ? "Si" : "No"}
                  </button>
                      
                  
                  

                </div>
              </div>
              <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 class="mb-4 text-xl font-semibold dark:text-white">Curso</h3>
                <div class="mb-4">
                <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Observaciones</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditObservaciones" onClick={() => {
                            const eInput = document.getElementById("inputObservaciones");
                            const edInput = document.getElementById("inputObservacionesEdit");
                            const bEdit = document.getElementById("buttonEditObservaciones");
                            eInput.disabled = false;
                            eInput.defaultValue = data.OBSERVACIONES== undefined ? "" : data.OBSERVACIONES
                            eInput.value = data.OBSERVACIONES== undefined ? "" : data.OBSERVACIONES
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputObservacionesEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputObservaciones");
                              eInput.disabled = false;
                              eInput.defaultValue = data.OBSERVACIONES== undefined ? "" : data.OBSERVACIONES

                              
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button onClick={() => {
                              const eInput = document.getElementById("inputObservaciones");
                              const edInput = document.getElementById("inputObservacionesEdit");
                              const bEdit = document.getElementById("buttonEditObservaciones");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="inputObservaciones"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={data?.OBSERVACIONES}
                        onChange={(e) => {
                          data.OBSERVACIONES = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                <div class="mb-6">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Carrera: {data.ASSIGN}</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditCarrera" onClick={() => {
                            const eInput = document.getElementById("inputCarrera");
                            const edInput = document.getElementById("inputCarreraEdit");
                            const bEdit = document.getElementById("buttonEditCarrera");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASSIGN
                            eInput.value = data?.ASSIGN
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputCarreraEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputCarrera");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASSIGN

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputCarrera");
                              const edInput = document.getElementById("inputCarreraEdit");
                              const bEdit = document.getElementById("buttonEditCarrera");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <select disabled={true} id="inputCarrera" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                              
                              <option value = "COCINA"> COCINA</option>
                              <option value = "PANADERIA"> PANADERIA</option>
                              <option value = "BARISMO"> BARISMO</option>
                              <option value = "REPOSTERIA"> REPOSTERIA</option>

                              onChange={(e) => {
                          data.ASSIGN = e.target.value
                        }}
                        
                            </select>
                </div>
                <div>
                  <button
                  onClick={async () => {
                          
                    const res = await updateField(data);
                    window.location.reload();
                  }}
                   class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  id=" save1">
                   Guardar
                  </button>
                </div>
              </div>
              <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div class="flow-root">
                  <div>
                    <h3 class="text-xl font-semibold dark:text-white">
                      RONDA {data.ROUND}
                    </h3>
                  </div>
                  
                  
                </div>
              </div>
              <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 class="mb-4 text-xl font-semibold dark:text-white">Asistencias</h3>
                <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-2">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Asistencia 1</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditAsistencia1" onClick={() => {
                            const eInput = document.getElementById("inputAsistencia1");
                            const edInput = document.getElementById("inputAsistencia1Edit");
                            const bEdit = document.getElementById("buttonEditAsistencia1");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASISTENCIA_1
                            eInput.value = data?.ASISTENCIA_1
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputAsistencia1Edit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputAsistencia1");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASISTENCIA_1

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputAsistencia1");
                              const edInput = document.getElementById("inputAsistencia1Edit");
                              const bEdit = document.getElementById("buttonEditAsistencia1");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <input
                        type="text"
                        name="country"
                        id="inputAsistencia1"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                        placeholder={data?.ASISTENCIA_1}
                        onChange={(e) => {
                          data.ASISTENCIA_1 = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Asistencia 2</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditAsistencia2" onClick={() => {
                            const eInput = document.getElementById("inputAsistencia2");
                            const edInput = document.getElementById("inputAsistencia2Edit");
                            const bEdit = document.getElementById("buttonEditAsistencia2");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASISTENCIA_2
                            eInput.value = data?.ASISTENCIA_2
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputAsistencia2Edit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputAsistencia2");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASISTENCIA_2

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputAsistencia2");
                              const edInput = document.getElementById("inputAsistencia2Edit");
                              const bEdit = document.getElementById("buttonEditAsistencia2");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <input
                        type="text"
                        name="country"
                        id="inputAsistencia2"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                        placeholder={data?.ASISTENCIA_2}
                        onChange={(e) => {
                          data.ASISTENCIA_2 = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Asistencia 3</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditAsistencia3" onClick={() => {
                            const eInput = document.getElementById("inputAsistencia3");
                            const edInput = document.getElementById("inputAsistencia3Edit");
                            const bEdit = document.getElementById("buttonEditAsistencia3");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASISTENCIA_3
                            eInput.value = data?.ASISTENCIA_3
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputAsistencia3Edit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputAsistencia3");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASISTENCIA_3

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputAsistencia3");
                              const edInput = document.getElementById("inputAsistencia3Edit");
                              const bEdit = document.getElementById("buttonEditAsistencia3");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <input
                        type="text"
                        name="country"
                        id="inputAsistencia3"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                        placeholder={data?.ASISTENCIA_3}
                        onChange={(e) => {
                          data.ASISTENCIA_3 = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Asistencia 4</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditAsistencia4" onClick={() => {
                            const eInput = document.getElementById("inputAsistencia4");
                            const edInput = document.getElementById("inputAsistencia4Edit");
                            const bEdit = document.getElementById("buttonEditAsistencia4");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASISTENCIA_4
                            eInput.value = data?.ASISTENCIA_4
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputAsistencia4Edit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputAsistencia4");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASISTENCIA_4

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputAsistencia4");
                              const edInput = document.getElementById("inputAsistencia4Edit");
                              const bEdit = document.getElementById("buttonEditAsistencia4");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <input
                        type="text"
                        name="country"
                        id="inputAsistencia4"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                        placeholder={data?.ASISTENCIA_4}
                        onChange={(e) => {
                          data.ASISTENCIA_4 = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Asistencia 5</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditAsistencia5" onClick={() => {
                            const eInput = document.getElementById("inputAsistencia5");
                            const edInput = document.getElementById("inputAsistencia5Edit");
                            const bEdit = document.getElementById("buttonEditAsistencia5");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASISTENCIA_5
                            eInput.value = data?.ASISTENCIA_5
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputAsistencia5Edit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputAsistencia5");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASISTENCIA_5

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputAsistencia5");
                              const edInput = document.getElementById("inputAsistencia5Edit");
                              const bEdit = document.getElementById("buttonEditAsistencia5");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <input
                        type="text"
                        name="country"
                        id="inputAsistencia5"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                        placeholder={data?.ASISTENCIA_5}
                        onChange={(e) => {
                          data.ASISTENCIA_5 = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Asistencia 6</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditAsistencia6" onClick={() => {
                            const eInput = document.getElementById("inputAsistencia6");
                            const edInput = document.getElementById("inputAsistencia6Edit");
                            const bEdit = document.getElementById("buttonEditAsistencia6");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASISTENCIA_6
                            eInput.value = data?.ASISTENCIA_6
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputAsistencia6Edit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputAsistencia6");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASISTENCIA_6

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputAsistencia6");
                              const edInput = document.getElementById("inputAsistencia6Edit");
                              const bEdit = document.getElementById("buttonEditAsistencia6");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <input
                        type="text"
                        name="country"
                        id="inputAsistencia6"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                        placeholder={data?.ASISTENCIA_6}
                        onChange={(e) => {
                          data.ASISTENCIA_6 = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Asistencia 7</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditAsistencia7" onClick={() => {
                            const eInput = document.getElementById("inputAsistencia7");
                            const edInput = document.getElementById("inputAsistencia7Edit");
                            const bEdit = document.getElementById("buttonEditAsistencia7");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASISTENCIA_7
                            eInput.value = data?.ASISTENCIA_7
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputAsistencia7Edit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputAsistencia7");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASISTENCIA_7

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputAsistencia7");
                              const edInput = document.getElementById("inputAsistencia7Edit");
                              const bEdit = document.getElementById("buttonEditAsistencia7");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <input
                        type="text"
                        name="country"
                        id="inputAsistencia7"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                        placeholder={data?.ASISTENCIA_7}
                        onChange={(e) => {
                          data.ASISTENCIA_7 = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Asistencia 8</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditAsistencia8" onClick={() => {
                            const eInput = document.getElementById("inputAsistencia8");
                            const edInput = document.getElementById("inputAsistencia8Edit");
                            const bEdit = document.getElementById("buttonEditAsistencia8");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.ASISTENCIA_8
                            eInput.value = data?.ASISTENCIA_8
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputAsistencia8Edit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputAsistencia7");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.ASISTENCIA_8

                             
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button
                             onClick={() => {
                              const eInput = document.getElementById("inputAsistencia8");
                              const edInput = document.getElementById("inputAsistencia8Edit");
                              const bEdit = document.getElementById("buttonEditAsistencia8");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      
                      <input
                        type="text"
                        name="country"
                        id="inputAsistencia8"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                        placeholder={data?.ASISTENCIA_8}
                        onChange={(e) => {
                          data.ASISTENCIA_8 = e.target.value
                        }}
                        disabled={true}
                      />
                </div>
                </div>
                <br></br>
                <div>
                  <button
                  onClick={async () => {
                          
                    const res = await updateField(data);
                    window.location.reload();
                  }}
                   class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  id=" save1">
                   Guardar
                  </button>
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 class="mb-4 text-xl font-semibold dark:text-white">
                  Información general
                </h3>
                
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6">
                    <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Nombre y Apellido</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditName" onClick={() => {
                            const eInput = document.getElementById("inputName");
                            const edInput = document.getElementById("inputNameEdit");
                            const bEdit = document.getElementById("buttonEditName");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.NOMBRE_APELLIDO
                            eInput.value = data?.NOMBRE_APELLIDO
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputNameEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputName");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.NOMBRE_APELLIDO

                              
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button onClick={() => {
                              const eInput = document.getElementById("inputName");
                              const edInput = document.getElementById("inputNameEdit");
                              const bEdit = document.getElementById("buttonEditName");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="inputName"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={data?.NOMBRE_APELLIDO}
                        onChange={(e) => {
                          data.NOMBRE_APELLIDO = e.target.value
                        }}
                        disabled={true}
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Cedula</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditCedula" onClick={() => {
                            const eInput = document.getElementById("inputCedula");
                            const edInput = document.getElementById("inputCedulaEdit");
                            const bEdit = document.getElementById("buttonEditCedula");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.CEDULA
                            eInput.value = data?.CEDULA
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputCedulaEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputCedula");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.CEDULA

                              
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button onClick={() => {
                              const eInput = document.getElementById("inputCedula");
                              const edInput = document.getElementById("inputCedulaEdit");
                              const bEdit = document.getElementById("buttonEditCedula");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      <input
                        type="number"
                        name="country"
                        id="inputCedula"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={data?.CEDULA}
                        onChange={(e) => {
                          data.CEDULA = parseInt(e.target.value)
                        }}
                        disabled={true}
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Correo</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditCorreo" onClick={() => {
                            const eInput = document.getElementById("inputCorreo");
                            const edInput = document.getElementById("inputCorreoEdit");
                            const bEdit = document.getElementById("buttonEditCorreo");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.CORREO
                            eInput.value = data?.CORREO
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputCorreoEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputCorreo");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.CORREO

                              
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button onClick={() => {
                              const eInput = document.getElementById("inputCorreo");
                              const edInput = document.getElementById("inputCorreoEdit");
                              const bEdit = document.getElementById("buttonEditCorreo");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="inputCorreo"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={data?.CORREO}
                        onChange={(e) => {
                          data.CORREO = e.target.value
                        }}
                        disabled={true}
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="phone"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Teléfono</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditTelefono" onClick={() => {
                            const eInput = document.getElementById("inputTelefono");
                            const edInput = document.getElementById("inputTelefonoEdit");
                            const bEdit = document.getElementById("buttonEditTelefono");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.TELEFONO
                            eInput.value = data?.TELEFONO
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputTelefonoEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputTelefono");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.TELEFONO

                              
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button onClick={() => {
                              const eInput = document.getElementById("inputTelefono");
                              const edInput = document.getElementById("inputTelefonoEdit");
                              const bEdit = document.getElementById("buttonEditTelefono");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="inputTelefono"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={data?.TELEFONO}
                        onChange={(e) => {
                          data.TELEFONO = parseInt(e.target.value)
                        }}
                        disabled={true}
                      />
                    </div>
                    
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="seccion"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Sección</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditSeccion" onClick={() => {
                            const eInput = document.getElementById("inputSeccion");
                            const edInput = document.getElementById("inputSeccionEdit");
                            const bEdit = document.getElementById("buttonEditSeccion");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.SECCION
                            eInput.value = data?.SECCION
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputSeccionEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputSeccion");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.SECCION

                              
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button onClick={() => {
                              const eInput = document.getElementById("inputSeccion");
                              const edInput = document.getElementById("inputSeccionEdit");
                              const bEdit = document.getElementById("buttonEditSeccion");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="seccion"
                        id="inputSeccion"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={data?.SECCION}
                        onChange={(e) => {
                          data.SECCION = e.target.value
                        }}
                        disabled={true}
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="turn"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Turno: {data?.HORARIO.turno == 0 ? "Matutino" : "Vespertino"}</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditTurno" onClick={() => {
                            const eInput = document.getElementById("inputTurno");
                            const edInput = document.getElementById("inputTurnoEdit");
                            const bEdit = document.getElementById("buttonEditTurno");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.HORARIO.turno == 0 ? "Matutino" : "Vespertino"
                            eInput.value = data?.HORARIO.turno == 0 ? "Matutino" : "Vespertino"
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputTurnoEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputTurno");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.HORARIO.turno == 0 ? "Matutino" : "Vespertino"

                              
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button onClick={() => {
                              const eInput = document.getElementById("inputTurno");
                              const edInput = document.getElementById("inputTurnoEdit");
                              const bEdit = document.getElementById("buttonEditTurno");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                       { /* <input
                        type="text"
                        name="turn"
                        id="inputTurno"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={
                            data.HORARIO.turno == 0 ? "Matutino" : "Vespertino"
                        }
                        onChange={(e) => {
                           data.HORARIO.turno  = e.target.value
                        }}
                        disabled={true}
                      /> */}

                      <select id="inputTurno" disabled={true}
                     onChange={(e) => {
                            data.HORARIO.turno  = parseInt(e.target.value)
                        }} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                              <option value = "0" > MATUTINO</option>
                              <option value = "1"> VESPERTINO</option>
                            
                            </select>
                    </div>
                    

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="dia"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Dias: {data?.HORARIO.dias == 0 ? "Lunes y martes" : "Miercoles y Jueves"}</span>
                        <div className="flex space-x-2">
                          <button id="buttonEditDia" onClick={() => {
                            const eInput = document.getElementById("inputDia");
                            const edInput = document.getElementById("inputDiaEdit");
                            const bEdit = document.getElementById("buttonEditDia");
                            eInput.disabled = false;
                            eInput.defaultValue = data?.HORARIO.dias == 0 ? "Lunes y martes" : "Miercoles y Jueves"
                            eInput.value = data?.HORARIO.dias == 0 ? "Lunes y martes" : "Miercoles y Jueves"
                            edInput.className = "flex space-x-1"
                            bEdit.className = "hidden"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-gray-400" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                          <div id="inputDiaEdit" className="hidden space-x-1">
                            <button onClick={async () => {
                              const eInput = document.getElementById("inputDia");
                              eInput.disabled = false;
                              eInput.defaultValue = data?.HORARIO.dias == 0 ? "Lunes y martes" : "Miercoles y Jueves"

                              
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-green-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>
                            </button>
                            <button onClick={() => {
                              const eInput = document.getElementById("inputDia");
                              const edInput = document.getElementById("inputDiaEdit");
                              const bEdit = document.getElementById("buttonEditDia");
                              eInput.disabled = true;
                              eInput.defaultValue = ""
                              eInput.value = ""
                              edInput.className = "hidden space-x-1"
                              bEdit.className = "block"
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-red-500 w-6 h-6" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </label>
                      {/*<input
                                              type="text"
                                              name="dia"
                                              id="inputDia"
                                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                              placeholder={
                                                  data.HORARIO.dias == 0 ? "Lunes y martes" : "Miercoles y Jueves"
                                              }
                                              
                                              onChange={(e) => {
                                                  const a = String(e.target.value).toLowerCase == "lunes y martes" ? 0 : 1
                                                data.HORARIO.dias = a
                                              }}
                                              disabled={true}
                                              
                                            />*/}

                      <select id="inputDia" disabled={true}
                     onChange={(e) => {
                            data.HORARIO.dias  = parseInt(e.target.value)
                        }} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                              <option value = "0"> Lunes y Martes</option>
                              <option value = "1"> Miercoles y Jueves</option>
                            
                            </select>

                    </div>  
                    
                    

                    <div class="col-span-6 sm:col-full">
                      <button onClick={async () => {
                          
                              const res = await updateField(data);
                              window.location.reload();
                            }}
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        
                        id="save2"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </>)}
      </>}
    </main>
  );
};

export async function getServerSideProps(context) {
  const { user } = context.query;

  try {
    const res = await fetch(
      `http://localhost:3000/api/getOneUser?userid=${user[0]}&c=${user[1]}`
    );

    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }

  // try {
  //   const client = await clientPromise;
  //   const db =
  // } catch (error) {

  // }

  // const data = res.json();
}
export default withAuth(Settings);
