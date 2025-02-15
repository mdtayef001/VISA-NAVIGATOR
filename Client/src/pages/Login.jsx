import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  const navigate = useNavigate();
  const { EmailLogin, setUser, signinWithGoogle } = useContext(AuthContext);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [Error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setError("");

    if (password === "" || email === "") {
      setError("give your info");
      return;
    }

    EmailLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Login successful");
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Login successful");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <section className="container mx-auto">
      <>
        <h1 className="text-center text-3xl font-bold mb-10">
          <Typewriter
            words={["Login Your Account"]}
            cursor
            cursorBlinking
            deleteSpeed={25}
            loop={0}
          />
        </h1>
        <div className="w-[80%] md:w-[70%] lg:w-[50%] mx-auto">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-5 border-gray-200 btn w-full bg-white text-black hover:text-white text-lg"
          >
            Login with <FcGoogle />
          </button>
        </div>
        <div className="divider w-[50%] mx-auto">
          <span className="text-gray-400">or</span>
        </div>
        <form
          onClick={(e) => e.preventDefault()}
          className="w-[80%] md:w-[70%] lg:w-[50%] mx-auto mb-20"
        >
          {/* email */}
          <div>
            <label htmlFor="name" className="text-[15px] font-[400]">
              Email
            </label>

            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your email"
              className="border-[#e5eaf2] border bg-white rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
              required
            />
          </div>
          {/* password */}
          <div className="mt-5">
            <label htmlFor="password" className="text-[15px] font-[400]">
              Password
            </label>

            <div className="w-full relative ">
              <input
                type={isEyeOpen ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                className="peer border-[#e5eaf2] border bg-white rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
                required
              />

              {isEyeOpen ? (
                <IoEyeOutline
                  className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                  onClick={() => setIsEyeOpen(false)}
                />
              ) : (
                <IoEyeOffOutline
                  className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                  onClick={() => setIsEyeOpen(true)}
                />
              )}
            </div>
          </div>

          {Error && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{Error}</span>
            </div>
          )}
          <p className="mt-5 text-sm hover:underline cursor-pointer">
            Forget Password ?
          </p>
          <div className="mt-5 w-full mb-3">
            <button
              onClick={handleLogin}
              className="btn w-full text-lg text-black bg-white hover:text-white"
            >
              Login
            </button>
          </div>
          <Link to={"/auth/signup"} className="font-semibold">
            If you don&apos;t have an account ?{" "}
            <span className="hover:underline cursor-pointer text-sky-300">
              Sign up
            </span>
          </Link>
        </form>
      </>
    </section>
  );
};

export default Login;
