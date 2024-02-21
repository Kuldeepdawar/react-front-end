import useLocalStroage from "./useLocalStorage";
import "./theme.css";
export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStroage("theme", "dark");
  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleTheme}>Change</button>
      </div>
    </div>
  );
}
