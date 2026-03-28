
import ContactSection from "./components/layout/contact";
import Header from "./components/layout/Header/Header";
import Herobanner from "./components/layout/hero/Herobanner";
import SelectedWorks from "./components/layout/projects";


export default function Home() {
  return (
   
    <>
    
    
      <main className=" overflow-x-hidden bg-[#050505]">
      <Header/><Herobanner />
      
     <ContactSection/>
    </main>
    
    </>
  );
}
