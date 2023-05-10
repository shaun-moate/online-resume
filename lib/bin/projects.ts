import { getProjects } from "../api";

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo: any) =>
        `<span>${repo.name} - <a class="text-dark-green" href="${repo.html_url}" target="_blank">${repo.html_url}</a></span>`,
    )
    .join('\n');
};
