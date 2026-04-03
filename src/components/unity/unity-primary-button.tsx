import type { ComponentProps } from "react";

import { UnityButton } from "./unity-button";

export type UnityPrimaryButtonProps = Omit<ComponentProps<typeof UnityButton>, "variant">;

/** Figma: `button/primary` — фиолетовая CTA */
export function UnityPrimaryButton(props: UnityPrimaryButtonProps) {
  return <UnityButton variant="primary" {...props} />;
}
