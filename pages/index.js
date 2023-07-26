import withAuth from "../auth/withAuth";
import { useUser } from "../auth/useUser";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import * as XLSX from 'xlsx';

const Private = ({ data }) => {
  /* function chunckArrayInGroups(arr, size) {
    var chunk = [],
      i; // declara array vacio e indice de for
    for (
      i = 0;
      i <= arr.length;
      i += size // loop que recorre el array
    )
      chunk.push(arr.slice(i, i + size)); // push al array el tramo desde el indice del loop hasta el valor size + el indicador
    return chunk;
  } */

  const { user, logout } = useUser();
  const [users, setDataUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [searchfield, setSearchfield] = useState('');
  const [asignacion, setAsignacion] = useState('');
  const [standby, setStandby] = useState('');
  const [limbo, setLimbo] = useState('');
  const [ronda, setRonda] = useState('');

  const [filteredList, setFilteredList] = useState();

  useEffect(() => {

    setDataUsers(data);
    setFilteredList(data);
    setLoading(false);
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
    let qr = String(searchfield)
    let updatedList = [...users];
    
   

/*     setDataUsers(data); */
    // console.log(updatedList)
    // setSearchfield(event.target.value);
  };


  const addField = async (upd) => {
    const res = await fetch(`https://saberyemprender.vercel.app/api/addUser`, {
      method: "PUT",
      body: JSON.stringify(upd),
    });
    return res.json();
  }

  function FiltroCarreras (event)  {
    
   setAsignacion(event.target.value)
   setStandby("")
   setLimbo("")
   setRonda("")
/*     setDataUsers(data); */
    // console.log(updatedList)
    // setSearchfield(event.target.value);
     
  };

  function FiltroEsperas (event)  {
    
   setStandby(event.target.value)
   //setAsignacion("")
   setLimbo("")
/*     setDataUsers(data); */
    // console.log(updatedList)
    // setSearchfield(event.target.value);
     
  };

  function FiltroLimbos (event)  {
    
    setLimbo(event.target.value)
    //setAsignacion("")
    setStandby("")
 /*     setDataUsers(data); */
     // console.log(updatedList)
     // setSearchfield(event.target.value);
      
   };

   function FiltroRondas (event)  {
    
    setRonda(parseInt(event.target.value))
    
      
   };

  //Para exportar las funciones fuera del main al navbar
  Private.FiltroCarreras = FiltroCarreras;
  Private.FiltroEsperas= FiltroEsperas;
  Private.FiltroLimbos= FiltroLimbos;
  Private.FiltroRondas= FiltroRondas;
  return (
    <>
      <Head>
        <title>
          Panel de Gestión de Participantes - IUTCM: Saber y Emprender
        </title>
      </Head>
      <div>
        {loading ? (
          <>
            <div className="flex h-screen w-screen justify-center items-center" role="status">
              <svg aria-hidden="true" class="w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Cargando</span>
            </div>
          </>
        ) : (
          <>
            {user?.email && (
              <>
                <main>
                  <Sidebar>
                    <div class="px-8 py-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800">
                      <div class="w-full mb-1">
                        <div class="mb-4">
                          <nav class="flex mb-5" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                              <li class="inline-flex items-center animate-pulse">
                                <a
                                  href="#"
                                  class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                                >
                                  <svg
                                    class="w-5 h-5 mr-2.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http:www.w3.org/2000/svg"
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
                                    xmlns="http:www.w3.org/2000/svg"
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
                                    Usuarios
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div class="flex items-center">
                                  <svg
                                    class="w-6 h-6 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http:www.w3.org/2000/svg"
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
                                    List
                                  </span>
                                </div>
                              </li>
                            </ol>
                          </nav>
                          <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            Todos los usuarios
                          </h1>
                        </div>
                        <div class="sm:flex">
                          <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                            <form class="lg:pr-3" action="#" method="GET">
                              <label for="users-search" class="sr-only">
                                Search
                              </label>
                              <div class="relative mt-1 lg:w-64 xl:w-96">
                                <input
                                  type="text"
                                  name="searchfield"
                                  id="users-search"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Buscar usuarios"
                                  onChange={(e) => onSearchChange(e)}
                                />
                              </div>
                            </form>
                            <div class="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
                              <a
                                href="#"
                                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                <svg
                                  class="w-6 h-6"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http:www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </a>
                              <a
                                href="#"
                                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                <svg
                                  class="w-6 h-6"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http:www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </a>
                              <a
                                href="#"
                                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                <svg
                                  class="w-6 h-6"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http:www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </a>
                              <a
                                href="#"
                                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                <svg
                                  class="w-6 h-6"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http:www.w3.org/2000/svg"
                                >
                                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
                            
                            <button onClick={ () =>{
                              const modaladd = document.getElementById("add-user-modal");
                              modaladd.className = "fixed left-0 right-auto z-50 items-center justify-center overflow-x-auto overflow-y-auto top-4 md:inset-0 h-auto  sm:h-auto lg:h-auto xl:h-auto ";
                            }
                              
                            }
                              type="button"
                              
                              class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                              <svg
                                class="w-5 h-5 mr-2 -ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http:www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Añadir
                            </button>

                            <button onClick={()=>downloadExcel(filteredList.filter((upd) => String(upd.PROBLEMA).includes("no")))}
                              href="#"
                              class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            >
                              <svg
                                class="w-5 h-5 mr-2 -ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http:www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Export
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex  flex-col">
                      <div class="overflow-x-auto">
                        <div class="inline-block min-w-full align-middle">
                          <div class="overflow-hidden shadow">
                            <table class="min-w-full px-8 divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                              <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    #
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    Nombre
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    Cedula
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    correo
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    telefono
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    CARRERA
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    Sección
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    Turno
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    Días
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                  >
                                    Editar
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                
                                {filteredList.filter((upd) => String(upd.NOMBRE_APELLIDO).toUpperCase().includes(searchfield.toUpperCase())).filter((upd) => String(upd.ASSIGN).toUpperCase().includes(asignacion)).filter((upd) => String(upd.ESPERA).includes(standby)).filter((upd) => String(upd.LIMBO).includes(limbo)).filter((upd) => String(upd.PROBLEMA).includes("no")).filter((upd) => String(upd.ROUND).includes(ronda)).map((usr,index) => (
                                  <>
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <td class="w-4 p-4">{index + 1}</td> {} 
                                      <td class="flex items-center p-4 mr-2 space-x-2 whitespace-nowrap">
                                        <div class="text-xs font-normal text-gray-500 dark:text-gray-400">
                                          <div class="text-xs font-semibold text-gray-900 dark:text-white">
                                            { String(
                                              usr.NOMBRE_APELLIDO
                                            ).toUpperCase().substring(0, 20)}
                                          </div>
                                        </div>
                                      </td>
                                                
                                      <td class="p-4 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        V-{usr.CEDULA}
                                      </td>
                                      <td class="max-w-sm p-4 overflow-hidden text-xs font-npositional text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                        {String(
                                              usr.CORREO
                                            ).substring(0, 20)+ "..."}
                                      </td>
                                      <td class="p-4 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {usr.TELEFONO}
                                      </td>
                                      <td class="p-4 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {usr.ASSIGN}
                                      </td>
                                      <td class="p-4 text-xs uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                        <span className="font-bold block">
                                          {" "}
                                          {usr.SECCION}
                                        </span>
                                      </td>
                                      <td class="p-4 text-xs uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span className="font-bold block">
                                          {usr.HORARIO.turno == 0
                                            ? "matutino"
                                            : "vespertino"}
                                        </span>
                                      </td>
                                      <td class="p-4 text-xs uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span className="font-bold block">
                                          {usr.HORARIO.dias == 0
                                            ? "Lunes y Martes"
                                            : "Miercoles y Jueves"}
                                        </span>
                                      </td>
                                      <td class="p-4 space-x-2 whitespace-nowrap">
                                        <a
                                          href={
                                            "/settings/" +
                                            usr._id +
                                            "/" +
                                            usr.ASSIGN
                                          }
                                          type="button"
                                          data-modal-toggle="edit-user-modal"
                                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        >
                                          <svg
                                            class="w-4 h-4 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http:www.w3.org/2000/svg"
                                          >
                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                            <path
                                              fill-rule="evenodd"
                                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                              clip-rule="evenodd"
                                            ></path>
                                          </svg>
                                          Edit user
                                        </a>
                                      </td>
                                    </tr>
                                    
                                  </>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                      <div class="flex items-center mb-4 sm:mb-0">
                        <a
                          href="#"
                          
                          class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <svg
                            class="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          
                          class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <svg
                            class="w-7 h-7"
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
                        </a>
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                          Actualmente existen un total de {" "}
                          <span class="font-semibold text-gray-900 dark:text-white">
                            {filteredList.length - filteredList.filter((upd) => String(upd.PROBLEMA).includes("SI")).length}
                          </span>{" "}
                          Alumnos en la plataforma{" "}
                          
                        </span>
                      </div>
                      <div class="flex items-center space-x-3">
                        
                      </div>
                    </div>
                  </Sidebar>
                  
                 {/* <!-- Add User Modal --> */}
                  <div class="hidden" id="add-user-modal">
                  <form onSubmit={ async() =>{
                      const getnombre = document.getElementById("nombre");
                      const getcedula = document.getElementById("cedula");
                      const getemail = document.getElementById("email");
                      const getphone = document.getElementById("phone");
                      const getturno = document.getElementById("Turno");
                      const getdias = document.getElementById("Dias");
                      const getseccion = document.getElementById("Seccion");
                      const getcarrera = document.getElementById("Carrera");
                      const getronda = document.getElementById("ronda");
                      const getobserva = document.getElementById("observa");
                      const Newdata = {NOMBRE_APELLIDO: getnombre.value, CEDULA: parseInt(getcedula.value),
                       ASSIGN: getcarrera.value, CORREO: getemail.value, HORARIO:{ turno: parseInt(getturno.value), dias: parseInt(getdias.value)},
                       OBSERVACIONES: getobserva.value, ROUND: parseInt(getronda.value), SECCION: getseccion.value, TELEFONO: parseInt(getphone.value)
                       }
                       
                       const res = await addField(Newdata);
                    }} >  
    <div class="relative w-full h-full max-w-2xl px-4 md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                <h3 class="text-xl font-semibold dark:text-white">
                    Agregar nuevo usuario
                </h3>
                <button onClick={()=>{
                  const modaladd = document.getElementById("add-user-modal");
                  modaladd.className = "hidden";
                }}
                 type="button" class="text-red-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-700 dark:hover:text-white" data-modal-toggle="add-user-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6 space-y-6">
               
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 ">
                            <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre y Apellido</label>
                            <input type="text" name="first-name" id="nombre" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre" required/>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cédula</label>
                            <input type="number" name="last-name" id="cedula" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="V-" required/>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                            <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ejemplo@gmail.com" required/>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                            <input type="number" name="position" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Teléfono" required/>
                            
                        </div>
                        
                        <div class="col-span-6 sm:col-span-3">
                            <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Turno</label>
                            
                            <select required id="Turno" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                              <option value = "0"> MATUTINO</option>
                              <option value = "1"> VESPERTINO</option>
                            
                            </select>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Días</label>
                            
                            <select required id="Dias" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                              <option value = "0"> LUNES Y MARTES</option>
                              <option value = "1"> MIERCOLES Y JUEVES</option>
                              

                            </select>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sección</label>
                            
                            <select required id="Seccion" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                              <option value = "A"> A</option>
                              <option value = "B"> B</option>
                              <option value = "C"> C</option>
                              <option value = "D"> D</option>

                            </select>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carrera</label>
                            
                            <select required id="Carrera" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                              <option value = "COCINA"> COCINA</option>
                              <option value = "PANADERIA"> PANADERIA</option>
                              <option value = "BARISMO"> BARISMO</option>
                              <option value = "REPOSTERIA"> REPOSTERIA</option>

                            </select>
                        </div>
                        
                        <div class="col-span-6 sm:col-span-3">
                            <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ronda</label>
                            <input type="number" name="position" id="ronda" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ronda" required/>
                            
                        </div>

                        <div class="col-span-6">
                            <label for="biography" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Observaciones</label>
                            <textarea id="observa" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Observaciones"></textarea>
                        </div>
                    </div> 
                    
                </div>
                {/* <!-- Modal footer --> */}
                <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                    <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">Añadir</button>
                </div>
                
            
        </div>
    </div>
    </form>
</div>
                </main>
              </>
            )}
          </>
        )}
        
      </div>
    </>
  );
};


const downloadExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
  //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
  XLSX.writeFile(workbook, "Lista-Alumnos.xlsx");
};



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://saberyemprender.vercel.app/api/getUsers`, {
    method: "GET",
  });
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default withAuth(Private);
export function FiltroCarrera(event) {Private.FiltroCarreras(event)}
export function FiltroEspera(event) {Private.FiltroEsperas(event)}
export function FiltroLimbo(event) {Private.FiltroLimbos(event)}
export function FiltroRonda(event) {Private.FiltroRondas(event)}

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import initFirebase from '../config';
// import { useUser } from '../auth/useUser'
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const Dashboard = () => {
//   const auth = firebase.auth();
//   const { user, logout } = useUser();
//
//   const router = useRouter()

//   useEffect(() => {
//     auth.onAuthStateChanged(authUser => {
//       if (!authUser) {
//         router.push('/signin');
//       }
//       setLoading(true)
//     });
//   }, [auth]);

//   return (
//     <>
//       {loading ? <>
//         Loading...
//       </> : <>

//       </>}
//     </>
//   )
// }

// export default Dashboard;
