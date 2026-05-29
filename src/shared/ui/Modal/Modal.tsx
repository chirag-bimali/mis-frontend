import type { ReactNode } from "react";
import { X, type LucideIcon } from "lucide-react";
import cn from "@shared/lib";

interface ModalProps {
  Icon?: LucideIcon;
  isOpen: boolean;
  title: string;
  description?: string;
  eyebrow?: string;
  onClose: () => void;
  disableClose?: boolean;
  children: ReactNode;
  className?: string;
}

export function Modal({
  Icon,
  isOpen,
  title,
  description,
  eyebrow,
  onClose,
  disableClose = false,
  children,
  className,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 p-4 bg-black/50 md:p-8">
      <div
        className={cn(
          "mis-modal-shell mx-auto mt-8 w-full max-w-7xl p-6",
          className,
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-500">
                {eyebrow}
              </p>
            )}
            <div className="flex gap-5 items-center">
              {Icon && (
                <div className="mt-2 bg-pri-100 text-pri-700 p-4 rounded-sm">
                  <Icon className="h-6 w-6" />
                </div>
              )}
              <div>
                <h3 className="mt-2 text-2xl uppercase font-extrabold leading-[1.1] tracking-[-0.015em] text-ink-700">
                  {title}
                </h3>

                {description ? (
                  <p className="mt-2 text-sm text-(--mis-color-ink-600)">
                    {description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={disableClose}
            className="rounded-field cursor-pointer p-4 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
