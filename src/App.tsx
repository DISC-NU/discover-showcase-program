import DiscExecMembers from "./components/disc-exec-section";
import DiscoverProgramParticipants from "./components/discover-program-participants";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-[#DED4CE] flex flex-col items-center font-sans">
      <h1 className="mt-4 mb-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-[#121612]">
        Develop &amp; Innovate for Social Change
      </h1>
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="
            w-full
            max-w-[90rem]
            bg-[#121612]
            flex flex-col items-center

            /* Top corner rounding */
            rounded-t-[4rem]       /* mobile */
            sm:rounded-t-[6rem]    /* ≥640px */
            md:rounded-t-[8rem]    /* ≥768px */
            lg:rounded-t-[10rem]   /* ≥1024px */

            /* Bottom corner rounding (NEW!!) */
            rounded-b-[4rem]        /* mobile */
            sm:rounded-b-[6rem]     /* ≥640px */
            md:rounded-b-[8rem]     /* ≥768px */
            lg:rounded-b-[10rem]    /* ≥1024px */

            pt-8
            pb-12
            px-6
          "
          style={{ zIndex: 5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#FBF7F5]">
            Discover Program
          </h2>
          <h2 className="mt-4 mb-8 text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#FBF7F5]">
            Showcase 2025
          </h2>
          <DiscoverProgramParticipants />
          <DiscExecMembers />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
