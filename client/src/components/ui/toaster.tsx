import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastIcon,
  ToastContent,
  ToastProgress,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        duration,
        ...props
      }) {
        return (
          <Toast key={id} variant={variant} {...props} className="relative">
            <ToastProgress
              duration={duration || 5000}
              variant={variant || "default"}
            />
            <div className="flex items-start space-x-4 w-full">
              <ToastIcon variant={variant || "default"} />
              <ToastContent>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </ToastContent>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
