'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = row.children;
  const secondCell = cells[1];
  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, cells[cells.length - 1]);
});
