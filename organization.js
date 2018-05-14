const list = `
Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
            `;

function organize(string, i = 0) {
  const arr = string.split('\n');
  if (i < arr.length - 1) {
    console.log(arr[i]);
    i++;
    organize(string, i);
  } else {
    return;
  }
}

organize(list);