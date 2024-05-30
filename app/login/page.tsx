import Image from "next/image";
import NavBar from "@/components/navBar";

export default function Login() {
  return (
    <div className="h-screen bg-[url('/bckg.jpg')] bg-cover bg-center flex flex-col">
      <NavBar />
      <div className="flex-grow flex justify-center items-center">
        <div className="wrapper w-1/3 h-2/3 border-x border-y border-white backdrop-blur-md shadow-slate-600 rounded-lg px-8 py-12">
          <form action="">
            <h1 className="header1 text-4xl text-center font-bold">Login</h1>
            <div className="input-box relative w-full h-12 my-8">
            <input
                className="w-full h-full bg-transparent border-2 border-white rounded-l-3xl rounded-r-3xl py-3 pr-12 pl-5 text-white placeholder-white placeholder-opacity-50"
                type="text"
                placeholder="Username"
                required
            />

              <i className="bx bxs-user absolute right-5 top-1/2 -translate-y-1/2 text-base italic"></i>
            </div>

            <div className="input-box relative w-full h-12 my-8">
              <input
                className="w-full h-full bg-transparent h-5 border-2 border-white rounded-l-3xl rounded-r-3xl py-5 pr-12 pl-5 text-white placeholder:text-white"
                type="password"
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock absolute right-5 top-1/2 -translate-y-1/2 text-base italic"></i>
            </div>

            <div className="remember-forgot flex justify-between text-md mx-0 mt-1 mb-1">
              <input type="checkbox" />
              <label className="accent-white mr-3 text-md">Remember me</label>
              <a href="#" className="text-white decoration-0 hover:underline underline-offset-1">Forgot Password?</a>
            </div>
            <a href="index.html">
              <button type="submit" className="btn w-full h-12 bg-white outline-none rounded-3xl shadow-black font-semibold cursor-pointer text-3 text-navy">
                Login
              </button>
            </a>

            <div className="register-link text-center mx-0 mt-1 mb-1">
              <p>
                Don't have an account? <a href="#" className="text-white decoration-0 hover:underline underline-offset-1 font-semibold">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
