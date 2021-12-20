let close = true;

const div = document.createElement('div');

div.setAttribute('id', 'list');

const arrow = document.getElementById('arrow');

function toggleList() {
  if (close) {
    close = false;

    div.innerHTML = `
          <ul id="list-ul" style="list-style-type: none">
            <li class="list-li">My account</li>
            <li class="list-li">My tasks</li>
            <li class="list-li">Log out</li>
          </ul>
    `;

    arrow.style.transform = 'rotate(180deg)';

    document.getElementById('drop-down-list').append(div);
  } else {
    close = true;

    arrow.style.transform = 'rotate(0deg)';

    div.remove();
  }

  return undefined;
}

module.exports = toggleList;
