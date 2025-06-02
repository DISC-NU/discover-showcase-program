import { STUDENTS_BY_YEAR } from "../constants/discover-program-participants";
import type { Person } from "../constants/discover-program-participants";
import { getYearLabel } from "../utils/get-grad-year";

export default function DiscoverProgramParticipants() {
  const yearOrder = ["2025", "2026", "2027", "2028"];
  return (
    <div className="mb-48">
      <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold text-[#FBF7F5]">
        Discover Program 2025 Participants
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
  );
}
