import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default function MemberFormPage() {
  return (
    <form className="flex flex-col overflow-hidden h-full bg-white">
      <Header />
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="flex-1">
          <Body />
        </div>
        <Footer
          onPrevious={function (): void {
            throw new Error("Function not implemented.");
          }}
          onNext={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </form>
  );
}
