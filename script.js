const weddingDate = new Date("2026-08-08T14:00:00+02:00");
const countdownEl = document.getElementById("countdown");
const langToggle = document.getElementById("lang-toggle");

let currentLang = localStorage.getItem("wedding_lang") || "da";

const i18n = {
  da: {
    pageTitle: "Anders og Olivias Bryllup",
    navDetails: "Detaljer",
    navSchedule: "Program",
    navTravel: "Transport",
    navGallery: "Galleri",
    navRsvp: "RSVP",
    heroEyebrow: "Sammen med jer",
    heroTitle: "Anders og Olivias Bryllup",
    heroDate: "Lørdag den 8. august 2026",
    heroLocation: "Søby Kirke",
    heroRsvpBtn: "RSVP",
    detailsCeremonyTitle: "Ceremoni",
    detailsCeremonyTime: "Kl. 14.00",
    detailsCeremonyPlace: "Søby Kirke (Søby Kirkevej 10, 8450 Hammel)",
    detailsPartyTitle: "Fest",
    detailsPartyTime: "Efter ceremonien",
    detailsPartyPlace: "Mølgårde (Sporup Kirkevej 95, 8450 Hammel)",
    detailsDresscodeTitle: "Dresscode",
    detailsDresscodeText: "Du kan jo finde din indre cowgirl eller farmboy frem, køre en Krøyer-sommer eller bare tage det du allerhelst vil have på!",
    scheduleTitle: "Bryllupsdag",
    schedule1330: "Ankomst til Søby Kirke",
    schedule1400: "Ceremoni i Søby Kirke",
    schedule1530: "Transport til festlokation",
    schedule1600: "Velkomst og reception",
    schedule1830: "Middag og fest",
    travelTitle: "Transport & ophold",
    travelP1: "Ceremonien holdes i Søby Kirke. Derefter holdes festen på Rasmus Levinsens gård Mølgårde. Vi går i samlet flok til festen (1,7 km). Skriv til os hvis I har brug for en taxa mellem kirken og gården.",
    travelP2: "Transporten til kirken kan foregå med taxa fra Aarhus, bus 118 (stopper godt nok 2,5 kilometer fra kirken), eller via samkørsel. Vi vil sætte noget samkørsel op tættere på bryllupsdatoen.",
    travelP3: "Der vil være mulighed for at overnatte i stald eller på marken i telt. Vi vil lave en fælles morgenmad om søndagen, for dem der overnatter.",
    addressTitle: "Adresse til festen",
    galleryTitle: "Galleri",
    rsvpBtn: "Åbn RSVP-formular",
    footerText: "Vi glæder os til at fejre dagen med jer.",
    countdownDone: "I dag er dagen.",
    countdownFmt: (d, h, m) => `${d} dage, ${h} timer, ${m} minutter tilbage`
  },
  en: {
    pageTitle: "Anders and Olivia's Wedding",
    navDetails: "Details",
    navSchedule: "Schedule",
    navTravel: "Travel",
    navGallery: "Gallery",
    navRsvp: "RSVP",
    heroEyebrow: "Together with you",
    heroTitle: "Anders and Olivia's Wedding",
    heroDate: "Saturday, August 8, 2026",
    heroLocation: "Soby Church",
    heroRsvpBtn: "RSVP",
    detailsCeremonyTitle: "Ceremony",
    detailsCeremonyTime: "2:00 PM",
    detailsCeremonyPlace: "Soby Church (Soby Kirkevej 10, 8450 Hammel)",
    detailsPartyTitle: "Party",
    detailsPartyTime: "After the ceremony",
    detailsPartyPlace: "Molgarde (Sporup Kirkevej 95, 8450 Hammel)",
    detailsDresscodeTitle: "Dress code",
    detailsDresscodeText: "Feel free to bring out your inner cowgirl or farmboy, go for a Krøyer summer look, or simply wear what you love the most!",
    scheduleTitle: "Wedding Day",
    schedule1330: "Arrival at Soby Church",
    schedule1400: "Ceremony at Soby Church",
    schedule1530: "Walk/transport to the party venue",
    schedule1600: "Welcome and reception",
    schedule1830: "Dinner and celebration",
    travelTitle: "Travel & stay",
    travelP1: "The ceremony takes place at Soby Church. Afterwards, the party will be held at Mølgårde, Rasmus Levinsen's farm. We will walk together to the party venue (1.7 km). Please contact us if you need a taxi between the church and the farm.",
    travelP2: "Transport to the church can be arranged by taxi from Aarhus, bus 118 (which stops about 2.5 km from the church), or carpooling. We will organize ride-sharing closer to the wedding date.",
    travelP3: "There will be an option to stay overnight in the stable area or camp in the field. We will host a shared breakfast on Sunday for everyone staying overnight.",
    addressTitle: "Party address",
    galleryTitle: "Gallery",
    rsvpBtn: "Open RSVP form",
    footerText: "We can't wait to celebrate with you.",
    countdownDone: "Today is the day.",
    countdownFmt: (d, h, m) => `${d} days, ${h} hours, ${m} minutes to go`
  }
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("wedding_lang", lang);
  document.documentElement.lang = lang;

  const t = i18n[lang];
  document.title = t.pageTitle;

  setText("nav-details", t.navDetails);
  setText("nav-schedule", t.navSchedule);
  setText("nav-travel", t.navTravel);
  setText("nav-gallery", t.navGallery);
  setText("nav-rsvp", t.navRsvp);

  setText("hero-eyebrow", t.heroEyebrow);
  setText("hero-title", t.heroTitle);
  setText("hero-date", t.heroDate);
  setText("hero-location", t.heroLocation);
  setText("hero-rsvp-btn", t.heroRsvpBtn);

  setText("details-ceremony-title", t.detailsCeremonyTitle);
  setText("details-ceremony-time", t.detailsCeremonyTime);
  setText("details-ceremony-place", t.detailsCeremonyPlace);
  setText("details-party-title", t.detailsPartyTitle);
  setText("details-party-time", t.detailsPartyTime);
  setText("details-party-place", t.detailsPartyPlace);
  setText("details-dresscode-title", t.detailsDresscodeTitle);
  setText("details-dresscode-text", t.detailsDresscodeText);

  setText("schedule-title", t.scheduleTitle);
  setText("schedule-1330", t.schedule1330);
  setText("schedule-1400", t.schedule1400);
  setText("schedule-1530", t.schedule1530);
  setText("schedule-1600", t.schedule1600);
  setText("schedule-1830", t.schedule1830);

  setText("travel-title", t.travelTitle);
  setText("travel-p1", t.travelP1);
  setText("travel-p2", t.travelP2);
  setText("travel-p3", t.travelP3);
  setText("address-title", t.addressTitle);

  setText("gallery-title", t.galleryTitle);
  setText("rsvp-btn", t.rsvpBtn);
  setText("footer-text", t.footerText);

  if (langToggle) {
    langToggle.textContent = lang === "da" ? "ENG" : "DK";
    langToggle.setAttribute("aria-label", lang === "da" ? "Skift til engelsk" : "Switch to Danish");
  }

  updateCountdown();
}

function updateCountdown() {
  if (!countdownEl) return;
  const t = i18n[currentLang];
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownEl.textContent = t.countdownDone;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  countdownEl.textContent = t.countdownFmt(days, hours, minutes);
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "da" ? "en" : "da");
  });
}

applyLanguage(currentLang);
setInterval(updateCountdown, 60000);
