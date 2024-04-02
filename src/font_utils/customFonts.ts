import localFont from "next/font/local";

const Akzidenregular = localFont({
  src: [{ path: "../../public/font/akzidenzgroteskpro_regular.ttf" }],
  variable: "--font-Akzidenregular",
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
  src: [{ path: "../../public/font/SaolDisplay-Light.ttf" }],
  variable: "--font-SaolDisplayl",
});
const Apercu = localFont({
  src: [{ path: "../../public/font/Apercu_Regular.otf" }],
  variable: "--font-Apercu_Regular",
});
export {
  SaolDisplay,
  Akzidenregular,
  SaolDisplayR,
  Akzidenzpc,
  Akzidenzlc,
  SaolDisplayl,
  Apercu,
};
