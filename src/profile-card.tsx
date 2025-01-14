import ProfileImg from "./assets/profile.webp";

import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "./icons";

const SOCIALS = [GithubIcon, InstagramIcon, LinkedinIcon, XIcon];

export const ProfileCard = () => {
  return (
    <article className="mt-[200px] flex w-[340px] flex-col gap-10 self-start rounded-lg bg-white px-4 py-6 font-body [box-shadow:_0px_1px_3px_0px_rgba(0,_0,_0,_10%),_0px_1px_2px_0px_rgba(0,_0,_0,_6%)]">
      <div className="flex flex-col items-center gap-6">
        <picture>
          <img
            className="h-16 w-16"
            src={ProfileImg}
            alt="Photo of Sarah Doe"
          />
        </picture>

        <div className="flex flex-col items-center gap-1">
          <h3 className="text-xl font-medium text-neutral-900">Sarah Doe</h3>
          <p className="text-sm text-neutral-600">
            Front End Engineer @ Microsoft
          </p>
        </div>

        <p className="text-center text-neutral-600">
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <button className="h-11 w-full rounded-[4px] bg-indigo-700 font-medium text-white [box-shadow:_0px_1px_3px_0px_rgba(0,_0,_0,_10%),_0px_1px_2px_0px_rgba(0,_0,_0,_6%)]">
          Contact me
        </button>

        <div className="flex h-9 items-center justify-center gap-4">
          {SOCIALS.map((Icon, index) => (
            <div className="flex h-9 w-9 items-center justify-center">
              <Icon key={index} className="text-indigo-700" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
