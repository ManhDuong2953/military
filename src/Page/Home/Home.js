import HomeLayout from "../../Component/HomeLayout/HomeLayout";
import NavBarLayout from "../../Component/NavBarLayout/NavBarLayout";
export default function Home() {
  return (
    <>
      <NavBarLayout className = "NavBar-Home"/>
      <HomeLayout />
    </>
  );
}
