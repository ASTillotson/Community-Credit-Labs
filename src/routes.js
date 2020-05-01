/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import Courses from "views/Courses.jsx";
import CoursesAdding from "views/CourseAdding.jsx";
import CourseOutline from "views/CourseOutline.jsx";
import FullVideoContent from "views/FullVideoContent.jsx";
import CourseTaking from "views/CourseTaking.jsx";
import FullImageContent from "views/FullImageContent.jsx";
import FullTextContent from "views/FullTextContent.jsx";
import VideoCapContent from "views/VideoCapContent.jsx";
import ImageCapContent from "views/ImageCapContent.jsx";
import QuizContent from "views/QuizContent.jsx";
import MultiImgCapContent from "views/MultiImgCapContent.jsx";
import HorizontalMultiImgs from "views/HorizontalMultiImgs.jsx";
import UserCourse from "views/UserCourse.jsx";
import FullVideoPreview from "views/FullVideoPreview.jsx";
import FullImagePreview from "views/FullImagePreview.jsx";
import FullTextPreview from "views/FullTextPreview.jsx";
import VideoCapPreview from "views/VideoCapPreview.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/courses",
    name: "Courses",
    icon: "pe-7s-note2",
    component: Courses,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Users",
    icon: "pe-7s-user",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/addcourse",
    name: "Course Planner",
    icon: "pe-7s-news-paper",
    component: CoursesAdding,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/courseoutline",
    name: "Course Outline",
    icon: "pe-7s-science",
    component: CourseOutline,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/coursetaking",
    name: "Course Taking",
    icon: "pe-7s-map-marker",
    component: CourseTaking,
    layout: "/user", //user
    disappear: true
  },
  {
    path: "/fullvideopreview",
    name: "Preview Screens",
    component: FullVideoPreview,
    layout: "/user",
    disappear: true
  },
  {
    path: "/fulltextpreview",
    name: "Preview Screens",
    component: FullTextPreview,
    layout: "/user",
    disappear: true
  },
  {
    path: "/videocappreview",
    name: "Preview Screens",
    component: VideoCapPreview,
    layout: "/user",
    disappear: true
  },
  {
    path: "/fullimagepreview",
    name: "Preview Screens",
    component: FullImagePreview,
    layout: "/user",
    disappear: true
  },
  {
    path: "/usercourse",
    name: "Courses",
    icon: "pe-7s-note2",
    component: UserCourse,
    layout: "/user", //user,
    disappear: false
  },
  {
    path: "/fullvideocontent",
    name: "Course Content",
    icon: "pe-7s-map-marker",
    component: FullVideoContent,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/fullimagecontent",
    name: "Course Content",
    icon: "pe-7s-map-marker",
    component: FullImageContent,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/fulltextcontent",
    name: "Course Content",
    icon: "pe-7s-map-marker",
    component: FullTextContent,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/videocapcontent",
    name: "Course Content",
    icon: "pe-7s-map-marker",
    component: VideoCapContent,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/imagecapcontent",
    name: "Course Content",
    icon: "pe-7s-map-marker",
    component: ImageCapContent,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/quizcontent",
    name: "Quiz Content",
    icon: "pe-7s-map-marker",
    component: QuizContent,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/multiimgcapcontent",
    name: "Course Content",
    icon: "pe-7s-map-marker",
    component: MultiImgCapContent,
    layout: "/admin",
    disappear: true
  },
  {
    path: "/horizontalmultiimgs", 
    name: "Course Content",
    icon: "pe-7s-map-marker",
    component: HorizontalMultiImgs,
    layout: "/admin",
    disappear: true
  },
];

export default dashboardRoutes;
