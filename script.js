function showIframe() {
  const iframeContainer = document.getElementById("iframe-container");
  iframeContainer.classList.remove("hidden");
  iframeContainer.classList.add("visible");
}

function closeIframe() {
  const iframeContainer = document.getElementById("iframe-container");
  iframeContainer.classList.remove("visible");
  setTimeout(() => {
    iframeContainer.classList.add("hidden");
  }, 300); // Tempo igual ao da transição de opacidade no CSS
}
