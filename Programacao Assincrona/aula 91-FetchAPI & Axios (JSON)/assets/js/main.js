// axios json

(() => {
  // fetch('pessoas.json')
  //   .then(response => response.json())
  //   .then(json => loadElementsOnPage(json));

  axios('pessoas.json')
    .then(response => loadElementsOnPage(response.data));

  function loadElementsOnPage(json) {
    const table = document.createElement('table');

    for (let data of json) {
      const tr = document.createElement('tr');

      let td1 = document.createElement('td');
      td1.innerHTML = data.nome;
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      td2.innerHTML = data.idade;
      tr.appendChild(td2);

      table.appendChild(tr);
    }

    const result = document.querySelector('.resultado');
    result.appendChild(table);
  }
})();
