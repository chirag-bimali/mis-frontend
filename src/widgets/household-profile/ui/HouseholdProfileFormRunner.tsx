import {
  FormProvider,
  useForm,
  type FieldValues,
  type DefaultValues,
} from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodType } from "zod";
import { useFormDraftStore } from "@entities/case";
import { FAMILY_SECTIONS } from "../model/family-sections";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@shared/ui/Button";
import type { FileRoutesById } from "@app/routeTree.gen";

type HouseholdProfileRoute = Extract<
  keyof FileRoutesById,
  `/_app/data-collection/drafts/$caseId/household-profile/$householdId/${string}`
>;

interface HouseholdProfileFormRunnerProps<
  TInput extends FieldValues,
  TOutput extends FieldValues,
> {
  sectionId: string;
  title: string;
  labelNe?: string;
  icon?: React.ReactNode;
  schema: ZodType<TOutput, TInput>;
  defaultValues: DefaultValues<TInput>;
  draftKeyFn: (householdId: string) => string;
  routeFrom: HouseholdProfileRoute;
  children: React.ReactNode;
}

export function HouseholdProfileFormRunner<
  TInput extends FieldValues,
  TOutput extends FieldValues,
>({
  sectionId,
  title,
  labelNe,
  icon,
  schema,
  defaultValues,
  draftKeyFn,
  routeFrom,
  children,
}: HouseholdProfileFormRunnerProps<TInput, TOutput>) {
  const navigate = useNavigate();
  const saveDraftValues = useFormDraftStore((s) => s.saveDraftValues);
  const getCachedDraftValues = useFormDraftStore((s) => s.getCachedDraftValues);

  const params = useParams({ from: routeFrom });
  const { caseId, householdId } = params;

  const methods = useForm<TInput, unknown, TOutput>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (!caseId || !householdId) return;
    const cachedValues = getCachedDraftValues(
      caseId,
      draftKeyFn(householdId),
    ) as TInput | undefined;

    if (cachedValues) {
      methods.reset(cachedValues);
    }
  }, [caseId, householdId, getCachedDraftValues, draftKeyFn, methods]);

  const sectionIndex = FAMILY_SECTIONS.findIndex((s) => s.id === sectionId);
  const prevSection =
    sectionIndex > 0 ? FAMILY_SECTIONS[sectionIndex - 1] : null;
  const nextSection =
    sectionIndex < FAMILY_SECTIONS.length - 1
      ? FAMILY_SECTIONS[sectionIndex + 1]
      : null;

  const goPrevious = () => {
    if (prevSection) {
      navigate({
        to: prevSection.link,
        params: { caseId, householdId },
      });
    }
  };

  const goNext = () => {
    if (nextSection) {
      navigate({
        to: nextSection.link,
        params: { caseId, householdId },
      });
    } else {
      navigate({
        to: "/data-collection/drafts/$caseId/household-profile",
        params: { caseId },
      });
    }
  };

  const onSubmit = async (values: TOutput) => {
    await saveDraftValues(caseId, draftKeyFn(householdId), values);
  };

  return (
    <section className="flex flex-col h-full overflow-hidden bg-white shadow-sm rounded-xl border border-ink-200">
      <header className="flex shrink-0 items-center gap-4 border-b border-ink-200 px-5 py-4">
        {icon && (
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-pri-50 text-pri-600">
            {icon}
          </div>
        )}
        <div>
          <h1 className="text-lg font-bold leading-6 text-ink-900">{title}</h1>
          {labelNe && (
            <p className="mt-0.5 text-sm font-bold uppercase tracking-wide text-ink-400">
              {labelNe}
            </p>
          )}
        </div>
      </header>

      <FormProvider {...methods}>
        <form
          className="flex flex-1 flex-col overflow-hidden"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>

          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-ink-200 px-5 py-4">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-center gap-3 sm:w-auto"
              onClick={goPrevious}
              disabled={!prevSection}
              type="button"
            >
              <MoveLeft className="h-4 w-4" />
              <span>Previous</span>
              <span className="text-xs font-semibold text-ink-400">
                (अघिल्लो)
              </span>
            </Button>

            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-center sm:w-auto"
                type="submit"
              >
                <span>Save Draft</span>
                <span className="text-xs font-semibold text-ink-400">
                  (मस्यौदा बचत गर्नुहोस्)
                </span>
              </Button>

              <Button
                variant="primary"
                size="sm"
                className="w-full justify-center gap-2 bg-success-500 shadow-success hover:bg-success-600 sm:w-auto"
                onClick={goNext}
                type="button"
              >
                <span>{nextSection ? "Next Step" : "Complete Survey"}</span>
                <span className="text-xs font-semibold text-white/80">
                  {nextSection ? "(अर्को चरण)" : "(सर्वेक्षण सम्पन्न गर्नुहोस)"}
                </span>
                <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </footer>
        </form>
      </FormProvider>
    </section>
  );
}
