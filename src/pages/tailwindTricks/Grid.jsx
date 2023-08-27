import Header from "../../components/Header";

function Grid() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-10">
        <div className="group grid grid-cols-4 gap-10 sm:max-md:grid-cols-3">
          <div className="w-full aspect-video bg-purple-400 group-hover:bg-yellow-400 group-hover:duration-500 group-hover:ease-in-out delay-300"></div>
          <div className="w-full aspect-video bg-purple-400 group-hover:bg-green-400 group-hover:duration-500 group-hover:ease-in-out delay-300"></div>
          <div className="w-full aspect-video bg-purple-400 group-hover:bg-blue-400 group-hover:duration-500 group-hover:ease-in-out delay-300"></div>
          <div className="w-full aspect-video bg-purple-400 group-hover:bg-green-500 group-hover:duration-500 group-hover:ease-in-out delay-300"></div>
          <div className="w-full aspect-video bg-purple-400 group-hover:bg-yellow-600 group-hover:duration-500 group-hover:ease-in-out delay-300"></div>
          <div className="w-full aspect-video bg-purple-400 group-hover:bg-blue-400 group-hover:duration-500 group-hover:ease-in-out delay-300"></div>
          <div className="w-full aspect-video bg-purple-400 group-hover:bg-orange-400 group-hover:duration-500 group-hover:ease-in-out delay-300"></div>
          <div className="w-full aspect-video bg-purple-400 group-hover:bg-gray-400 group-hover:duration-500 group-hover:ease-in-out delay-300"></div>
        </div>

        <div className="bg-black h-[50rem] w-full flex justify-center items-center">
          <div className="w-80 h-60 rounded-full shadow-[0_0_100px_purple] bg-black"></div>
        </div>
      </div>
    </>
  );
}

export default Grid;
