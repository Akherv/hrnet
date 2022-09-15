export const normalize = (val) => {
  if (typeof val === "number") {
    return val.toString().toLowerCase();
  }

  if (typeof val === "string") {
    if (val.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      const valArr = val.split("/");
      const newVal = new Date(`${valArr[2]}-${valArr[1]}-${valArr[0]}`);
      return newVal;
    }
    return val.toLowerCase();
  }
};

export const normalizeSearch = (val) => {
  if (typeof val === "number") {
    return val.toString().toLowerCase();
  }

  if (typeof val === "string") {
    return val.toLowerCase();
  }
};

export const filterRows = (rows, searchWord) => {
  if (searchWord.length === 0) return rows;

  return rows.filter((row) => {
    for (const [, val] of Object.entries(row)) {
      if (normalizeSearch(val).toString().includes(searchWord)) {
        return row;
      }
    }
    return false;
  });
};

export const sortRows = (rows, sort) => {
  return [...rows].sort((val_a, val_b) => {
    const { order, type } = sort;
    const a = normalize(val_a[type]);
    const b = normalize(val_b[type]);
    if (order === "up") {
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
  });
};

export function paginateRows(sortedRows, currentPage, maxRows) {
  return [...sortedRows].slice(
    (currentPage - 1) * maxRows,
    currentPage * maxRows
  );
}
