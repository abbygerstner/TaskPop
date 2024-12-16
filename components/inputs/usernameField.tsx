interface usernameFieldProps{
    usernamePrefix: string;
    placeholder?: string;
}

export default function UsernameField({usernamePrefix, placeholder="janesmith"}: usernameFieldProps){
    return(
        <div>
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal ring-teal sm:max-w-md bg-transparent text-gray-500">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        {usernamePrefix}
                      </span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 focus:ring-2 ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal sm:text-sm sm:leading-6 rounded-md bg-navy ring-teal"
                            placeholder = {placeholder}
                      />
                    </div>
                  </div>
                </div>
    )
}
