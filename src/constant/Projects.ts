import GameOfLife from "../../public/projects/gameoflife.gif";
import Vscode from "../../public/projects/Vscode.png";
import { StaticImageData } from "next/image";

export interface Projects {
  icon: StaticImageData;
  heading: string;
  description: string;
  githubLink?: string;
  shareLink?: string;
}

export const PROJECTS: Projects[] = [
  {
    icon: GameOfLife,
    heading: "Conway's Game Of Life",
    description:
      "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.",
    githubLink: "https://github.com/Sher208/GameOfLife",
    shareLink: "https://sher208.github.io/GameOfLife/",
  },
  {
    icon: Vscode,
    heading: "Commegen Extension",
    description:
      "This solution is designed to address the common challenges of insufficient code deocumentation in software development. By seamlessly integrating with VSCode and leveraging the capabilities of Open AI API this tool generates detailed code comments, enchances collaboration, saves time, and improves software quality across diverse development roles.",
    githubLink: "https://github.com/Sher208/commegen",
  },
];
