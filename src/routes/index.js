import Home from "~/pages/Home";
import HeaderOnly from "~/layouts/HeaderOnly";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import configs from "~/configs";
import Live from "~/pages/Live";
export const publicRoutes = [
  { path: configs.routes.home, component: Home },
  { path: configs.routes.following, component: Following },
  { path: configs.routes.profile, component: Profile },
  { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
  { path: configs.routes.search, component: Search, layout: null },
  { path: configs.routes.live, component: Live },
];
export const privateRoutes = [];
