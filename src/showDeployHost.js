import React from "react";
import { useFlag, useStatus } from "@featurevisor/react";

export default function ShowDeployHost() {
  const { isReady } = useStatus();
  const isEnabled = useFlag("showDeployHost");

  if (isReady && isEnabled) {
    return <div className="host">Hosted on: DEPLOY-HOST-PLACEHOLDER</div>;
  }

  if (!isReady) {
    return <div className="host">...</div>;
  }

  return <div className="host">🔖</div>;
};
