import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-6 right-6 z-[100] flex max-h-screen w-full flex-col gap-3 p-4 sm:max-w-[440px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start space-x-4 overflow-hidden rounded-2xl border p-6 pr-10 shadow-2xl backdrop-blur-md transition-all duration-500 ease-out data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 hover:scale-[1.02] hover:shadow-3xl",
  {
    variants: {
      variant: {
        default:
          "border-emerald-200/60 bg-gradient-to-br from-emerald-50/95 via-green-50/95 to-emerald-100/95 text-emerald-900 dark:border-emerald-800/60 dark:from-emerald-950/95 dark:via-green-950/95 dark:to-emerald-900/95 dark:text-emerald-100 shadow-emerald-200/20 dark:shadow-emerald-900/20",
        destructive:
          "border-red-200/60 bg-gradient-to-br from-red-50/95 via-rose-50/95 to-red-100/95 text-red-900 dark:border-red-800/60 dark:from-red-950/95 dark:via-rose-950/95 dark:to-red-900/95 dark:text-red-100 shadow-red-200/20 dark:shadow-red-900/20",
        info: "border-blue-200/60 bg-gradient-to-br from-blue-50/95 via-sky-50/95 to-blue-100/95 text-blue-900 dark:border-blue-800/60 dark:from-blue-950/95 dark:via-sky-950/95 dark:to-blue-900/95 dark:text-blue-100 shadow-blue-200/20 dark:shadow-blue-900/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-9 shrink-0 items-center justify-center rounded-xl border bg-transparent px-4 text-sm font-medium ring-offset-background transition-all duration-200 hover:bg-secondary/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-3 top-3 rounded-xl p-2 text-foreground/60 opacity-0 transition-all duration-200 hover:text-foreground hover:bg-background/20 hover:scale-110 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastIcon = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    variant?: "default" | "destructive" | "info";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const icons = {
    default: CheckCircle2,
    destructive: AlertCircle,
    info: Info,
  };

  const iconColors = {
    default: "text-emerald-600 dark:text-emerald-400",
    destructive: "text-red-600 dark:text-red-400",
    info: "text-blue-600 dark:text-blue-400",
  };

  const Icon = icons[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg",
        variant === "default" &&
          "bg-gradient-to-br from-emerald-500 to-green-600",
        variant === "destructive" &&
          "bg-gradient-to-br from-red-500 to-rose-600",
        variant === "info" && "bg-gradient-to-br from-blue-500 to-sky-600",
        className
      )}
      {...props}
    >
      <Icon className="h-5 w-5 text-white animate-in zoom-in-50 duration-300" />
    </div>
  );
});
ToastIcon.displayName = "ToastIcon";

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(
      "text-base font-bold tracking-tight leading-tight",
      className
    )}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90 leading-relaxed mt-1", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

const ToastContent = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 min-w-0", className)} {...props} />
));
ToastContent.displayName = "ToastContent";

// Progress bar component for auto-dismiss indication
const ToastProgress = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    duration?: number;
    variant?: "default" | "destructive" | "info";
  }
>(({ className, duration = 5000, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute bottom-0 left-0 right-0 h-1 bg-black/10 dark:bg-white/10 overflow-hidden",
      className
    )}
    {...props}
  >
    <div
      className={cn(
        "h-full transition-all ease-linear",
        variant === "default" &&
          "bg-gradient-to-r from-emerald-500 to-green-500",
        variant === "destructive" &&
          "bg-gradient-to-r from-red-500 to-rose-500",
        variant === "info" && "bg-gradient-to-r from-blue-500 to-sky-500"
      )}
      style={{
        animation: `toast-progress ${duration}ms linear forwards`,
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @keyframes toast-progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `,
      }}
    />
  </div>
));
ToastProgress.displayName = "ToastProgress";

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastIcon,
  ToastContent,
  ToastProgress,
};
