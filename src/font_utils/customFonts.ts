import localFont from "next/font/local";

const Akzidenz = localFont({
  src: [{ path: "../../public/font/akzidenzgroteskpro_regular.ttf" }],
  variable: "--font-Akzidenz",
});

const Akzidenzlc = localFont({
  src: [{ path: "../../public/font/akzidenzgroteskpro_lightcn.ttf" }],
  variable: "--font-Akzidenzlc",
});

const Akzidenzpc = localFont({
  src: [{ path: "../../public/font/akzidenzgroteskpro_boldcn.ttf" }],
  variable: "--font-Akzidenzpc",
});

const SaolDisplay = localFont({
  src: [{ path: "../../public/font/SaolDisplay-LightItalic.ttf" }],
  variable: "--font-SaolDisplay",
});
const SaolDisplayR = localFont({
  src: [{ path: "../../public/font/SaolDisplay-Regular.ttf" }],
  variable: "--font-SaolDisplayR",
});
const SaolDisplayl = localFont({
  src: [{ path: "../../public/font/akzidenzgroteskpro_light.ttf" }],
  variable: "--font-SaolDisplayl",
});

export {
  SaolDisplay,
  Akzidenz,
  SaolDisplayR,
  Akzidenzpc,
  Akzidenzlc,
  SaolDisplayl,
};
