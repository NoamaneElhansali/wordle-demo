export default function submit(
  inp,
  setInp,
  out,
  setOut,
  secret,
  setSecret
) {
  let place_secret = [...secret];
  let includes_secret = [...secret];
  let includes = [];
  let place = [];
  inp[inp.length - 1].forEach((num, i) => {
    includes = [...includes, includes_secret.includes(num)];
    place = [...place, place_secret[i] === num];
    if (includes_secret.includes(num)) {
      includes_secret.splice(includes_secret.indexOf(num), 1);
    }
  });
  setOut((out) => [
    ...out,
    inp[inp.length - 1].map((char, i) =>
      place[i] ? "g" : includes[i] ? "y" : "r"
    ),
  ]);
  setInp((inp) => [...inp, secret.map((char,i) => place[i] ?char: "")]);
  // console.log("inp", inp);
  // console.log("out", out);
  // console.log("secret", secret);
  // console.log("includes", includes);
  // console.log("place", place);
}