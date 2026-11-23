export type NavIcon = "home" | "children" | "notices" | "account";

export type FeedUser = {
  name: string;
  initials: string;
  roleLabel: string;
  roomLabel: string;
};

export type FeedSummary = {
  orgLabel: string;
  greeting: string;
  meta: string;
};

export type NavItem = {
  id: string;
  label: string;
  icon: NavIcon;
  active?: boolean;
  href?: string;
};

export type PostKind = "achievement" | "activity" | "announcement";

export type FeedPost = {
  id: string;
  kind: PostKind;
  authorName: string;
  authorInitials?: string;
  authorAccent: "child" | "general";
  timeLabel: string;
  publishedByLabel: string;
  audienceLabel: string;
  body: string;
  image?: { caption: string } | null;
  likes: number;
  comments: number;
};

export type PostKindStyle = {
  label: string;
  backgroundColor: string;
  color: string;
};

export const postKindStyles: Record<PostKind, PostKindStyle> = {
  achievement: {
    label: "LOGRO",
    backgroundColor: "#CFEBD8",
    color: "#3E9B6C",
  },
  activity: {
    label: "ACTIVIDAD",
    backgroundColor: "#C7E7F1",
    color: "#2E89A6",
  },
  announcement: {
    label: "ANUNCIO",
    backgroundColor: "#CCD8F4",
    color: "#4E72C8",
  },
};

export const brandName = "OpenDayCare";

export const feedUser: FeedUser = {
  name: "Caro Giménez",
  initials: "C",
  roleLabel: "Maestra · Soles",
  roomLabel: "Sala Soles",
};

export const feedSummary: FeedSummary = {
  orgLabel: "GUARDERÍA · SALA SOLES",
  greeting: "Buenas, Caro",
  meta: "12 niños · martes 17 jun",
};

export const navItems: NavItem[] = [
  { id: "feed", label: "Feed", icon: "home", active: true, href: "/" },
  { id: "ninos", label: "Niños", icon: "children", href: "/kids" },
  { id: "avisos", label: "Avisos", icon: "notices" },
  { id: "mi-cuenta", label: "Mi cuenta", icon: "account" },
];

export const feedCopy = {
  newPostLabel: "Nueva publicación",
  composerPrompt: "Compartí un momento…",
  publishedTodayLabel: "PUBLICADO HOY",
  editLabel: "Editar",
  closeSessionLabel: "Cerrar sesión",
};

export const posts: FeedPost[] = [
  {
    id: "logro-mateo",
    kind: "achievement",
    authorName: "Mateo",
    authorInitials: "M",
    authorAccent: "child",
    timeLabel: "14:20",
    publishedByLabel: "publicado por vos",
    audienceLabel: "Para: familia de Mateo",
    body: "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.",
    image: null,
    likes: 3,
    comments: 1,
  },
  {
    id: "actividad-mateo",
    kind: "activity",
    authorName: "Mateo",
    authorInitials: "M",
    authorAccent: "child",
    timeLabel: "09:40",
    publishedByLabel: "publicado por vos",
    audienceLabel: "Para: familia de Mateo",
    body: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.",
    image: { caption: "Foto · pintando con témperas" },
    likes: 5,
    comments: 2,
  },
  {
    id: "anuncio-general",
    kind: "announcement",
    authorName: "Anuncio general",
    authorAccent: "general",
    timeLabel: "07:50",
    publishedByLabel: "publicado por vos",
    audienceLabel: "Para: toda la sala",
    body: "El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.",
    image: null,
    likes: 8,
    comments: 0,
  },
];

export type PublicationRecipient = {
  label: string;
  initials?: string;
  avatarColor?: string;
  initialsColor?: string;
  selected?: boolean;
};

export type PublicationType = {
  label: string;
  background: string;
  color: string;
  selected?: boolean;
};

export type CreatePublicationScreenProps = {
  cancelLabel: string;
  title: string;
  publishLabel: string;
  recipientsLabel: string;
  recipients: PublicationRecipient[];
  allAudienceLabel: string;
  typesLabel: string;
  types: PublicationType[];
  descriptionLabel: string;
  descriptionPlaceholder: string;
  descriptionValue: string;
  photosLabel: string;
  addPhotoLabel: string;
};

export const createPublicationScreen: CreatePublicationScreenProps = {
  cancelLabel: "Cancelar",
  title: "Nueva publicación",
  publishLabel: "Publicar",
  recipientsLabel: "PARA",
  recipients: [
    { label: "Mateo", initials: "M", avatarColor: "#A9D9E8", initialsColor: "#1F7A93", selected: true },
    { label: "Sofía", initials: "S", avatarColor: "#F4B8CC", initialsColor: "#C44A7A", selected: false },
    { label: "Benjamín", initials: "B", avatarColor: "#B9DEC4", initialsColor: "#3E8B62", selected: false },
  ],
  allAudienceLabel: "Toda la sala",
  typesLabel: "TIPO",
  types: [
    { label: "Comida", background: "#9A7B1E", color: "#fff", selected: true },
    { label: "Siesta", background: "#E7DCF6", color: "#7B5FC0", selected: false },
    { label: "Actividad", background: "#2E89A6", color: "#fff", selected: false },
    { label: "Logro", background: "#CFEBD8", color: "#3E9B6C", selected: false },
    { label: "Ánimo", background: "#F9D2DE", color: "#C56486", selected: false },
    { label: "Foto", background: "#FBD8CC", color: "#D9684A", selected: false },
    { label: "Anuncio", background: "#CCD8F4", color: "#4E72C8", selected: false },
  ],
  descriptionLabel: "DESCRIPCIÓN",
  descriptionPlaceholder: "Contá cómo le fue hoy…",
  descriptionValue: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón.",
  photosLabel: "FOTOS",
  addPhotoLabel: "Agregar",
};
