"use client";

import ErrorBoundary from "@/component/ErrorBoundary";
import ErrorContainer from "@/container/ErrorContainer";

export default function ErrorBoundaryPage() {
  return (
    <ErrorBoundary>
      <ErrorContainer />
    </ErrorBoundary>
  );
}
