import { siteConfig } from "@/config/site";

export const neofetch = () => {
    return `
             @@@@@@@@@@@@@                    neofetch: summary of my details
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${siteConfig.fullname}
  @@                               @@        ${siteConfig.location}
 @@                         @@@     @@      ﰩ ${siteConfig.description}
@@        @@@                        @@      <u><a href="${siteConfig.links.linkedin}" target="_blank">LinkedIn</a></u>
@@                                   @@     爵<u><a href="${siteConfig.links.github}" target="_blank">Github</a></u>
@@             .@@@@@@@@@@.          @@     -----------
 @@           @@          @@        @@       CONTACT
  @@           @@        @@        @@        <u><a href="mailto:${siteConfig.email}" target="_blank">${siteConfig.email}</a></u>
   @@             @@@@@@          @@         <u><a href="${siteConfig.links.linkedin}" target="_blank">linkedin.com/in/${siteConfig.links.user}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          PROJECTS
         @|  @@@@@@@@@@@@@@@@   @@          tbd
         @|                      @@
`;
};
