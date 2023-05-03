import withAuth from "../auth/withAuth";
import { useUser } from "../auth/useUser";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

const Private = ({ data }) => {
  function chunckArrayInGroups(arr, size) {
    var chunk = [],
      i; // declara array vacio e indice de for
    for (
      i = 0;
      i <= arr.length;
      i += size // loop que recorre el array
    )
      chunk.push(arr.slice(i, i + size)); // push al array el tramo desde el indice del loop hasta el valor size + el indicador
    return chunk;
  }

  const { user, logout } = useUser();
  const [users, setDataUsers] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchfield, setSearchfield] = useState();

  const [filteredList, setFilteredList] = useState();

  useEffect(() => {
    setDataUsers(data);
    let fdl = chunckArrayInGroups(data, 20);
    setFilteredList(fdl);
    setTotalPages(fdl.length);
    setLoading(false);
  }, []);

  const onSearchChange = (event) => {
    let qr = event.target.value;
    let updatedList = [...users];
    console.log(qr);
    //updatedList.filter((upd) => upd.NOMBRE_APELLIDO.length > 16)
    console.log(updatedList.filter((upd) => String(upd.NOMBRE_APELLIDO)
    .toUpperCase().includes(qr.toUpperCase())))
    // console.log(updatedList)
    // setSearchfield(event.target.value);
  };
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
                              <li class="inline-flex items-center">
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
                            All users
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
                                  placeholder="Search for users"
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
                            <button
                              type="button"
                              data-modal-toggle="add-user-modal"
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
                              Add user
                            </button>
                            <a
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
                            </a>
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
                                    Actions
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {filteredList[currentPage].map((usr, index) => (
                                  <>
                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <td class="w-4 p-4">{index + 1}</td>
                                      <td class="flex items-center p-4 mr-2 space-x-2 whitespace-nowrap">
                                        <div class="text-xs font-normal text-gray-500 dark:text-gray-400">
                                          <div class="text-xs font-semibold text-gray-900 dark:text-white">
                                            {String(
                                              usr.NOMBRE_APELLIDO
                                            ).toUpperCase()}
                                          </div>
                                        </div>
                                      </td>

                                      <td class="p-4 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        V-{usr.CEDULA}
                                      </td>
                                      <td class="max-w-sm p-4 overflow-hidden text-xs font-npositional text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                        {usr.CORREO}
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
                                            ? "Turno matutino"
                                            : "Turno vespertino"}
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
                          onClick={() => {
                            if (currentPage - 1 < 0) return;
                            setCurrentPage(currentPage - 1);
                          }}
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
                          onClick={() => {
                            if (currentPage + 1 >= totalPages) return;
                            setCurrentPage(currentPage + 1);
                          }}
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
                          Mostrando{" "}
                          <span class="font-semibold text-gray-900 dark:text-white">
                            20
                          </span>{" "}
                          resultados de la página{" "}
                          <span class="font-semibold text-gray-900 dark:text-white">
                            {currentPage + 1}
                          </span>{" "}
                          de{" "}
                          <span class="font-semibold text-gray-900 dark:text-white">
                            {totalPages}
                          </span>{" "}
                          páginas
                        </span>
                      </div>
                      <div class="flex items-center space-x-3">
                        <a
                          href="#"
                          onClick={() => {
                            if (currentPage - 1 < 0) return;
                            setCurrentPage(currentPage - 1);
                          }}
                          class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          <svg
                            class="w-5 h-5 mr-1 -ml-1"
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
                          Previous
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            if (currentPage + 1 >= totalPages) return;
                            setCurrentPage(currentPage + 1);
                          }}
                          class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Next
                          <svg
                            class="w-5 h-5 ml-1 -mr-1"
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
                      </div>
                    </div>
                  </Sidebar>
                </main>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/getUsers`, {
    method: "GET",
  });
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default withAuth(Private);
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
