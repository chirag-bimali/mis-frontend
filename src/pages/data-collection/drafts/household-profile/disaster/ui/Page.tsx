import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultDisasterForm, disasterFormSchema, type DisasterFormValues } from "../model";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useFormDraftStore, HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY } from "@entities/case";

export default function Page() {
  const navigate = useNavigate();

  const saveDraftValues = useFormDraftStore((s) => s.saveDraftValues);
  const getCachedDraftValues = useFormDraftStore((s) => s.getCachedDraftValues);

  const { caseId, householdId } = useParams({
    from: "/_app/data-collection/drafts/$caseId/household-profile/$householdId/disaster",
  });

  const methods = useForm<DisasterFormValues>({
    resolver: zodResolver(disasterFormSchema),
    defaultValues: {
      ...defaultDisasterForm,
      familyId: householdId,
    },
  });

  useEffect(() => {
    const cachedValues = getCachedDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY(householdId),
    ) as DisasterFormValues | undefined;

    if (cachedValues) {
      methods.reset(cachedValues);
    }
  }, [caseId, householdId, getCachedDraftValues, methods]);

  const onSubmit = async (values: DisasterFormValues) => {
    await saveDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_DISASTER_KEY(householdId),
      values,
    );
  };

  const goPrevious = () => {
    navigate({
      to: "/data-collection/drafts/$caseId/household-profile/$householdId/social-cultural",
      params: { caseId, householdId },
    });
  };

  const goNext = () => {
    navigate({
      to: "/data-collection/drafts/$caseId/household-profile",
      params: { caseId },
    });
  };

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
