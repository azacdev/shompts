import Link from "next/link";
import { Icon } from "@/utils/icon";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full flex-start flex-col max-w-7xl text-white mx-auto py-20 px-4 z-30">
      <h1 className="head_text text-left">
        <span className="blueish_lime_gradient">{type} Post</span>
      </h1>
      <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 mt-4 text-xl font-normal max-w-lg">
        {type} and share incredible prompts with the world and unleash your
        creativity on any AI-powered platform.
      </p>

      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-2xl mt-10 p-4 relative h-[30rem] w-full">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-7 w-full">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your AI Prompt
            </span>

            <textarea
              value={post?.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              placeholder="write your prompt here..."
              required
              className="form_textarea"
            />
          </label>

          <label>
            <span classname="font-satoshi font-semibold text-base text-gray-700">
              Tag{" "}
              <span className="font_normal">
                {" "}
                (#product, #webdevelopment, #idea)
              </span>
            </span>

            <input
              value={post?.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              placeholder="#tag"
              required
              className="form_input"
            />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              {submitting ? `${type}...` : type}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
