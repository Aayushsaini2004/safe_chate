import { useState } from "react";
import { FileBox, LucideCircleDollarSign, ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // This is how we did it at first, without using our custom hook
  // const queryClient = useQueryClient();
  // const {
  //   mutate: loginMutation,
  //   isPending,
  //   error,
  // } = useMutation({
  //   mutationFn: login,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  // This is how we did it using our custom hook - optimized version
  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-8 md:p-12"
      data-theme="light"
    >
      <div className="border border-gray-200 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden
        transition-all duration-700 ease-in-out scale-100 opacity-100 animate-fade-in-up"
      >
        {/* LOGIN FORM SECTION */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white
          transition-all duration-700 ease-in-out scale-100 opacity-100 animate-fade-in-up"
        >
          {/* LOGO */}
          <div className="mb-6 flex items-center justify-start gap-3
            transition-all duration-700 ease-in-out scale-100 opacity-100 animate-fade-in-up"
          >
            <FileBox className="size-10 text-blue-600" />
            <span className="text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 tracking-wider">
              Streamify
            </span>
          </div>

          {/* ERROR MESSAGE DISPLAY */}
          {error && (
            <div className="alert alert-error mb-4 bg-red-50 border border-red-200 text-red-700">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleLogin}>
              {/* Add animation to form */}
              <div className="space-y-6 transition-all duration-700 ease-in-out scale-100 opacity-100 animate-fade-in-up">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
                  <p className="text-sm text-gray-600">
                    Sign in to your account to continue your language journey
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text text-gray-700">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="input input-bordered w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text text-gray-700">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="input input-bordered w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white border-none transition-all duration-200"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <span className="loading loading-spinner loading-xs"></span>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-blue-600 hover:underline">
                        Create one
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-blue-50 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full animate-fade-in-up"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Connect with language partners worldwide</h2>
              <p className="text-gray-600">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
