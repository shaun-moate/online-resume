import { siteConfig } from "@/config/site";

export const neofetch = () => {
    return `
             @@@@@@@@@@@@@                    neofetch: summar of my details
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

Type 'help' to see the list of available commands.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${siteConfig.links.github}" target="_blank">here</a></u> for the Github repository.
`;
};
