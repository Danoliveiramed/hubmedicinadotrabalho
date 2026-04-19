function carregarHead(titulo = "") {
  const nomeSite = "HUB Medicina";

  document.title = titulo
    ? `${titulo} | ${nomeSite}`
    : nomeSite;

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "/assets/favicon.ico";
  document.head.appendChild(favicon);
}