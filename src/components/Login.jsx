import Image from "next/image";
import { useMoralis } from "react-moralis";
import Tilt from "react-tilt";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black">
      <div className="flex flex-col absolute z-50 h-[70%] w-full items-center justify-center">
        <Tilt
          options={{ max: 35, perspective: 1500 }}
          className="flex flex-col space-y-5 bg-white bg-opacity-10 backdrop-blur-sm py-[5rem] px-10 rounded-lg shadow-lg shadow-yellow-500/10 card"
        >
          <Image
            className="object-cover rounded-full"
            src="https://links.papareact.com/3pi"
            height={270}
            width={250}
          />
          <button
            className="bg-yellow-500 rounded-lg px-6 py-4 font-bold animate-pulse text-lg hover:bg-yellow-600 hover:animate-none transition-colors text-zinc-900 flex space-x-3 items-center justify-center"
            onClick={authenticate}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <p>Login To The Metaverse</p>
          </button>
        </Tilt>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://bithub.pl/wp-content/uploads/2021/09/metaverse-min-scaled.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="bg-black/20 z-25 w-full h-screen absolute top-0 left-0" />
    </div>
  );
};

export default Login;
