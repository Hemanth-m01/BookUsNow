let pageNumber = 1;
const itemsPerPage = 10;

function fetchData(page) {
  // Simulating fetching data from a JSON file
  // Replace this with actual API call to fetch e-commerce data
  return new Promise((resolve, reject) => {
    fetch(`upcoming.json?page=${page}&limit=${itemsPerPage}`)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function renderItems(items) {
  const gridContainer = document.getElementById('gridContainer');
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <img src="${item.imgUrl}" alt="">
      <h2>${item.eventName}</h2>
      <p><img src="/assets/location.png"> ${item.cityName}</p>
      <h6>${item.weather}</h6>
    `;
    gridContainer.appendChild(itemDiv);
  });
}

function loadNextPage() {
  fetchData(pageNumber)
    .then(data => {
      renderItems(data);
      pageNumber++;
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Initial load
loadNextPage();

// Infinite scrolling
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadNextPage();
  }
});
