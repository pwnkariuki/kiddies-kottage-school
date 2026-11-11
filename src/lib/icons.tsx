import type { ComponentType } from "react";
import {
  ArrowRight as ArrowRightGlyph,
  ArrowUp as ArrowUpGlyph,
  Atom as AtomGlyph,
  BookOpen as BookOpenGlyph,
  Brain as BrainGlyph,
  CalendarDays as CalendarGlyph,
  Calculator as CalculatorGlyph,
  Check as CheckGlyph,
  ChevronDown as CaretDownGlyph,
  ChevronLeft as CaretLeftGlyph,
  ChevronRight as CaretRightGlyph,
  CircleCheck as CheckCircleGlyph,
  CircleDot as BasketballGlyph,
  ClipboardList as ClipboardTextGlyph,
  Clock3 as ClockGlyph,
  Droplet as DropGlyph,
  Facebook as FacebookGlyph,
  Gamepad2 as GameControllerGlyph,
  Goal as FootballGlyph,
  GraduationCap as GraduationCapGlyph,
  HandHeart as HandHeartGlyph,
  Heart as HeartGlyph,
  House as HouseGlyph,
  Instagram as InstagramGlyph,
  LayoutGrid as GridFourGlyph,
  Leaf as LeafGlyph,
  List as ListGlyph,
  Mail as EnvelopeGlyph,
  MapPin as MapPinGlyph,
  Medal as MedalGlyph,
  MessageCircle as ChatCircleGlyph,
  MessageCircleMore as WhatsappGlyph,
  Music2 as MusicNotesGlyph,
  Palette as PaintBrushGlyph,
  Phone as PhoneGlyph,
  Quote as QuotesGlyph,
  Rocket as RocketGlyph,
  Scroll as ScrollGlyph,
  Send as PaperPlaneGlyph,
  ShieldCheck as ShieldCheckGlyph,
  Sparkles as SparkleGlyph,
  Star as StarGlyph,
  Sword as SwordGlyph,
  Trophy as TrophyGlyph,
  Users as UsersGlyph,
  X as XGlyph,
  Youtube as YoutubeGlyph,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

export interface IconProps extends LucideProps {
  weight?: string;
}

export type Icon = ComponentType<IconProps>;

const adapt = (Glyph: LucideIcon): Icon =>
  function AdaptedIcon(props) {
    const { weight, ...lucideProps } = props;
    void weight;
    return <Glyph {...lucideProps} />;
  };

export const ArrowRight = adapt(ArrowRightGlyph);
export const ArrowUp = adapt(ArrowUpGlyph);
export const Atom = adapt(AtomGlyph);
export const Basketball = adapt(BasketballGlyph);
export const BookOpen = adapt(BookOpenGlyph);
export const Brain = adapt(BrainGlyph);
export const Calendar = adapt(CalendarGlyph);
export const Calculator = adapt(CalculatorGlyph);
export const CaretDown = adapt(CaretDownGlyph);
export const CaretLeft = adapt(CaretLeftGlyph);
export const CaretRight = adapt(CaretRightGlyph);
export const ChatCircle = adapt(ChatCircleGlyph);
export const Check = adapt(CheckGlyph);
export const CheckCircle = adapt(CheckCircleGlyph);
export const ClipboardText = adapt(ClipboardTextGlyph);
export const Clock = adapt(ClockGlyph);
export const Drop = adapt(DropGlyph);
export const EnvelopeSimple = adapt(EnvelopeGlyph);
export const FacebookLogo = adapt(FacebookGlyph);
export const Football = adapt(FootballGlyph);
export const GameController = adapt(GameControllerGlyph);
export const GraduationCap = adapt(GraduationCapGlyph);
export const GridFour = adapt(GridFourGlyph);
export const HandHeart = adapt(HandHeartGlyph);
export const Heart = adapt(HeartGlyph);
export const House = adapt(HouseGlyph);
export const InstagramLogo = adapt(InstagramGlyph);
export const Leaf = adapt(LeafGlyph);
export const List = adapt(ListGlyph);
export const MapPin = adapt(MapPinGlyph);
export const Medal = adapt(MedalGlyph);
export const MusicNotes = adapt(MusicNotesGlyph);
export const PaintBrush = adapt(PaintBrushGlyph);
export const Phone = adapt(PhoneGlyph);
export const PaperPlaneTilt = adapt(PaperPlaneGlyph);
export const Quotes = adapt(QuotesGlyph);
export const Rocket = adapt(RocketGlyph);
export const Scroll = adapt(ScrollGlyph);
export const ShieldCheck = adapt(ShieldCheckGlyph);
export const Sparkle = adapt(SparkleGlyph);
export const Star = adapt(StarGlyph);
export const Sword = adapt(SwordGlyph);
export const Trophy = adapt(TrophyGlyph);
export const Users = adapt(UsersGlyph);
export const WhatsappLogo = adapt(WhatsappGlyph);
export const X = adapt(XGlyph);
export const YoutubeLogo = adapt(YoutubeGlyph);
