document.addEventListener("DOMContentLoaded", function() {
    const contentContainer = document.getElementById('content');
    fetch('recommend.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(Event => {
          const eventCard = document.createElement('div');
          eventCard.classList.add('event-card');
          eventCard.innerHTML = `
            <img src="${Event.imgUrl}" alt="${Event.imgUrl}">
            <h6>${Event.eventName}</h6>
            <p><img src="assets/location.png" alt="">${Event.cityName}</p>
            <h5>${Event.weather}</h5>
          `;
          contentContainer.appendChild(eventCard);
        });
      })
      .catch(error => console.error('Error fetching event data:', error));
  
    contentContainer.addEventListener('scroll', function() {
      if (contentContainer.scrollLeft + contentContainer.clientWidth >= contentContainer.scrollWidth) {
        fetch('recommend.json')
          .then(response => response.json())
          .then(data => {
            data.forEach(Event => {
              const eventCard = document.createElement('div');
              eventCard.classList.add('event-card');
              eventCard.innerHTML = `
                <img src="${Event.imgUrl}" alt="" style="width: 100%;">  
                <h3>${Event.eventName}</h3>
                <p>${Event.cityName}</p>
                <h5>${Event.weather}</h5>
              `;
              contentContainer.appendChild(productCard);
            });
          })
          .catch(error => console.error('Error fetching more product data:', error));
      }
    });
  });