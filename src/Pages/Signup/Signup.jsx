import React from "react";


const Signup = () => {





  return (
    <div className="  flex flex-col  sm:flex-row">
      <div className="w-full bg-zinc-300  hidden  sm:flex  justify-center items-center  sm:w-1/2  sm:h-screen ">    
           <img className="w-1/2 h-1/2   rounded-2xl ring-2  ring-gray-300   hover:scale-110 ease-in-out duration-500  shadow-[0_0_20px_4px] shadow-slate-700" src="elegant.png" alt="" />

          
      </div>
      <div className="w-full   sm:w-1/2 flex justify-center items-center  ">

      <div className="w-full sm:w-2/3  h-fit flex justify-center my-4  mx-4 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">


      <form className="w-full p-4  flex  flex-col  ">
          <div class="grid mt-4  gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Flowbite"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label
                for="website"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Website URL
              </label>
              <input
                type="url"
                id="website"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="visitors"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Unique visitors (per month)
              </label>
              <input
                type="number"
                id="visitors"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 "
                placeholder=""
                required
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 "
              placeholder="•••••••••"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="confirm_password"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="•••••••••"
              required
            />
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
            <label
              for="remember"
              class="ms-2 text-sm font-medium text-gray-900 "
            >
              I agree with the{" "}
              <a
                href="#"
                class="text-blue-600 hover:underline "
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            class="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
      </form>
      
      
      </div>
      
      </div>
    </div>
  );
};

export default Signup;
