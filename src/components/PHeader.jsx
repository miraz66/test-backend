import HomeDisplay from "../components/new/HomeDisplay";
import MainContainer from "./new/MainContainer";

export default function PHeader() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[42rem] lg:h-[50rem] xl:h-[48rem] relative rounded-t-[40px]">
          <div className="absolute top-52 md:top-60 lg:top-72 xl:top-80 w-full">
            <div className="max-w-7xl mx-5 lg:mx-10 2xl:mx-auto">
              <div className="max-w-3xl mx-auto">
                <span>HELLO, I'M</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-gray-800 font-semibold tracking-tight leading-10 lg:leading-[90px]">
                  Md.MIRAJUL ISLAM
                </h1>

                <p className="text-lg lg:text-xl pt-10 leading-8 text-gray-700">
                  Web Develops and front-end, Backend Developer Skills:
                  CSS,React,Python,Django-rest-api
                </p>
              </div>
            </div>
          </div>
        </HomeDisplay>
      </MainContainer>
    </>
  );
}
