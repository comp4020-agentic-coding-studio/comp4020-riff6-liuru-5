import type { ImageMetadata } from "astro";

import gazingAtAWaterfall from "../assets/paintings/gazing-at-a-waterfall.jpg";
import inkBamboo from "../assets/paintings/ink-bamboo.jpg";
import landscapes from "../assets/paintings/landscapes.jpg";
import listeningToTheQin from "../assets/paintings/listening-to-the-qin.jpg";
import moonGoddess from "../assets/paintings/moon-goddess-change.jpg";
import mountHua from "../assets/paintings/mount-hua.jpg";

/** How the holding museum records authorship, not how we would argue it.
 *  `named` means the catalogue gives Tang Yin as the artist outright;
 *  `attributed` means it qualifies that with "Attributed to"; `after` means it
 *  gives no artist at all and files the work in relation to him. Three labels
 *  because the museums use three, and the gaps between them are the course. */
export type Attribution = "named" | "attributed" | "after";

export interface Painting {
  id: string;
  title: string;
  image: ImageMetadata;
  /** Artist line transcribed from the holding museum's own record. */
  artistLine: string;
  attribution: Attribution;
  date: string;
  medium: string;
  museum: string;
  accession: string;
  creditLine: string;
  licence: string;
  url: string;
  /** True where the work is a tall scroll, so a wide hero band shows a crop. */
  croppedInHero: boolean;
  /** `object-position` for the hero band, so a cropped scroll lands on its
   *  subject rather than on whatever happens to sit at the centre. */
  heroFocus: string;
  alt: string;
}

/** Every record here was read off the museum's public API, not reconstructed
 *  from memory. Met objects carry `isPublicDomain: true`; Cleveland objects
 *  carry `share_license_status: CC0`. The two museums give Tang Yin's death
 *  year differently, so each artist line is transcribed as that museum states
 *  it rather than reconciled to one date. */
export const paintings: Painting[] = [
  {
    id: "gazing-at-a-waterfall",
    title: "Gazing at a Waterfall",
    image: gazingAtAWaterfall,
    artistLine: "Tang Yin (Chinese, 1470–1524)",
    attribution: "named",
    date: "Ming dynasty",
    medium: "Folding fan mounted as an album leaf; ink and color on gold-flecked paper",
    museum: "The Metropolitan Museum of Art",
    accession: "1982.7.2",
    creditLine: "Purchase, The Dillon Fund Gift, 1982",
    licence: "Public domain (Met Open Access, CC0)",
    url: "https://www.metmuseum.org/art/collection/search/45772",
    croppedInHero: false,
    heroFocus: "center",
    alt: "Fan-shaped ink painting on gold-flecked paper. Pines and rocky outcrops fill the centre, a thatched pavilion sits among trees at the left, and a signature with a square red seal is brushed at the upper right.",
  },
  {
    id: "landscapes",
    title: "Landscapes",
    image: landscapes,
    artistLine: "Tang Yin (Chinese, 1470–1524)",
    attribution: "named",
    date: "Ming dynasty",
    medium: "Eight album leaves mounted as a handscroll; ink and color on silk",
    museum: "The Metropolitan Museum of Art",
    accession: "1980.81",
    creditLine: "Ex coll.: C. C. Wang Family, Gift of Douglas Dillon, 1980",
    licence: "Public domain (Met Open Access, CC0)",
    url: "https://www.metmuseum.org/art/collection/search/45773",
    croppedInHero: false,
    heroFocus: "center",
    alt: "Album leaf in pale ink on silk. Willows lean over a river bank where a covered boat is moored, a group of figures gathers on the shore at the left, and a low headland closes the far side of the water. Columns of calligraphy and red seals sit at the upper right.",
  },
  {
    id: "ink-bamboo",
    title: "Ink bamboo",
    image: inkBamboo,
    artistLine: "Tang Yin (Chinese, 1470–1524)",
    attribution: "named",
    date: "early 16th century",
    medium: "Handscroll; ink on paper",
    museum: "The Metropolitan Museum of Art",
    accession: "1989.363.54",
    creditLine: "Bequest of John M. Crawford Jr., 1988",
    licence: "Public domain (Met Open Access, CC0)",
    url: "https://www.metmuseum.org/art/collection/search/45756",
    croppedInHero: false,
    heroFocus: "center",
    alt: "Handscroll in grey ink on pale paper. Bamboo culms and leaves sweep in from the upper left across the sheet, with a poem written in columns of calligraphy below them and several red seals stamped alongside.",
  },
  {
    id: "mount-hua",
    title: "Mount Hua",
    image: mountHua,
    artistLine: "Tang Yin (Chinese, 1470–1523)",
    attribution: "named",
    date: "1506",
    medium: "Hanging scroll; ink and light color on paper",
    museum: "Cleveland Museum of Art",
    accession: "1969.116",
    creditLine: "John L. Severance Fund",
    licence: "CC0 (Cleveland Open Access)",
    url: "https://www.clevelandart.org/art/1969.116",
    croppedInHero: true,
    heroFocus: "center 38%",
    alt: "Tall hanging scroll of layered mountain peaks built up in grey ink with ochre and pale blue-green washes. Rocks and a stream lie at the foot of the composition, an inscription fills the upper right, and red collector seals run down both edges of the mount.",
  },
  {
    id: "listening-to-the-qin",
    title: "Listening to the Qin",
    image: listeningToTheQin,
    artistLine: "Attributed to Tang Yin (Chinese, 1470–1523)",
    attribution: "attributed",
    date: "late 1400s–early 1500s",
    medium: "Hanging scroll; ink and light color on silk",
    museum: "Cleveland Museum of Art",
    accession: "1977.199",
    creditLine: "Gift of Herbert F. Leisy in memory of his wife, Helen Stamp Leisy",
    licence: "CC0 (Cleveland Open Access)",
    url: "https://www.clevelandart.org/art/1977.199",
    croppedInHero: true,
    heroFocus: "center 62%",
    alt: "Hanging scroll on olive-toned silk. A bare, gnarled plum tree arches over an open-sided pavilion where a seated figure plays a qin, several robed figures cross the ground towards it, and a pale full moon hangs at the upper left. The scroll is mounted in a blue brocade border of dragon roundels.",
  },
  {
    id: "moon-goddess-change",
    title: "The Moon Goddess Chang E",
    image: moonGoddess,
    artistLine: "Unidentified artist, after Tang Yin",
    attribution: "after",
    date: "Ming dynasty",
    medium: "Hanging scroll; ink and color on paper",
    museum: "The Metropolitan Museum of Art",
    accession: "1981.4.2",
    creditLine: "Gift of Douglas Dillon, 1981",
    licence: "Public domain (Met Open Access, CC0)",
    url: "https://www.metmuseum.org/art/collection/search/45754",
    croppedInHero: true,
    heroFocus: "center 38%",
    alt: "Hanging scroll of a standing court lady in long pale robes with a blue sash, her hair dressed in an elaborate coil, holding a sprig of blossom. A poem is brushed at the upper right and the margins are crowded with further inscriptions and red collector seals.",
  },
];

const byId = new Map(paintings.map((painting) => [painting.id, painting]));

export function getPainting(id: string): Painting {
  const painting = byId.get(id);
  if (!painting) throw new Error(`Unknown painting: ${id}`);
  return painting;
}

/** Walks the set so consecutive weeks never repeat a painting. */
export function paintingForWeek(week: number): Painting {
  return paintings[(week - 1) % paintings.length]!;
}
