import { Cell } from "../grid/Cell";
import { BaseModal } from "./BaseModal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the FRC team in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the team number.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="correct"
        />
        <Cell value="6" />
        <Cell value="8" />
        <Cell value="7" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The character 2 is in the number and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell value="6" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="8"
          status="present"
        />
        <Cell value="9" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The character 6 is in the number but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell isRevealing={true} isCompleted={true} value="4" status="absent" />
        <Cell value="6" />
        <Cell value="8" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The character 4 is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/Coolbeans007/frcwordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{" "}
      </p>
    </BaseModal>
  );
};
