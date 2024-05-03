const rpgenerator = () => {
  let str =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%^&*";
  let pass = "";

  for (let i = 0; i <= 15; i++) {
    let idx = Math.floor(Math.random() * str.length);
    pass = pass + str.charAt(idx);
  }

  return pass;
};

module.exports = rpgenerator;
