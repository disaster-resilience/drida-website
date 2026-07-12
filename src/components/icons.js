// Map the string icon names used in site data → lucide components, so the
// data file stays plain and pages can render <Icon name="..." /> style.
import {
  RadioTower,
  Building2,
  Map,
  Users,
  ShieldCheck,
  Shield,
  GraduationCap,
  Globe2,
  Network,
  Search,
  ClipboardCheck,
  Siren,
  Package,
  TrendingUp,
  RefreshCw,
  Target,
  Handshake,
  Leaf,
  Recycle,
} from 'lucide-react'

export const ICONS = {
  RadioTower,
  Building2,
  Map,
  Users,
  Shield,
  ShieldCheck,
  GraduationCap,
  Globe2,
  Network,
  Search,
  ClipboardCheck,
  Siren,
  Package,
  TrendingUp,
  RefreshCw,
  Target,
  Handshake,
  Leaf,
  Recycle,
}

export function programIcon(name) {
  return ICONS[name] || ShieldCheck
}

// Partner icons share the same registry; separate helper keeps call sites clear.
export function partnerIcon(name) {
  return ICONS[name] || Network
}
