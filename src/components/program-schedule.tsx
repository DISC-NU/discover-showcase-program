export default function ProgramSchedule() {
  return (
    <section className="w-full max-w-2xl rounded-2xl p-8 my-16 bg-[#121612] text-[#DED4CE]">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Program Schedule
      </h2>

      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="w-32 flex-shrink-0 font-semibold whitespace-nowrap">
            6:00 PM
          </span>
          <span className="ml-4">Introduce DISC &amp; DISC Leadership</span>
        </li>
        <li className="flex items-start">
          <span className="w-32 flex-shrink-0 font-semibold whitespace-nowrap">
            6:10 PM
          </span>
          <span className="ml-4">Speech by Joanna Soltys</span>
        </li>
        <li className="flex items-start">
          <span className="w-32 flex-shrink-0 font-semibold whitespace-nowrap">
            6:20 PM
          </span>
          <span className="ml-4">Speech by Paula Fregene</span>
        </li>
        <li className="flex items-start">
          <span className="w-32 flex-shrink-0 font-semibold whitespace-nowrap">
            6:30–8:00 PM
          </span>
          <span className="ml-4">
            Project Presentations (
            <span className="italic">each team has 10–12 minutes</span>)
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-32 flex-shrink-0 font-semibold whitespace-nowrap">
            8:00 PM
          </span>
          <span className="ml-4">Closing Remarks</span>
        </li>
      </ul>

      <p className="mt-6 text-sm text-center">
        <span className="font-semibold">Location:</span> Tech M164 at
        Northwestern University
      </p>
    </section>
  );
}
