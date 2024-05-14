import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLogin from "./checkLoginAdmin";
const routes = [
  {
    path: "/home",
    component: () => import("../layout/wrapper/MasterAnimeLogin.vue"),
    children: [
      {
        path: "login",
        component: () => import("../components/Page/Login/index.vue"),
      },
      {
        path: "forget-password",
        component: () => import("../components/Page/QuenMatKhau/index.vue"),
      },
      {
        path: "reset-password/:hash",
        component: () => import("../components/Page/DatLaiMatKhau/index.vue"),
      },
      {
        path: "kich-hoat-email/:hash",
        component: () => import("../components/Page/XacThucEmail/index.vue"),
      },
      {
        path: "register",
        component: () => import("../components/Page/Register/index.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("../layout/wrapper/MasterAnime.vue"),
    children: [
      // Page thanh toan
      {
        path: "thanh-toan",
        component: () => import("../components/Page/MuaVip/index.vue"),
      },
      // Page Anime
      {
        path: "",
        component: () => import("../components/Page/HomeAnime/index.vue"),
      },

      {
        path: "list-phim",
        component: () => import("../components/Page/ListPhim/index.vue"),
      },
      {
        path: "the-loai/:slug",
        component: () => import("../components/Page/PageList/index.vue"),
        name: "PageList",
        props: (route) => ({ id: route.params.id, slug: route.params.slug }),
      },
      {
        path: "de-list/:slug",
        component: () => import("../components/Page/PageDelist/index.vue"),
        name: "PageDelist",
        props: (route) => ({ id: route.params.id, slug: route.params.slug }),
      },
      {
        path: "watching/:slug",
        component: () => import("../components/Page/PageWatch/index.vue"),
      },
      {
        path: "loai-phim/:slug",
        component: () => import("../components/Page/PageLoaiPhim/index.vue"),
        name: "PageLoaiPhim",
        props: (route) => ({ id: route.params.id, slug: route.params.slug }),
      },
      {
        path: "tim-kiem/:id",
        component: () => import("../components/Page/PageSearch/index.vue"),
      },
      {
        path: "profile",
        component: () => import("../components/Page/PageProfile/index.vue"),
      },
      //Page Blog
      {
        path: "bai-viet",
        component: () => import("../components/Page/BlogList/index.vue"),
      },
      {
        path: "blog/:slug",
        component: () => import("../components/Page/BlogDelist/index.vue"),
      },
    ],
  },

  /// Admin
  {
    path: "/admin",
    component: () => import("../layout/wrapper/MasterRocker.vue"),
    children: [
      {
        path: "goi-vip",
        component: () => import("../components/Admin/GoiVip/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "profile",
        component: () => import("../components/Admin/ProfileAdmin/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "the-loai",
        component: () => import("../components/Admin/TheLoai/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "tk-admin",
        component: () => import("../components/Admin/AdminAnime/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "chuc-vu",
        component: () => import("../components/Admin/ChucVu/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "khach-hang",
        component: () => import("../components/Admin/KhachHang/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "khach-hang",
        component: () => import("../components/Admin/KhachHang/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "bai-viet",
        component: () => import("../components/Admin/BaiViet/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "chuyen-muc",
        component: () => import("../components/Admin/ChuyenMucBlog/index.vue"),
        beforeEnter: checkLogin,
      },

      {
        path: "loai-phim",
        component: () => import("../components/Admin/LoaiAnime/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "tac-gia",
        component: () => import("../components/Admin/TacGia/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "anime",
        component: () => import("../components/Admin/Phim/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "phan-quyen",
        component: () => import("../components/Admin/PhanQuyen/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "tap-phim",
        component: () => import("../components/Admin/TapPhim/index.vue"),
        beforeEnter: checkLogin,
      },
      {
        path: "thong-ke",
        component: () => import("../components/Admin/ThongKe/index.vue"),
        beforeEnter: checkLogin,
      },
    ],
  },
  //login admin
  {
    path: "/admin",
    component: () => import("../layout/wrapper/MasterRockerLogin.vue"),
    children: [
      {
        path: "login",
        component: () => import("../components/Admin/Login/index.vue"),
      },
      {
        path: "register",
        component: () => import("../components/Admin/Register/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
