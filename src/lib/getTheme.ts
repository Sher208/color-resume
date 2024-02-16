const code = function () {
  (window as any).__onThemeChange = function () {};

  let preferredTheme: string | undefined | null;

  function setTheme(newTheme: string | undefined) {
    (window as any).__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    (window as any).__onThemeChange(newTheme);
  }

  try {
    preferredTheme = localStorage.getItem("theme");
  } catch (err) {}

  (window as any).__setPreferredTheme = function (newTheme: string) {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (err) {}
  };

  // const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // darkQuery.addEventListener("change", function (e) {
  //   (window as any).__setPreferredTheme(e.matches ? "dark" : "light");
  // });

  setTheme(preferredTheme || "light");
};

export const getTheme = `(${code})();`;
