function carregarHead(titulo = "") {
  const nomeSite = "HUB Medicina";

  document.title = titulo
    ? `${titulo} | ${nomeSite}`
    : nomeSite;

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🩺</text></svg>"; //favicon.href = "/assets/favicon.ico";
  document.head.appendChild(favicon);
}