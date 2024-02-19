import GalleryPage from "./_components/gallery";
import { MobileNavbar } from "./_components/mobile_navbar";
import Navbar from "./_components/navbar";


export default function Home() {
  return (
    <div>
      <MobileNavbar/>
      <Navbar/>
      <GalleryPage/>
    </div>
  );
}
