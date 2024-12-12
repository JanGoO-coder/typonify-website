import { siteConfig } from "@/config/site";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-background text-sm text-gray-400">
        <div className="flex space-x-2"></div>
        <div className="flex flex-row gap-1">
          <div>{`©${currentYear}`}</div> <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
