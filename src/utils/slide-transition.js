export const startTransition = () => {
  const loader = document.querySelector("#loader");
  loader.classList.add("is-active");
};

export const endTransition = () => {
  const loader = document.querySelector("#loader");
  loader.classList.remove("is-active");
};
