import getMessages from "./actions/getMessages";
import Footer from "./components/Footer";
import NewsFeed from "./components/NewsFeed";

const Home = async () => {
  const messages = await getMessages();

  return (
    <>
      <h1 className="text-4xl text-center p-10">Crypto news feed</h1>
      <NewsFeed 
        messages={messages}
      />
      <Footer />
    </>
  )
}

export default Home;
