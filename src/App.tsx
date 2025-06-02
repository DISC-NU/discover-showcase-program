import { STUDENTS_BY_YEAR } from "./constants/discover-program-participants";
import type { Person } from "./constants/discover-program-participants";
import { getYearLabel } from "./utils/get-grad-year";

function App() {
  const yearOrder = ["2025", "2026", "2027", "2028"];

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
            min-h-screen
            bg-[#121612]
            flex flex-col items-center
            rounded-t-[4rem]    /* mobile */
            sm:rounded-t-[6rem] /* ≥640px */
            md:rounded-t-[8rem] /* ≥768px */
            lg:rounded-t-[10rem]/* ≥1024px */
            pt-8
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

          <div className="w-full max-w-4xl space-y-12">
            {yearOrder.map((year) => {
              const students: Person[] = STUDENTS_BY_YEAR[year] || [];
              if (students.length === 0) return null;

              const yearLabel = getYearLabel(year);

              return (
                <div key={year} className="w-full space-y-8">
                  <h3 className="text-2xl font-semibold mb-2 text-[#FBF7F5] text-center">
                    {yearLabel}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-4">
                    {students.map((person) => (
                      <div
                        key={person.email}
                        className="
                          w-full
                          sm:w-1/2
                          md:w-1/3
                          lg:w-1/4
                          rounded-lg
                          p-4
                          m-4
                          text-center
                          flex flex-col
                          items-center
                          space-y-2
                          border-[#171e1a]
                          border-2
                        "
                      >
                        <a
                          href={`mailto:${person.email}`}
                          className="text-lg font-medium text-[#DED4CE] hover:underline"
                        >
                          {person.firstName} {person.lastName}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
