import type { TeamMember } from "../constants/disc-exec";
import { teamMembers, outgoingTeamMbers } from "../constants/disc-exec";
import { Linkedin, Github, Instagram } from "lucide-react";

export default function DiscExecMembers() {
  return (
    <div className="w-full max-w-6xl space-y-12 mb-12">
      <div className="w-full space-y-6">
        <h3 className="text-2xl font-semibold text-[#FBF7F5] text-center">
          DISC Executive Board Team 2024 - 2025
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {outgoingTeamMbers.map((member: TeamMember) => (
            <div
              key={member.name}
              className="
                w-full
                sm:w-1/2
                md:w-1/3
                lg:w-1/4
                xl:w-1/5
                rounded-lg
                p-6
                text-center
                flex flex-col
                items-center
                space-y-2
                border-[#171e1a]
                border-2
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
              <span className="text-lg font-semibold text-[#DED4CE]">
                {member.name}
              </span>
              <span className="text-sm text-[#DED4CE]">{member.position}</span>
              <span className="text-sm text-[#DED4CE]">
                {member.grade} – {member.background}
              </span>
              <div className="flex space-x-4 pt-2">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DED4CE] hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DED4CE] hover:text-white"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DED4CE] hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-6">
        <h3 className="text-2xl font-semibold text-[#FBF7F5] text-center">
          DISC Executive Board Team 2025 - 2026
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {teamMembers.map((member: TeamMember) => (
            <div
              key={member.name}
              className="
                w-full
                sm:w-1/2
                md:w-1/3
                lg:w-1/4
                xl:w-1/5
                rounded-lg
                p-6
                text-center
                flex flex-col
                items-center
                space-y-2
                border-[#171e1a]
                border-2
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
              <span className="text-lg font-semibold text-[#DED4CE]">
                {member.name}
              </span>
              <span className="text-sm text-[#DED4CE]">{member.position}</span>
              <span className="text-sm text-[#DED4CE]">
                {member.grade} – {member.background}
              </span>
              <div className="flex space-x-4 pt-2">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DED4CE] hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DED4CE] hover:text-white"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DED4CE] hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
