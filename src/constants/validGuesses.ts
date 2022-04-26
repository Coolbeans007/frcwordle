let walkingL: string[];
walkingL = [""];
let i: number = 0;
while (i <= 9999) {
  walkingL.push(i.toString());
  i++;
}
export const VALID_GUESSES = walkingL;
