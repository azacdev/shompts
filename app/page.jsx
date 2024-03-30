import Feed from "@/components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center max-w-7xl px-4">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col py-20 items-center justify-center z-30">
          <p className="text-4xl sm:text-7xl font-bold relative z-20  bg-clip-text text-transparent bg-gradient-to-b from-lime-500 to-sky-200 bg-opacity-50 py-8">
            Discover & Share
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 mt-4 text-lg font-normal max-w-lg text-center mx-auto px-4">
            Shompts is an AI prompting tool for modern world to discover, create
            and share creative prompts
          </p>
          {<Feed />}
        </div>
      </div>
    </section>
  );
};

export default Home;
