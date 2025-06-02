export default function Footer() {
  return (
    <footer className="bg-[#DED4CE] text-[#121612] font-serif">
      <div className="max-w-screen-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h2
          className="
            text-3xl            /* Mobile */
            sm:text-4xl         /* ≥640px */
            md:text-5xl         /* ≥768px */
            lg:text-7xl         /* ≥1024px */
            xl:text-[9rem]    /* ≥1280px */
            text-center leading-tight
          "
        >
          Develop &amp; Innovate for Social Change
        </h2>
        <div
          className="
            mt-12
            flex flex-col items-center
            md:flex-row md:justify-between
            text-sm uppercase tracking-wide
          "
        >
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span>EST. 2017</span>
            <span className="mx-2">|</span>
            <span>EVANSTON, ILLINOIS</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-6">
            <a
              href="https://github.com/DISC-NU"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/disc_nu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://discord.gg/s8hwAbMq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Discord
            </a>
            <a
              href="mailto:disc@u.northwestern.edu"
              className="hover:underline"
            >
              Contact
            </a>
            <a
              href="https://www.discnu.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
