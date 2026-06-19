"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";

const LiquidSurface = dynamic(
  async () => {
    const { Frame, Glass, GlassContainer, LiquidCanvas, ZStack } =
      await import("@liquid-dom/react");

    return function LiquidSurfaceInner() {
      return (
        <LiquidCanvas
          className="liquid-enhancement"
          frameloop="demand"
          maxDpr={1}
          onError={() => undefined}
        >
          <GlassContainer
            blur={34}
            displacementFactor={0.3}
            opacity={0.16}
            spacing={42}
            specularOpacity={0.38}
            tint={{ r: 0.72, g: 0.82, b: 1, a: 0.1 }}
          >
            <ZStack>
              <Frame width={480} height={260}>
                <Glass cornerRadius={130} />
              </Frame>
              <Frame width={210} height={430}>
                <Glass cornerRadius={105} />
              </Frame>
            </ZStack>
          </GlassContainer>
        </LiquidCanvas>
      );
    };
  },
  { ssr: false },
);

class LiquidBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function LiquidBackdrop() {
  return (
    <LiquidBoundary>
      <LiquidSurface />
    </LiquidBoundary>
  );
}
