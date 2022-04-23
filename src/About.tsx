import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>{gameName}</i> is a remake of the word game{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>, which
        This remake uses frc team numbers from world, you can find the teams at <a href="https://www.thebluealliance.com/">thebluealliance</a>.
      </p>
      <p>
        You get {maxGuesses} tries to guess a target number.
        <br />
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Absent, letter: "1" },
          { clue: Clue.Absent, letter: "1" },
          { clue: Clue.Correct, letter: "6" },
          { clue: Clue.Elsewhere, letter: "2" },
        ]}
      />
      <p>
        <b>2</b> and <b>4</b> aren't in the target number at all.
      </p>
      <p>
        <b className={"green-bg"}>6</b> is correct! The third letter is{" "}
        <b className={"green-bg"}>6</b>
        .<br />
        <strong>(There may still be a second 6 in the number.)</strong>
      </p>
      <p>
        <b className={"yellow-bg"}>2</b> occurs <em>elsewhere</em> in the target
        number.
        <br />
        <strong>(Perhaps more than once. 🤔)</strong>
      </p>
      <hr />
      <p>
        Let's move the <b>8</b> in our next guess:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "2" },
          { clue: Clue.Correct, letter: "4" },
          { clue: Clue.Correct, letter: "6" },
          { clue: Clue.Absent, letter: "9" },
        ]}
        annotation={"So close!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "2" },
          { clue: Clue.Correct, letter: "4" },
          { clue: Clue.Correct, letter: "6" },
          { clue: Clue.Correct, letter: "8" },
        ]}
        annotation={"Got it!"}
      />
      <p>
        {/* Report issues{" "}
        <a href="https://github.com/lynn/hello-wordl/issues">here</a>, or tweet{" "}
        <a href="https://twitter.com/chordbug">@chordbug</a>. */}
      </p>
      {/* <p>
        This game will be free and ad-free forever,
        <br />
        but you can <a href="https://ko-fi.com/chordbug">buy me a coffee</a> if
        you'd like.
      </p> */}
    </div>
  );
}
