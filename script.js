/* ============================================================
   DONNÉES DES COMPÉTENCES
   Pour chaque preuve : label = texte du bouton, href = fichier
   à déposer dans le dossier /preuves (ou un lien web complet).
   ============================================================ */
const COMPETENCES = [
  {
    id: "communication", titre: "Communication", couleur: "#c4001a",
    items: [
      { nom: "Communiquer à l'oral de manière claire et adaptée à différents publics", niveau: 2,
        exp: ["Animatrice en centre aéré (adaptation du discours selon l'âge des enfants)", "Placeuse à l'Arkéa Arena (interaction avec un public varié)", "Projet vente et négociation (simulation d'entretien de vente)"],
        preuves: [{ label: "Contrat agence d'intérim", href: "preuves/contrat-interim.pdf" }, { label: "Vidéo vente S2", href: "preuves/video-negociation.mp4" }] },
      { nom: "Rédiger des contenus professionnels adaptés à un objectif de communication", niveau: 2,
        exp: ["SAÉ communication commerciale", "Création de contenus (supports)"],
        preuves: [{ label: "Dossier de presse Laurette Fugain", href: "preuves/dossier-de-presse-laurette-fugain.pdf" }, { label: "Oral + diapo Ram Dam", href: "preuves/oral-ram-dam.pdf" }] },
      { nom: "Construire une stratégie de communication cohérente avec une cible", niveau: 2,
        exp: ["D.E. (lien entre marketing et communication)", "Stage Atelier d'Amaya (observation de la stratégie globale)"],
        preuves: [{ label: "Rapport de stage", href: "preuves/rapport-de-stage.pdf" }, { label: "DE « Budgétiser des actions commerciales »", href: "preuves/de-budgetiser.pdf" }] },
      { nom: "Définir et maintenir une identité de marque cohérente", niveau: 3,
        exp: ["Stage Atelier d'Amaya (visual merchandising)", "Projets de communication (création d'identité visuelle)"],
        preuves: [{ label: "Créations bijoux + vitrine (photos du stage)", href: "preuves/creations-atelier-amaya.pdf" }] }
    ]
  },
  {
    id: "marketing", titre: "Marketing", couleur: "#4a12c4",
    items: [
      { nom: "Analyser un marché et identifier des opportunités", niveau: 2,
        exp: ["Projets D.E. (analyse de marché, étude de la concurrence)", "Cours de marketing mix", "PFR (parasol intelligent)"],
        preuves: [{ label: "Note PFR", href: "preuves/note-pfr.pdf" }] },
      { nom: "Choisir une cible et construire un positionnement marketing", niveau: 2,
        exp: ["Marketing – projet Parasol intelligent"],
        preuves: [{ label: "DE avec segmentation + positionnement", href: "preuves/de-marketing-segmentation.pdf" }] },
      { nom: "Analyser l'environnement d'une entreprise à partir de sources fiables", niveau: 2,
        exp: ["Étude marketing", "Expression, communication et culture"],
        preuves: [{ label: "Bibliographie", href: "preuves/bibliographie.pdf" }] },
      { nom: "Adapter une offre ou un message en fonction d'un marché cible", niveau: 2,
        exp: ["Communication commerciale (affiches, copy strategy)", "Projet vente et négociation", "Expérience d'animatrice (adaptation au public)"],
        preuves: [{ label: "Affiche Marathon des villages – Laurette Fugain", href: "preuves/affiche-laurette-fugain.pdf" }] }
    ]
  },
  {
    id: "vente", titre: "Vente", couleur: "#16962b",
    items: [
      { nom: "Découvrir les besoins d'un client à l'aide d'un questionnement structuré", niveau: 2,
        exp: ["Vidéo négociation S2"],
        preuves: [{ label: "Vidéo de négociation (découverte des besoins)", href: "preuves/video-negociation.mp4" }] },
      { nom: "Construire et adapter un argumentaire de vente", niveau: 2,
        exp: ["Vidéo négociation S2"],
        preuves: [{ label: "Script de la vidéo de négociation", href: "preuves/script-video-negociation.pdf" }, { label: "OAV (outil d'aide à la vente)", href: "preuves/oav.pdf" }] },
      { nom: "Gérer la relation client en situation de contact direct", niveau: 2,
        exp: ["Placeuse à l'Arkéa Arena", "Animatrice en centre aéré"],
        preuves: [{ label: "Contrats", href: "preuves/contrat-interim.pdf" }] }
    ]
  },
  {
    id: "transversales", titre: "Compétences transversales", couleur: "#800050",
    items: [
      { nom: "Organiser son travail et gérer plusieurs priorités", niveau: 2,
        exp: ["BUT TC"], preuves: [{ label: "Projets multiples, deadlines", href: "preuves/deadlines.pdf" }] },
      { nom: "Travailler en équipe de manière efficace", niveau: 2,
        exp: ["BUT TC", "Stage découverte Atelier d'Amaya", "Arkéa Arena", "Animatrice en centre aéré"],
        preuves: [{ label: "Travaux de groupe (étude qualitative DSLQ)", href: "preuves/etude-qualitative-dslq.pdf" }, { label: "Rapport de stage", href: "preuves/rapport-de-stage.pdf" }] },
      { nom: "Faire preuve d'esprit critique dans l'analyse", niveau: 2,
        exp: ["Cours Expression, Communication et Culture"],
        preuves: [{ label: "Rapport ECC (applications de rencontre)", href: "preuves/rapport-ecc.pdf" }] },
      { nom: "S'adapter à différents environnements et situations", niveau: 3,
        exp: ["BUT TC", "Stage Atelier d'Amaya", "Arkéa Arena", "Animatrice en centre aéré", "Baby-sitting"],
        preuves: [{ label: "Expériences variées", href: "#parcours" }] },
      { nom: "Faire preuve d'autonomie et de responsabilité", niveau: 3,
        exp: ["BUT TC", "Stage Atelier d'Amaya", "Arkéa Arena", "Animatrice en centre aéré", "Baby-sitting"],
        preuves: [{ label: "Missions de stage", href: "preuves/missions-stage.pdf" }] }
    ]
  }
];

/* ---------- Rendu des compétences ---------- */
const tabs = document.getElementById("tabs");
const list = document.getElementById("compList");

function render(id) {
  const cat = COMPETENCES.find(c => c.id === id);
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.id === id));
  list.innerHTML = cat.items.map(it => `
    <article class="comp" style="--c:${cat.couleur}">
      <h3>${it.nom}</h3>
      <div class="level">
        <div class="dots" aria-hidden="true">${[1, 2, 3].map(n => `<i class="${n <= it.niveau ? "on" : ""}"></i>`).join("")}</div>
        <span>Niveau ${it.niveau}/3</span>
      </div>
      <h5>Expériences</h5>
      <ul>${it.exp.map(e => `<li>${e}</li>`).join("")}</ul>
      <h5>Preuves</h5>
      <div class="proofs">${it.preuves.map(p => {
        const ext = p.href.startsWith("#") ? "" : ' target="_blank" rel="noopener"';
        return `<a href="${p.href}"${ext}>${p.label}</a>`;
      }).join("")}</div>
    </article>`).join("");
}

tabs.innerHTML = COMPETENCES.map(c =>
  `<button class="tab" role="tab" data-id="${c.id}" style="--c:${c.couleur}">${c.titre}</button>`).join("");
tabs.addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) render(b.dataset.id); });
render(COMPETENCES[0].id);

/* ---------- Menu mobile ---------- */
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

/* ---------- Apparition au scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- Lien actif dans le menu ---------- */
const links = [...menu.querySelectorAll("a[href^='#']")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));
