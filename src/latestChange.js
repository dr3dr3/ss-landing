import React from "react";
import { useFlag, useStatus } from "@featurevisor/react";

export default function LatestChange() {
  const { isReady } = useStatus();
  const isEnabled = useFlag("showLatestChange");

  if (isEnabled) {
    return <div class="latest">Latest Change: COMMIT-MESSAGE-PLACEHOLDER</div>;
  }

  if (!isReady) {
    return <div class="latest">Loading...</div>;
  }

  return;
};
