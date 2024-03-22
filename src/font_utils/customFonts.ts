import localFont from "next/font/local";

const Akzidenz = localFont({
  src: [{ path: "../../public/font/akzidenzgroteskpro_regular.ttf" }],
  variable: "--font-Akzidenz",

  
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

export {SaolDisplay, Akzidenz ,SaolDisplayR ,Akzidenzpc};