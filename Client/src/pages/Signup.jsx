import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const { CreateUser, signinWithGoogle, setUser, updateUser } =
    useContext(AuthContext);
  const [Error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    const validatePassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const formData = e.target;
    const email = formData.email.value;
    const name = formData.name.value;
    const photoUrl = formData.photoUrl.value;
    const password = formData.password.value;

    if (validatePassword.test(password)) {
      const userInfo = {
        displayName: name,
        photoURL: photoUrl,
      };
      CreateUser(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          updateUser(userInfo);
          navigate("/");
          toast.success("Your account successfully create");
        })
        .catch((error) => setError(error.message));
      return;
    }
    setError("Your password must have uppercase, lowercase & 6 characters");
  };

  return (
    <section className="container mx-auto">
      <>
        <h1 className="text-center text-3xl font-bold mb-10">
          Register your account
        </h1>
        <div className="w-[80%] md:w-[70%] lg:w-[50%] mx-auto">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-5 border-gray-200 btn w-full bg-white text-black hover:text-white text-lg"
          >
            Register with <FcGoogle />
          </button>
        </div>
        <div className="divider w-[50%] mx-auto">
          <span className="text-gray-400">or</span>
        </div>
        <form
          onSubmit={handleSignUp}
          className="w-[80%] md:w-[70%] lg:w-[50%] mx-auto mb-20 space-y-5"
        >
          {/* name */}
          <div>
            <label htmlFor="name" className="text-[15px] font-[400]">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="border-[#e5eaf2] border bg-white rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
              required
            />
          </div>
          {/* email */}
          <div>
            <label htmlFor="name" className="text-[15px] font-[400]">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="border-[#e5eaf2] border bg-white rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
              required
            />
          </div>
          {/* photo url */}
          <div>
            <label htmlFor="name" className="text-[15px] font-[400]">
              Photo url
            </label>

            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
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
                name="password"
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

          <div className="mt-5 w-full mb-3">
            <button className="btn w-full text-lg text-black bg-white hover:text-white">
              Register
            </button>
          </div>
          <Link to={"/auth/login"} className="font-semibold">
            If you have an account -{" "}
            <span className="hover:underline cursor-pointer text-sky-300">
              Login
            </span>
          </Link>
        </form>
      </>
    </section>
  );
};

export default Signup;
