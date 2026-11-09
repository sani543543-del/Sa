import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import {theme, clampBoth} from "../theme";
import {useCue} from "../components/Scene";
import {Entrance, Glass, Words} from "../components/Motion";
import {Cross, NoSign} from "../components/Icons";

// Voiceover: "তারপরেও বাজারের সস্তা, chemical, flavor দেওয়া ঘি খেয়ে ... নষ্ট কইরেন না।"
const Tag: React.FC<{label: string; delay: number}> = ({label, delay}) => (
  <Entrance delay={delay} x={90} y={0} from={0.94}>
    <Glass width={660} padding={36} style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
      <span style={{fontFamily: theme.fonts.display, fontSize: 84, fontWeight: 700, lineHeight: 1.3, color: theme.colors.text}}>{label}</span>
      <Cross size={84} color={theme.colors.bad} delay={delay + 8} />
    </Glass>
  </Entrance>
);

export const S2Cheap: React.FC = () => {
  const at = useCue();
  const frame = useCurrentFrame();
  const dim = interpolate(frame, [at(10.1), at(10.1) + 10], [1, 0.32], {easing: theme.ease.out, ...clampBoth});
  return (
    <AbsoluteFill>
      <div style={{position: "absolute", left: 140, top: 0, bottom: 0, width: 900, display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Words text="বাজারের" delay={at(6.05)} size={96} weight={500} color={theme.colors.textDim} />
        <Words text="সস্তা ঘি" delay={at(6.35)} size={190} />
      </div>
      <div style={{position: "absolute", right: 150, top: 0, bottom: 0, width: 660, display: "flex", flexDirection: "column", justifyContent: "center", gap: 34, opacity: dim}}>
        <Tag label="chemical" delay={at(7.2)} />
        <Tag label="flavor" delay={at(8.0)} />
      </div>
      <div style={{position: "absolute", right: 330, top: 0, bottom: 0, display: "flex", alignItems: "center"}}>
        <Entrance delay={at(10.15)} y={0} from={0.4} config="bouncy">
          <NoSign size={330} color={theme.colors.bad} delay={at(10.15) + 2} />
        </Entrance>
      </div>
    </AbsoluteFill>
  );
};
