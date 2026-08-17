import Body from "./Body";
import Footer from "./Footer";
import { useNavigate, useParams } from "@tanstack/react-router";
import Header from "./Header";

export default function AgricultureFormPage() {
  const navigate = useNavigate();

  const { caseId, householdId } = useParams({
    from: "/_app/data-collection/drafts/$caseId/household-profile/$householdId/agriculture",
  });

  const goPrevious = () => {
    navigate({
      to: "/data-collection/drafts/$caseId/household-profile/$householdId/health",
      params: {
        caseId,
        householdId,
      },
    });
  };

  const goNext = () => {
    navigate({
      to: "/data-collection/drafts/$caseId/household-profile/$householdId/livestock",
      params: {
        caseId,
        householdId,
      },
    });
  };

  const onSubmit = () => {};

  return (
    <section className="flex h-full flex-col p-6 pb-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Header />

      <div className="flex-1 overflow-hidden flex flex-col overflow-y-auto">
        <div className="flex-1">
          <Body />
          <Footer onPrevious={goPrevious} onNext={goNext} onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
}
