import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultSocialForm, socialFormSchema, type SocialForm } from "../model";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useFormDraftStore, HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY } from "@entities/case";

export default function Page() {
  const navigate = useNavigate();

  const saveDraftValues = useFormDraftStore((s) => s.saveDraftValues);
  const getCachedDraftValues = useFormDraftStore((s) => s.getCachedDraftValues);

  const { caseId, householdId } = useParams({
    from: "/_app/data-collection/drafts/$caseId/household-profile/$householdId/social-cultural",
  });

  const methods = useForm<SocialForm>({
    resolver: zodResolver(socialFormSchema),
    defaultValues: {
      ...defaultSocialForm,
      familyId: householdId,
    },
  });

  useEffect(() => {
    const cachedValues = getCachedDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY(householdId),
    ) as SocialForm | undefined;

    if (cachedValues) {
      methods.reset(cachedValues);
    }
  }, [caseId, householdId, getCachedDraftValues, methods]);

  const onSubmit = async (values: SocialForm) => {
    await saveDraftValues(
      caseId,
      HOUSEHOLD_PROFILE_HOUSEHOLD_SOCIAL_CULTURAL_KEY(householdId),
      values,
    );
  };

  const goPrevious = () => {
    navigate({
      to: "/data-collection/drafts/$caseId/household-profile/$householdId/decision-making",
      params: { caseId, householdId },
    });
  };

  const goNext = () => {
    navigate({
      to: "/data-collection/drafts/$caseId/household-profile/$householdId/disaster",
      params: { caseId, householdId },
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
