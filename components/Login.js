const Login = (props) => {

  return (
    <main className="bg-red-400">


      <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">


        <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to platform
          </h2>
          {props.children}
        </div>
      </div>
    </main>
  )

}

export default Login;