export const manifest = {
  screens: {
    scr_z7paan: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_stq9fx: { name: "About", route: "/about", position: { "x": 1560, "y": 220 } },
    scr_zjzcny: { name: "Services", route: "/services", position: { "x": 2960, "y": 220 } },
    scr_5eg8v3: { name: "Contact", route: "/contact", position: { "x": 4360, "y": 220 } },
    scr_3rre1c: { name: "Blogs", route: "/blogs", position: { "x": 160, "y": 2200 } },
    scr_x38dc2: { name: "FAQs", route: "/faqs", position: { "x": 1560, "y": 2200 } }
  },
  sections: {
    sec_fgtsyr: { name: "Main Navigation", x: 0, y: 0, width: 5720, height: 1180 },
    sec_ngllya: { name: "Resources & Support", x: 0, y: 1980, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_fgtsyr", children: [
    { kind: "screen", id: "scr_z7paan" },
    { kind: "screen", id: "scr_stq9fx" },
    { kind: "screen", id: "scr_zjzcny" },
    { kind: "screen", id: "scr_5eg8v3" }]
  },
  { kind: "section", id: "sec_ngllya", children: [
    { kind: "screen", id: "scr_3rre1c" },
    { kind: "screen", id: "scr_x38dc2" }]
  }]

};