import { discoverProgramClients } from "../constants/discover-program-clients";

export default function ClientsCarousel() {
  return (
    <div className="w-screen overflow-hidden py-8">
      <div className="flex flex-nowrap w-max animate-marquee">
        {discoverProgramClients.map((client, idx) => (
          <a
            key={`client-1-${idx}`}
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-shrink-0
              mx-4
              bg-[#FBF7F5]
              w-56 sm:w-64 md:w-72 lg:w-80
              overflow-hidden
              border-8
              border-[#DED4CE]
              drop-shadow-lg
              flex flex-col
            "
          >
            <div className="w-full h-44 sm:h-52 md:h-60 lg:h-72 bg-gray-200">
              <img
                src={client.image_url}
                alt={client.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full bg-[#DED4CE] h-12 flex items-center justify-center px-2">
              <span className="text-center text-sm font-semibold text-[#121612] whitespace-normal break-words">
                {client.title}
              </span>
            </div>
          </a>
        ))}
        {discoverProgramClients.map((client, idx) => (
          <a
            key={`client-2-${idx}`}
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-shrink-0
              mx-4
              bg-[#FBF7F5]
              w-56 sm:w-64 md:w-72 lg:w-80
              overflow-hidden
              border-8
              border-[#DED4CE]
              drop-shadow-lg
              flex flex-col
            "
          >
            <div className="w-full h-44 sm:h-52 md:h-60 lg:h-72 bg-gray-200">
              <img
                src={client.image_url}
                alt={client.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full bg-[#DED4CE] h-12 flex items-center justify-center px-2">
              <span className="text-center text-sm font-semibold text-[#121612] whitespace-normal break-words">
                {client.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
