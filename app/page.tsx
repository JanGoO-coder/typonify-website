const Page = () => {
  return (
    <div className="">
      <div className="px-4 mt-10 flex flex-col items-center gap-6 w-full overflow-hidden mb-8 md:mb-12 flex-1">
        <h1
          className="text-center text-[#DBE3EB] font-bold text-3xl sm:text-5xl md:text-9xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Typonify
        </h1>
        <p className="text-center text-lg text-secondary-foreground font-medium mt-4">
          Perfect for designers, developers, and creators.
        </p>

        <div className="mt-2 flex justify-center gap-4">
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
            See Pricing
          </a>
        </div>

        <div className="hero-image rounded-xl" />
        <img
          alt="Typonify preview image"
          src="/typonify-preview.png"
          className="w-full h-full object-cover object-center rounded-xl"
        />
      </div>
    </div>
  );
};

export default Page;
