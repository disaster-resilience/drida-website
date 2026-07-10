// Map the string icon names used in site data → lucide components, so the
// data file stays plain and pages can render <Icon name="..." /> style.
import { RadioTower, Building2, Map, Users, ShieldCheck } from 'lucide-react'

export const ICONS = { RadioTower, Building2, Map, Users }

export function programIcon(name) {
  return ICONS[name] || ShieldCheck
}
