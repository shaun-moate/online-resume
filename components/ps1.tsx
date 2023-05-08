import { siteConfig } from "@/config/site"

export const Ps1 = () => {
  return (
    <div>
      <span className="text-dark-yellow">
        {siteConfig.username}
      </span>
      <span className="text-dark-grey">
        @
      </span>
      <span className="text-dark-green">
        {siteConfig.host}
      </span>
      <span className="text-dark-grey">
      :$ ~
      </span>
    </div>
  )
};
