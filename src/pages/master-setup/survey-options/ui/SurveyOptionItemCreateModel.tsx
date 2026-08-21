import { Plus } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ApiError } from "@shared/api";
import { Button } from "@shared/ui";
import { Input, SearchSelect } from "@shared/ui";
import { FormField } from "@shared/ui";
import { Modal } from "@shared/ui";
import {
  optionListToSelectOption,
  useCreateOptionItem,
  useOptionListSearch,
} from "@entities/option";
import { createOptionItemSchema, type CreateOptionItem } from "@shared/model";

interface SurveyOptionItemCreateModalProps {
  isOpen: boolean;
  optionListId: string;
  optionListName?: string;
  onClose: () => void;
  onSave: () => void | Promise<void>;
}

// type CreateOptionItemFormData = Omit<CreateOptionItem, "optionListId">;

export function SurveyOptionItemCreateModal({
  isOpen,
  optionListId,
  optionListName,
  onClose,
  onSave,
}: SurveyOptionItemCreateModalProps) {
  const { mutateAsync: createOptionItemAsync } = useCreateOptionItem();
  const [apiError, setApiError] = useState<string | null>(null);
  const [childOptionListSearchValue, setChildOptionListSearchValue] =
    useState<string>("");

  const {
    data: childOptionListData = [],
    isLoading: isChildOptionListLoading,
  } = useOptionListSearch(
    childOptionListSearchValue,
    Boolean(childOptionListSearchValue),
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    resetField,

    formState: { isSubmitting, errors },
  } = useForm<CreateOptionItem>({
    resolver: zodResolver(createOptionItemSchema),
    defaultValues: {
      labelEn: "",
      labelNe: "",
      childOptionListId: undefined,
      optionListId: optionListId,
    },
  });

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    setApiError(null);
    onClose();
  };

  const handleSave = async (data: CreateOptionItem) => {
    const normalizedPayload = {
      optionListId: optionListId.trim(),
      childOptionListId: data.childOptionListId,
      labelEn: data.labelEn.trim(),
      labelNe: data.labelNe.trim(),
    };

    setApiError(null);

    try {
      await createOptionItemAsync(normalizedPayload);

      reset({
        labelEn: "",
        labelNe: "",
        childOptionListId: undefined,
        optionListId: optionListId,
      });

      await onSave();
      onClose();
    } catch (error) {
      const apiErrorObj = error as ApiError;
      setApiError(apiErrorObj.message || "Failed to create option item.");
      console.error("Error creating option item:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title={`Create New ${optionListName ?? "Survey Option Item"}`}
      description={`Add a new item${optionListName ? ` under ${optionListName}` : ""}.`}
      onClose={handleClose}
      disableClose={isSubmitting}
    >
      <form onSubmit={handleSubmit(handleSave)} className="mt-6 space-y-6">
        <div className="grid grid-cols-2 gap-x-32">
          <FormField
            label="Name (EN)"
            required
            errorText={errors.labelEn?.message}
          >
            <Input
              {...register("labelEn")}
              placeholder="Enter English item name"
              hasError={Boolean(errors.labelEn)}
              block={true}
            />
          </FormField>

          <Controller
            name="childOptionListId"
            control={control}
            render={({ field }) => (
              <FormField
                label="Child Option List"
                errorText={errors.childOptionListId?.message}
              >
                <SearchSelect
                  searchValue={childOptionListSearchValue}
                  onSearchValueChange={setChildOptionListSearchValue}
                  onReset={() => resetField("childOptionListId")}
                  onSelect={(value) => field.onChange(value.value)}
                  selectedKey={field.value || ""}
                  options={
                    childOptionListData?.map(optionListToSelectOption) || []
                  }
                  error={Boolean(errors.childOptionListId)}
                  errorMessage={errors.childOptionListId?.message}
                  loading={isChildOptionListLoading}
                  placeholder="Enter child option list ID"
                />
              </FormField>
            )}
          />

          <FormField
            label="Name (NE)"
            required
            errorText={errors.labelNe?.message}
          >
            <Input
              {...register("labelNe")}
              placeholder="Nepali item name"
              hasError={Boolean(errors.labelNe)}
              block={true}
            />
          </FormField>
        </div>

        {!optionListId ? (
          <p className="rounded-field border border-error-100 bg-error-50 px-4 py-3 text-sm font-semibold text-error-600">
            Select a survey option before creating an item.
          </p>
        ) : null}

        {apiError ? (
          <p className="rounded-field border border-error-100 bg-error-50 px-4 py-3 text-sm font-semibold text-error-600">
            {apiError}
          </p>
        ) : null}
        <div className="flex flex-wrap justify-end gap-3 border-t border-ink-200 pt-5">
          <Button
            type="button"
            variant="ghost"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            onClick={() => console.log("Submit button clicked")}
          >
            <Plus className="h-4 w-4" />
            {isSubmitting ? "Creating..." : "Create Option Item"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
