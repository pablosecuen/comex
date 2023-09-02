import { handleSmoothScroll } from "./handleSmoothScroll";

 const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, toggleMenu?: () => void) => {
    e.preventDefault();
      handleSmoothScroll(e, sectionId);
      if (toggleMenu) {
        toggleMenu();
      }
    }
  

  export default handleNavItemClick;