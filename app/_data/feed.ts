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
  { id: "feed", label: "Feed", icon: "home", active: true },
  { id: "ninos", label: "Niños", icon: "children" },
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
