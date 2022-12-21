(() => {
  const refs = {
    openMenuIcon: document.querySelector("[data-menu-open]"),
    closeMenuIcon: document.querySelector("[data-menu-close]"),
    navModal: document.querySelector("[data-menu]"),
  };

  refs.openMenuIcon.addEventListener("click", toggleMenu);
  refs.closeMenuIcon.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.navModal.classList.toggle("is-hidden");
  }
})();