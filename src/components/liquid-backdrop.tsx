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
            blur={28}
            displacementFactor={0.45}
            opacity={0.28}
            spacing={42}
            specularOpacity={0.28}
            tint={{ r: 0.58, g: 0.72, b: 0.5, a: 0.12 }}
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
