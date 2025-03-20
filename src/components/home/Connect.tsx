import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Connect = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <LinkIcon className="size-[18px]" />
        <h2 className="text-sm">Connect</h2>
      </div>
      <div className="flex flex-col gap-1 px-2">
        <a href="https://github.com/mspatel18" target="_blank">
          <Button variant="ghost" className="flex items-center gap-2">
            <SiGithub height={20} width={20} />
            <h2 className="text-sm text-foreground/50 ">Github</h2>
          </Button>
        </a>
        <a href="https://instagram.com/mspatel18" target="_blank">
          <Button variant="ghost" className="flex items-center gap-2">
            <SiInstagram height={20} width={20} />
            <h2 className="text-sm text-foreground/50 ">Instagram</h2>
          </Button>
        </a>
        <a href="https://x.com/mspatel_18" target="_blank">
          <Button variant="ghost" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              ></path>
            </svg>
            <h2 className="text-sm text-foreground/50 ">Twitter</h2>
          </Button>
        </a>
        <a href="https://linkedin.com/in/mspatel18" target="_blank">
          <Button variant="ghost" className="flex items-center gap-2">
            <SiLinkedin height={20} width={20} />
            <h2 className="text-sm text-foreground/50 ">Linkedin</h2>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Connect;
