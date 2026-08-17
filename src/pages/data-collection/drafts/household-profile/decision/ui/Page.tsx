import { FormProvider, useForm } from "react-hook-form";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultDecisionForm, decisionFormSchema, type DecisionForm } from "../model";
import { useParams } from "@tanstack/react-router";

export default function Page() {
  const { householdId } = useParams({
    from: "/_app/data-collection/drafts/$caseId/household-profile/$householdId/decision-making",
  });
  const methods = useForm<DecisionForm>({
    resolver: zodResolver(decisionFormSchema),
    defaultValues: {
      ...defaultDecisionForm,
      familyId: householdId,
    },
  });

  const goPrevious = () => {};
  const goNext = () => {};
  const onSubmit = () => {};

  return (
    <section className="flex flex-col h-full overflow-hidden bg-white shadow-sm">
      <div>
        <Header />
      </div>
      <FormProvider {...methods}>
        <form
          className="flex flex-1 flex-col overflow-hidden"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Body />
          <Footer onPrevious={goPrevious} onNext={goNext} />
        </form>
      </FormProvider>
    </section>
  );
}
