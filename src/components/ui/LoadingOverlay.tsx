import { Loader2 } from "lucide-react";

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Loader2 className="h-8 w-8 animate-spin text-white" />
    </div>
  );
}