import Nav from "@components/nav";
import Provider from "@components/provider";
import "@styles/globals.css";

export const metadata = {
  title: "Shompts",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-black">
        <Provider>
          <Nav />
          <div className="flex flex-col">{children}</div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
