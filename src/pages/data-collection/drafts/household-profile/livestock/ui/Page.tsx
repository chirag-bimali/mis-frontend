import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default function Page() {
  return (
    <section className="flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm">
      <Header />
      <Body />
      <Footer />
    </section>
  );
}
