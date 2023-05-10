import { siteConfig } from "@/config/site";
import axios from "axios";

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${siteConfig.links.user}/repos`,
  );
  return data;
};
