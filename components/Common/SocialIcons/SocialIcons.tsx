import { socialNetworkLinks } from "@lib/consts";
import SvgSocial from "@components/Common/SvgSocial/SvgSocial";
const SocialIcons = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-wrap items-center justify-center text-sm ">
        {socialNetworkLinks.map((option) => (
          <li key={option.id} className="mb-2 md:mb-0">
            <a
              className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
              href={option.url}
              target={option.target}
              rel="noreferrer"
            >
              <SvgSocial ico={option.socialIcon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
