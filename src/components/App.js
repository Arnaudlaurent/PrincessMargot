import Header from "./Header";
import Footer from "./Footer";
import ActivityDetail from "./ActivityDetail";
import Profile from "./Profile";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <ActivityDetail /> */}
        <Profile />
      </main>
      <Footer />
    </div>
  );
}
