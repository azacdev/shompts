import PromptCard from "./prompt-card";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full max-w-7xl text-white mx-auto py-20 px-4 z-30">
      <h1 className="head_text text-left">
        <span className="green_gradient">{name} Profile</span>
      </h1>
      <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 mt-4 text-xl font-normal max-w-lg">
        {desc}
      </p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            item={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
