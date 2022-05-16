// Layouts
import HeaderOnly from '~/components/layout/HeaderOnly'

// Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

// Public routes: k can dang nhap van xem dc
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

// Private routes: phai dang nhap ms xem dc, k dang nhap no se drive sang log in
const privateRoutes = [];

export { privateRoutes, publicRoutes };
