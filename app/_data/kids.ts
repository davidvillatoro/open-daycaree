import type { NavItem } from "@/app/_data/feed";
import { navItems } from "@/app/_data/feed";

export type KidBadge = {
  label: string;
  background: string;
  color: string;
};

export type KidTrailing = { badge: KidBadge } | { chevron: true };

export type Kid = {
  id: string;
  initials: string;
  initialsColor: string;
  avatarColor: string;
  name: string;
  line: string;
  trailing: KidTrailing;
};

export type FamilyStatus = "activa" | "pendiente";

export type FamilyStatusStyles = Record<
  FamilyStatus,
  { label: string; background: string; color: string }
>;

export type FamilyMember = {
  name: string;
  initials: string;
  avatarColor: string;
  subtitle: string;
  status: FamilyStatus;
};

export type KidProfileStatsRow = { label: string; value: string };

export type KidProfile = {
  id: string;
  initials: string;
  initialsColor: string;
  avatarColor: string;
  name: string;
  meta: string;
  editLabel: string;
  backLabel: string;
  alergiesTitle: string;
  alergiesText: string;
  familyTitle: string;
  familyMembers: FamilyMember[];
  linkParentLabel: string;
  daySummaryLabel: string;
  statsRows: KidProfileStatsRow[];
};

export type KidsScreen = {
  pageTitle: string;
  orgLabel: string;
  salaTitle: string;
  kidsCountLabel: string;
  searchPlaceholder: string;
  addLabel: string;
};

export type AddKidModalScreenProps = {
  title: string;
  cancelLabel: string;
  saveLabel: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  birthDateLabel: string;
  birthDatePlaceholder: string;
  roomLabel: string;
  rooms: string[];
  allergiesLabel: string;
  allergiesPlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  requiredMessage: string;
  invalidDateMessage: string;
  validMessage: string;
};

export const familyStatusStyles: FamilyStatusStyles = {
  activa: { label: "ACTIVA", background: "#CFEBD8", color: "#3E9B6C" },
  pendiente: { label: "PENDIENTE", background: "#F7E7A6", color: "#9A7B1E" },
};

export const kidsScreen: KidsScreen = {
  pageTitle: "Niños",
  orgLabel: "GESTIÓN",
  salaTitle: "SALA SOLES",
  kidsCountLabel: "8 niños",
  searchPlaceholder: "Buscar niño…",
  addLabel: "Agregar niño",
};

export const kidRooms: string[] = ["Soles"];

export const addKidModalScreen: AddKidModalScreenProps = {
  title: "Agregar niño",
  cancelLabel: "Cancelar",
  saveLabel: "Guardar",
  fullNameLabel: "NOMBRE COMPLETO",
  fullNamePlaceholder: "Ej. Martina López",
  birthDateLabel: "FECHA DE NACIMIENTO",
  birthDatePlaceholder: "dd/mm/aaaa",
  roomLabel: "SALA",
  rooms: kidRooms,
  allergiesLabel: "ALERGIAS (ETIQUETAS)",
  allergiesPlaceholder: "Ej. Maní, Lactosa",
  notesLabel: "NOTAS MÉDICAS",
  notesPlaceholder: "Indicaciones, medicación, contactos…",
  requiredMessage: "Campo obligatorio",
  invalidDateMessage: "Ingresa una fecha válida (dd/mm/aaaa)",
  validMessage: "Datos válidos",
};

export const kids: Kid[] = [
  { id: "mateo-fernandez", initials: "M", initialsColor: "#1F7A93", avatarColor: "#A9D9E8", name: "Mateo Fernández", line: "3 años · 2 padres vinculados", trailing: { badge: { label: "MANÍ", background: "#FBD8CC", color: "#D9684A" } } },
  { id: "sofia-mendez", initials: "S", initialsColor: "#C44A7A", avatarColor: "#F4B8CC", name: "Sofía Méndez", line: "2 años · 1 padre vinculado", trailing: { chevron: true } },
  { id: "benjamin-ruiz", initials: "B", initialsColor: "#3E8B62", avatarColor: "#B9DEC4", name: "Benjamín Ruiz", line: "3 años · 2 padres vinculados", trailing: { chevron: true } },
  { id: "valentina-soto", initials: "V", initialsColor: "#9A7B1E", avatarColor: "#F4DC8E", name: "Valentina Soto", line: "2 años · sin padres vinculados", trailing: { badge: { label: "VINCULAR", background: "#F9D2DE", color: "#C56486" } } },
  { id: "tomas-diaz", initials: "T", initialsColor: "#7B5FC0", avatarColor: "#C9B6E8", name: "Tomás Díaz", line: "3 años · 1 padre vinculado", trailing: { badge: { label: "LACTOSA", background: "#FBD8CC", color: "#D9684A" } } },
  { id: "emma-castro", initials: "E", initialsColor: "#C44A7A", avatarColor: "#F4B8CC", name: "Emma Castro", line: "2 años · 1 padre vinculado", trailing: { chevron: true } },
  { id: "lucas-romero", initials: "L", initialsColor: "#1F7A93", avatarColor: "#A9D9E8", name: "Lucas Romero", line: "3 años · 1 padre vinculado", trailing: { chevron: true } },
  { id: "olivia-vega", initials: "O", initialsColor: "#3E8B62", avatarColor: "#B9DEC4", name: "Olivia Vega", line: "2 años · 1 padre vinculado", trailing: { chevron: true } },
];

export const kidProfiles: Record<string, KidProfile> = {
  "mateo-fernandez": {
    id: "mateo-fernandez",
    initials: "M",
    initialsColor: "#1F7A93",
    avatarColor: "#A9D9E8",
    name: "Mateo Fernández",
    meta: "3 años · Sala Soles",
    editLabel: "Editar",
    backLabel: "Volver a Niños",
    alergiesTitle: "Alergias y notas",
    alergiesText: "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.",
    familyTitle: "PADRES VINCULADOS",
    familyMembers: [
      { name: "Lucía Fernández", initials: "L", avatarColor: "#C9B6E8", subtitle: "Mamá · activa", status: "activa" },
      { name: "Diego Fernández", initials: "D", avatarColor: "#A9C7E8", subtitle: "Papá · invitación enviada", status: "pendiente" },
    ],
    linkParentLabel: "Vincular otro padre",
    daySummaryLabel: "Resumen del día",
    statsRows: [
      { label: "Fecha de nacimiento", value: "12 mar 2022" },
      { label: "Sala", value: "Soles" },
      { label: "Ingreso", value: "feb 2025" },
    ],
  },
};

export const kidsNavItems: NavItem[] = navItems.map((item) =>
  item.id === "ninos"
    ? { ...item, active: true, href: "/kids" }
    : item,
);
