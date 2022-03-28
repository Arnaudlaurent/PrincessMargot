import Header from "./Header";
import Footer from "./Footer";
import ActivityDetail from "./ActivityDetail";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ActivityDetail />
      </main>
      <Footer />
    </div>
  );
}
