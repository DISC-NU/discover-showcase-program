import DiscExecMembers from "./components/disc-exec-section";
import DiscoverProgramParticipants from "./components/discover-program-participants";
import Footer from "./components/footer";
import ClientsCarousel from "./components/clients-carousel";
import LetterFromExec from "./components/disc-exec-letter";
import ProgramSchedule from "./components/program-schedule";
import Introduction from "./components/introduction";

function App() {
  return (
    <div className="min-h-screen bg-[#DED4CE] flex flex-col items-center font-sans">
      <h1 className="mt-4 mb-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-[#121612]">
        Develop &amp; Innovate for Social Change
      </h1>

      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            w-full
            max-w-[90rem]
            bg-[#121612]
            flex flex-col items-center
            rounded-t-[4rem]
            sm:rounded-t-[6rem]
            md:rounded-t-[8rem]
            lg:rounded-t-[10rem]
            rounded-b-[4rem]
            sm:rounded-b-[6rem]
            md:rounded-b-[8rem]
            lg:rounded-b-[10rem]
            pt-8
            pb-12
            px-6
          "
          style={{ zIndex: 5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#DED4CE]">
            Discover Program
          </h2>
          <h2 className="mt-4 mb-8 text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#DED4CE]">
            Showcase 2025
          </h2>
          <Introduction />
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <ClientsCarousel />
          </div>
          <div className="w-full mt-12 flex flex-col items-center">
            <ProgramSchedule />
            <LetterFromExec />
            <DiscoverProgramParticipants />
            <DiscExecMembers />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
