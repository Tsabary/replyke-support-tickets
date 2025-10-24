"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "./posthog-provider";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./auth-context";
import PopulatedReplykeProvider from "./populated-replyke-provider";

function ContextProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <PostHogProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <PopulatedReplykeProvider>{children}</PopulatedReplykeProvider>
          </AuthProvider>
        </ThemeProvider>
      </PostHogProvider>
    </>
  );
}

export default ContextProviders;
