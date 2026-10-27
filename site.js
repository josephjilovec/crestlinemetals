/* Crestline Metals: local public-site interactions. No form delivery or storage. */
(() => {
  "use strict";
  const menu = document.getElementById("menu");
  const panel = document.getElementById("mobilepanel");
  const setMenu = open => {
    if (!menu || !panel) return;
    menu.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    menu.innerHTML = open ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">+</span>';
  };
  if (menu && panel) {
    menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
    panel.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
    document.querySelector("header").addEventListener("keydown", event => {
      if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") { setMenu(false); menu.focus(); }
    });
    const desktop = window.matchMedia("(min-width: 901px)");
    desktop.addEventListener("change", () => { if (desktop.matches) setMenu(false); });
  }
  document.querySelectorAll("[data-year]").forEach(node => { node.textContent = String(new Date().getFullYear()); });
  const form = document.getElementById("requirement-brief");
  if (form) {
    const result = document.getElementById("brief-result");
    const questions = {
      properties: ["Which material properties and specification revision apply?", "What supporting material or testing documentation would need review?", "Which requirements remain to be agreed with a technically qualified team?"],
      dimensions: ["Which dimensions, finish, and downstream processing requirements apply?", "What measurement and inspection evidence would be expected?", "Which packaging or handling details need clarification?"],
      traceability: ["How should source material, process history, and output identity connect?", "Which specification revision and inspection records would be required?", "Who would review documentation before an authorized release?"],
      program: ["What is the intended application and program scope?", "Which timing, quantities, or dependencies are known and which are open?", "What needs confirmation before a commercial commitment could be considered?"]
    };
    const applications = {infrastructure:"Infrastructure",energy:"Energy",mobility:"Automotive & mobility",construction:"Construction",equipment:"Industrial equipment",other:"Another application / To discuss"};
    const priorities = {properties:"Material properties",dimensions:"Dimensions & finish",traceability:"Traceability & documentation",program:"Program scope & timing"};
    form.addEventListener("input", () => { result.hidden = true; });
    form.addEventListener("submit", event => {
      event.preventDefault();
      const application = document.getElementById("application").value;
      const priority = document.getElementById("priority").value;
      if (!applications[application] || !questions[priority]) return;
      const note = document.getElementById("requirement-note").value.trim();
      document.getElementById("brief-copy").value = ["CRESTLINE METALS — REQUIREMENTS BRIEF", "Local draft / Not sent", "", "Application: " + applications[application], "Focus: " + priorities[priority], "", "Questions for technical alignment:", ...questions[priority].map(q => "• " + q), "", "Question to carry forward: " + (note || "Not supplied"), "", "Open points: actual capability, specification agreement, inspection evidence, commercial terms, and timing remain to be confirmed.", "", "This is not a quote, order, or production commitment."].join("\n");
      document.getElementById("brief-status").textContent = "Draft prepared for " + applications[application] + ". Nothing has been sent.";
      result.hidden = false;
      document.getElementById("brief-result-title").focus();
    });
  }
  const inquiry = document.getElementById("inquiry");
  if (inquiry) inquiry.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.getElementById("status");
    status.textContent = "Your inquiry has not been sent. Online delivery is not yet available. Your entered details remain in this page for review.";
    status.focus();
  });
})();
