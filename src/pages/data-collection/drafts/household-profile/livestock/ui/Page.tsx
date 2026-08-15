import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useFormDraftStore } from "@entities/case";
import { HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY } from "@entities/case";
import {
  livestockFormSchema,
  type LivestockFormValues,
} from "../model";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const defaultValues: LivestockFormValues = {
  hasLivestockPractice: false,
  hasAiServicePractice: false,
  animals: [],
  aiService: undefined,
};

export default function Page() {
  const navigate = useNavigate();

  const saveDraftValues = useFormDraftStore((s) => s.saveDraftValues);
  const getCachedDraftValues = useFormDraftStore((s) => s.getCachedDraftValues);

  const { caseId, householdId } = useParams({
    from: "/_app/data-collection/drafts/$caseId/household-profile/$householdId/livestock",
  });

  const methods = useForm<LivestockFormValues>({
    resolver: zodResolver(livestockFormSchema),
    defaultValues,
  });

  useEffect(() => {
    const cachedValues = getCachedDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY(householdId),
    ) as LivestockFormValues | undefined;

    if (cachedValues) {
      methods.reset(cachedValues);
    }
  }, [caseId, householdId, getCachedDraftValues, methods]);

  const onSubmit = async (values: LivestockFormValues) => {
    await saveDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_LIVESTOCK_KEY(householdId),
      values,
    );
  };

  const goPrevious = () => {
    navigate({
      to: "/data-collection/drafts/$caseId/household-profile/$householdId/agriculture",
      params: { caseId, householdId },
    });
  };

  const goNext = () => {
    navigate({
      to: "/data-collection/drafts/$caseId/household-profile/$householdId/decision-making",
      params: { caseId, householdId },
    });
  };

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm">
      <Header />
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
