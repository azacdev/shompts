import Feed from "@components/Feed";
import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1">
          <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="green_lime_gradient">AI-Powered Prompts</span>
          </h1>
          <p className="desc text-center">
            Shompts is an AI prompting tool for modern world to discover, create
            and share creative prompts
          </p>
        </div>

        <div className="flex-1 mx-auto">
          <Image
            src="/assets/images/ai-prompt.svg"
            alt="prompt-image"
            width={400}
            height={400}
          />
        </div>
      </div>

      {<Feed />}
    </section>
  );
};

export default Home;
