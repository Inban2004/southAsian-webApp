import type { CSSProperties } from 'react';

const fontBody = "'Inter', sans-serif";
const fontDisplay = "'Fraunces', serif";

type TypographyTokens = {
  fontBody: string;
  fontDisplay: string;
  h2Display: CSSProperties;
  productName: CSSProperties;
  cardTitle: CSSProperties;
  bodyRegular: CSSProperties;
  buttonLabel: CSSProperties;
  badgeLabel: CSSProperties;
  navLink: CSSProperties;
};

export const Typography: TypographyTokens = {
  fontBody,
  fontDisplay,
  h2Display: { fontFamily: fontDisplay, fontWeight: 600, fontSize: '36px' },
  productName: { fontFamily: fontDisplay, fontWeight: 600, fontSize: '22px', lineHeight: '30px' },
  cardTitle: { fontFamily: fontDisplay, fontWeight: 600, fontSize: '18px', lineHeight: '24px' },
  bodyRegular: { fontFamily: fontBody, fontWeight: 400, fontSize: '16px', lineHeight: 1.5 },
  buttonLabel: { fontFamily: fontBody, fontWeight: 600, fontSize: '15px', letterSpacing: '0.15px' },
  badgeLabel: {
    fontFamily: fontBody,
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '0.24px',
    textTransform: 'uppercase',
  },
  navLink: {
    fontFamily: fontBody,
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '0.24px',
    textTransform: 'uppercase',
  },
};
