import graveyardBackup from "../backup/graveyard.json";
import { GRAVEYARD_URL } from "./constants";
import { Graveyard, ProductType } from "./types";

interface RawGrave {
  name: string;
  description: string;
  dateOpen: string;
  dateClose: string;
  link: string;
  type: string;
}

export function fetchGraveyard(): Promise<Graveyard> {
  return fetch(GRAVEYARD_URL)
    .then((response) => response.json())
    .catch(loadBackupGraveyard)
    .then(enforceGraveyardType);
}

function loadBackupGraveyard(): RawGrave[] {
  console.warn(
    "Loading graveyard.json from backup",
    "The data might be outdated"
  );
  return graveyardBackup;
}

function enforceGraveyardType(rawData: RawGrave[]): Graveyard {
  return graveyardBackup.map(
    ({ name, description, dateOpen, dateClose, link, type }) => {
      return {
        name,
        description,
        dateOpen: new Date(dateOpen),
        dateClose: new Date(dateClose),
        link,
        type: enforceProductType(type),
      };
    }
  );
}

function enforceProductType(type: string): ProductType {
  if (type === "app") return "app";
  if (type === "service") return "service";
  if (type === "hardware") return "hardware";
  throw new Error();
}
