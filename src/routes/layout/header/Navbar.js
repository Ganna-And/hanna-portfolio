import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    const navigate = useNavigate();
    const buttonText = window.location.pathname === "/" ? "PROJECTS" : "HOME";

      // update state on toggle
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      // set theme state in localstorage on mount & also update localstorage on state change
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);

  return (
    <div className="navbar px-[3rem] py-[2rem] justify-between h-[6vh]  text-neutral-content fixed top-0">
<input type="checkbox" className="toggle toggle-lg" onChange={handleToggle} />
<button
        className="btn btn-outline normal-case text-xl border-primary border-[2px] text-primary animate-pulse"
        onClick={() => navigate(buttonText === "PROJECTS" ? "/projects" : "/")}
      >
        {buttonText}
      </button>
    </div>
  );
}
