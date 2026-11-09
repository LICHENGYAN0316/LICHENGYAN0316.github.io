import type { ExpressiveCodeConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Pluto",
  subtitle: "随笔 · 观察与思考",
  lang: "zh_CN",
  themeColor: { hue: 65, fixed: true },
  banner: { enable: false, src: "/pluto/hero-orbit.svg", position: "center", credit: { enable: false, text: "" } },
  toc: { enable: true, depth: 2 },
  favicon: [{ src: "/pluto/favicon.svg" }],
};
export const navBarConfig: NavBarConfig = {
  links: [{ name: "首页", url: "/" }, { name: "随笔", url: "/essays/" }, { name: "造物", url: "/creations/" }],
};
export const profileConfig: ProfileConfig = {
  avatar: "/pluto/avatar.svg", name: "Pluto", bio: "记录观察，也留住思考。", links: [],
};
export const licenseConfig: LicenseConfig = { enable: false, name: "", url: "" };
export const expressiveCodeConfig: ExpressiveCodeConfig = { theme: "github-dark" };
