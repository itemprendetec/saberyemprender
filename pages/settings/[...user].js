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
                Configuraión del usuario
              </h1>
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
                            eInput.defaultValue = data?.OBSERVACIONES
                            eInput.value = data?.OBSERVACIONES
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
                              eInput.defaultValue = data?.OBSERVACIONES

                              const res = await updateField(data);
                              console.log(">>>", res)
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
                        type="number"
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
                    for="settings-timezone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Carrera
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={data.ASSIGN}
                    required
                  />
                </div>
                <div>
                  <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Save all
                  </button>
                </div>
              </div>
              <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div class="flow-root">
                  <h3 class="text-xl font-semibold dark:text-white">
                    RONDA {data.ROUND}
                  </h3>
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

                              const res = await updateField(data);
                              console.log(">>>", res)
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
                        type="number"
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

                              const res = await updateField(data);
                              console.log(">>>", res)
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
                          data.CEDULA = e.target.value
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

                              const res = await updateField(data);
                              console.log(">>>", res)
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
                          data.TELEFONO = e.target.value
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

                              const res = await updateField(data);
                              console.log(">>>", res)
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
                        <span className="block">Turno</span>
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

                              const res = await updateField(data);
                              console.log(">>>", res)
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
                      <input
                        type="text"
                        name="turn"
                        id="inputTurno"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder={
                            data.HORARIO.turno == 0 ? "Matutino" : "Vespertino"
                        }
                        onChange={(e) => {
                            const a = String(e.target.value).toLowerCase == "matutino" ? 0 : 1
                          data.HORARIO.turno = a
                        }}
                        disabled={true}
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="dia"
                        class="flex justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <span className="block">Dias</span>
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

                              const res = await updateField(data);
                              console.log(">>>", res)
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
                      <input
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
                        
                      />
                    </div>  
                    
                    

                    <div class="col-span-6 sm:col-full">
                      <button
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        type="submit"
                      >
                        Save all
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
