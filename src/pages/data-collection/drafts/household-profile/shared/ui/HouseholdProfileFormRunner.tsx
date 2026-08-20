import { FormProvider, useForm, type FieldValues, type DefaultValues } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodType } from "zod";
import { useFormDraftStore } from "@entities/case";
import { FAMILY_SECTIONS } from "../../navigation/model";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@shared/ui/Button";

interface HouseholdProfileFormRunnerProps<T extends FieldValues> {
  sectionId: string;
  title: string;
  labelNe?: string;
  icon?: React.ReactNode;
  schema: ZodType<T>;
  defaultValues: DefaultValues<T>;
  draftKeyFn: (householdId: string) => string;
  routeFrom: string;
  children: React.ReactNode;
}

export function HouseholdProfileFormRunner<T extends FieldValues>({
  sectionId,
  title,
  labelNe,
  icon,
  schema,
  defaultValues,
  draftKeyFn,
  routeFrom,
  children,
}: HouseholdProfileFormRunnerProps<T>) {
  const navigate = useNavigate();
  const saveDraftValues = useFormDraftStore((s) => s.saveDraftValues);
  const getCachedDraftValues = useFormDraftStore((s) => s.getCachedDraftValues);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = useParams({ from: routeFrom as any }) as { caseId: string; householdId: string };
  const { caseId, householdId } = params;

  const methods = useForm<T>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any),
    defaultValues,
  });

  useEffect(() => {
    if (!caseId || !householdId) return;
    const cachedValues = getCachedDraftValues(
      caseId,
      draftKeyFn(householdId),
    ) as T | undefined;

    if (cachedValues) {
      methods.reset(cachedValues);
    }
  }, [caseId, householdId, getCachedDraftValues, draftKeyFn, methods]);

  const sectionIndex = FAMILY_SECTIONS.findIndex((s) => s.id === sectionId);
  const prevSection = sectionIndex > 0 ? FAMILY_SECTIONS[sectionIndex - 1] : null;
  const nextSection =
    sectionIndex < FAMILY_SECTIONS.length - 1 ? FAMILY_SECTIONS[sectionIndex + 1] : null;

  const goPrevious = () => {
    if (prevSection) {
      navigate({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        to: prevSection.link as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        params: { caseId, householdId } as any,
      });
    }
  };

  const goNext = () => {
    if (nextSection) {
      navigate({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        to: nextSection.link as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        params: { caseId, householdId } as any,
      });
    } else {
      navigate({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        to: "/data-collection/drafts/$caseId/household-profile" as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        params: { caseId } as any,
      });
    }
  };

  const onSubmit = async (values: T) => {
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
              <span className="text-xs font-semibold text-ink-400">(अघिल्लो)</span>
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
