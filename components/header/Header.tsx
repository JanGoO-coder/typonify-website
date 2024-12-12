import { ThemedButton } from "@/components/ThemedButton";

const Header = () => {
  return (
    <header className="py-6 bg-black/5 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-x-4">
            <img src="./logo.svg" alt="" />
            {/* <span className="text-lg font-semibsold">Typonify</span> */}
          </div>

          <div className="hidden md:flex md:items-center md:gap-x-8">
            <ul className="flex items-center gap-x-8 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/features" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="hover:text-gray-300">
                  How it works
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-gray-300">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-x-4">
            <a
              href="/getting-started"
              className="px-4 py-2 text-sm font-medium text-white border rounded-lg border-white hover:bg-white hover:text-blue-900"
            >
              Getting Started
            </a>
            <ThemedButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
