import HPTS0 from "../images/HardPillToSwallow/HardPillToSwallow0.png";
import HPTS1 from "../images/HardPillToSwallow/HardPillToSwallow1.png";
import RB0 from "../images/RealmBlade/RealmBladeGameplay.png";
import RB1 from "../images/RealmBlade/RealmBladeGameplay1.png";
import RB2 from "../images/RealmBlade/RealmBladeGameplay2.png";
import RB3 from "../images/RealmBlade/RealmBladeBoss.png";
import RB4 from "../images/RealmBlade/RealmBladeBuffs.png";
import TGF1 from "../images/TheGreatFleece/TheGreatFleece01.png";
import TGF2 from "../images/TheGreatFleece/TheGreatFleece02.png";
import TGF3 from "../images/TheGreatFleece/TheGreatFleece03.png";
import TGF4 from "../images/TheGreatFleece/TheGreatFleece04.png";
import Game2D1 from "../images/2DGame/Godot2D.png";
import Game2D2 from "../images/2DGame/Godot2D2.png";
import AA1 from "../images/AA/ApocalypseAcres.png";
import AA2 from "../images/AA/ApocalypseAcres2.png";
import AA3 from "../images/AA/ApocalypseAcres3.png";
import GSM from "../images/GalaxyShooter/GSMenu.png";
import GS1 from "../images/GalaxyShooter/GS1.png";
import GS2 from "../images/GalaxyShooter/GS2.png";

export const PROJECTS = [
  {
    title: "Galaxy Shooter",
    description: `Galaxy Shooter is a 2D space shooter game where you fight off waves of ships for as long as you can. Solo project created using Unity.
    Implemented scripts for player movement and firing lasers. Implemented powerup for the player to collect that allows them to fire 3 lasers or have a speed boost for a short period of time using coroutines, and a powerup to active a shield that will take damage.
    Implemented a spawn manager to infinitely spawn enemies outside of the screen at random locations.`,
    images: [GSM, GS1, GS2],
    link: "https://bdavis90.itch.io/galaxy-shooter",
    source: ``,
    video: "https://www.youtube.com/embed/qR_qj-OTUQM?si=6imvA49qrGLhKBFE",
  },
  // {
  //   title: "Apocalypse Acres",
  //   description:
  //     "Apocalypse Acres is a post-apocalyptic tower defense game where you, as Alex, protect the last fruit and vegetable stand in a nuclear-devastated world. Grow and sell produce while defending against mutant insects and managing radiation levels. Created during my first game jam collaborating with 5 developers specializing in different fields.",
  //   images: [AA1, AA2, AA3],
  //   link: "https://bdavis90.itch.io/apocalypse-acres",
  //   source: ``,
  // },
  // {
  //   title: "2D Game",
  //   description:
  //     "A small 2D game I made using the Godot engine for the first time.",
  //   images: [Game2D1, Game2D2],
  //   link: "https://bdavis90.itch.io/2d-game",
  //   source: `https://github.com/Bdavis90/Godot-2D-Game`,
  // },
  // {
  //   title: "The Great Fleece",
  //   description:
  //     "The Great Fleece is a point and click stealth game where you have to avoid guards and sneak to your destination, The vault.",
  //   images: [TGF1, TGF2, TGF3, TGF4],
  //   link: "https://simmer.io/@Bdavis90/the-great-fleece",
  //   source: ``,
  // },
  {
    title: "Realm Blade",
    description: `Realm Blade is a 3D rogue lite that takes gameplay inspiration from games like Soul Knight and Binding of Issac but with a 3D aesthetic. 
    The main gameplay loop consists of the player progressing through levels wherein they need to combat a round of enemies in order to progress to the next level. 
    Created in 4 months with a team of 5 developers using Unreal Engine. My role consisted of creating all of the UI for the project and implementing the logic for spawning items selected in the reward menus.
    Implemented the settings for the game which consisted of music, sound effets, and keybinds. Implemented a drag and drop feature to reorder and remove buffs. Also had to make all the UI compatiable with a controller.
    Implemented blood effects when the player and enemies get hurt. Finally I implemented multiple traps with consisted of Spike traps, fire traps, arrow traps and exploding barrels.
      `,
    images: [RB0, RB1, RB2, RB3, RB4],
    link: "https://bigpapaergodzillas.itch.io/realm-blade",
    source: "",
    video: "https://www.youtube.com/embed/-YVBu9d8MBs?si=REMFTa2ozgBNKKhZ",
  },
  {
    title: "A Hard Pill To Swallow",
    description: `A Hard Pill To Swallow is a first-person wave based shooter where you try to survive as long as you can. Created in a month with a team of 5 developers using Unity. 
      My role was to implemented user interactions with environment such as doors. Also generate weapon pickups and power pickups for player progression using scriptable objects.
      Also supported other programmers in coming up with solutions and debugging.`,
    images: [HPTS0, HPTS1],
    link: "https://simmer.io/@BigPaperGodzla/a-hard-pill-to-swallow",
    source: "",
    video: "https://www.youtube.com/embed/RlETvrkSNlk?si=-TOo1TuPr6UKw6Sv",
  },
];
