import { siteConfig } from "@/config/site";

export const banner = () => {
  return `
     ad88888ba   88                                                    88b           d88
    d8"     "8b  88                                                    888b         d888                             ,d
    88           88                                                    d8'88       d8'88                             88
     Y8aaaaa,    88,dPPYba,   ,adPPYYba,  88       88  8b,dPPYba,      88  8b     d8' 88   ,adPPYba,   ,adPPYYba,  MM88MMM  ,adPPYba,
       """""8b,  88P'    "8a  ""      Y8  88       88  88P'    "8a     88   8b   d8'  88  a8"     "8a  ""      Y8    88    a8P_____88
             8b  88       88  ,adPPPPP88  88       88  88       88     88    8b d8'   88  8b       d8  ,adPPPPP88    88    8PP"""""""
    Y8a     a8P  88       88  88,    ,88  "8a,   ,a88  88       88     88     888'    88  "8a,   ,a8"  88,    ,88    88,   "8b,   ,aa  888
     "Y88888P"   88       88   "8bbdP"Y8    "YbbdP'Y8  88       88     88      8'     88    "YbbdP"'    "8bbdP"Y8    "Y888   "Ybbd8"'  888

    Type 'help' to see the list of available commands.
    Type 'projects' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${siteConfig.links.github}" target="_blank">here</a></u> for the Github repository.
    `;
}

