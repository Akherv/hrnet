export const stringSort = (val_a, val_b, type) => {
  let a = val_a.toLowerCase();
  let b = val_b.toLowerCase();
  if (type) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  } else {
    if (b < a) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  }
};

export const dateSort = (val_a, val_b, type) => {
  let a = val_a.split("/");
  let b = val_b.split("/");

  let da = new Date(`${a[2]}-${a[1]}-${a[0]}`);
  let db = new Date(`${b[2]}-${b[1]}-${b[0]}`);

  if (type) {
    if (da < db) {
      return -1;
    }
    if (da > db) {
      return 1;
    }
    return 0;
  } else {
    if (db < da) {
      return -1;
    }
    if (db > da) {
      return 1;
    }
    return 0;
  }
};
