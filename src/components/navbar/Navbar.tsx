import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import { GAME_TITLE } from "../../constants/strings";
type Props = {
  setIsInfoModalOpen: (value: boolean) => void;
  setIsStatsModalOpen: (value: boolean) => void;
  setIsSettingsModalOpen: (value: boolean) => void;
};

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <img
          className="left"
          alt="logo first"
          src="https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/thumbnails/FIRST-Icon.png"
          onClick={() => window.open("https://www.firstinspires.org/")}
        />
        <img
          className="right"
          alt="first logo"
          src="https://github.com/Coolbeans007/frcwordle/blob/main/src/first.png?raw=true"
          onClick={() => window.open("https://www.firstinspires.org/")}
        />
        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
