const Page = () => {
  return (
    <div className="">
      <div className="" />
      <div className="px-4 mt-10 flex flex-col items-center gap-6 w-full overflow-hidden mb-8 md:mb-12 flex-1">
        <h1 className="text-center font-space-grotesk font-semibold leading-none tracking-tighter bg-gradient-to-br bg-clip-text text-transparent from-blue-400 via-blue-500 to-blue-600 text-3xl sm:text-5xl md:text-6xl">
          Typonify: Manage Your Fonts <br /> Effortlessly
        </h1>
        <p className="text-center text-xs sm:text-base text-pretty text-secondary-foreground font-space-grotesk font-light">
          Discover the power of easy, fast, and reliable font management. <br />{" "}
          Perfect for designers, developers, and creators.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/download"
            className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Download Now
          </a>
          <a
            href="/features"
            className="px-6 py-3 rounded-md bg-gray-100 text-blue-600 font-medium hover:bg-gray-200"
          >
            Learn More
          </a>
        </div>

        <div
          style={{
            perspective: "4000px",
            perspectiveOrigin: "100% 120%",
          }}
        >
          {/* <img
            alt="Typonify preview image"
            src="/typonify-preview.png"
            style={{
              transform:
                "translateX(8%) scale(1.2) rotateX(45deg) rotateY(31deg) rotate(324deg)",
            }}
            className="w-full h-full object-cover object-center rounded-xl"
          /> */}
          <div className="hero-image rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Page;
