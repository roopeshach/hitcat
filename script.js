
var destinationDetails = {
  'Uluru': {
    name: 'Uluru',
    description: "Uluru is a sacred site to the Pitjantjatjara Anangu, the Indigenous people of the area. It's renowned for its cultural and spiritual significance.",
    image: 'uluru.jpeg'
  },
  'Kakadu': {
    name: 'Kakadu National Park',
    description: "Kakadu National Park is a biodiverse nature reserve with wetlands, rivers, and sandstone escarpments. It's home to various unique plant and animal species.",
    image: 'kakadu.jpg'
  },
  'GreatBarrierReef': {
    name: 'Great Barrier Reef',
    description: "The Great Barrier Reef is the world's largest coral reef system, famous for its stunning underwater diversity and marine life.",
    image: 'great-barrier-reef.jpeg'
  },
  'DaintreeRainforest': {
    name: 'Daintree Rainforest',
    description: "The Daintree Rainforest, located in Queensland, is one of the oldest rainforests in the world and a vast region of tropical diversity.",
    image: 'daintree-rainforest.jpeg'
  },
  'BondiBeach': {
    name: 'Bondi Beach',
    description: "Bondi Beach is one of Australia's most famous beaches, known for its golden sands, surfable waves, and vibrant culture.",
    image: 'bondi-beach.jpeg'
  },
  'BlueMountains': {
    name: 'Blue Mountains',
    description: "The Blue Mountains are a mountainous region and a World Heritage site in New South Wales, known for dramatic scenery and eucalyptus forests.",
    image: 'blue-mountains.jpeg'
  },
  'LitchfieldPark': {
    name: 'Litchfield Park',
    description: "Litchfield National Park is renowned for its cascading waterfalls, crystal-clear swimming holes, and impressive termite mounds. It's a haven for nature lovers and adventurers alike.",
    image: 'litchfield-park.jpeg'
  },
  'TheOlgas': {
    name: 'The Olgas',
    description: "Also known as Kata Tjuta, The Olgas are a group of large, ancient rock formations. They are located in the Uluru-Kata Tjuta National Park and hold great spiritual significance for the Anangu people.",
    image: 'the-olgas.jpeg'
  },
  'KingsCanyon': {
    name: 'Kings Canyon',
    description: "Kings Canyon features ancient sandstone walls, sculpted by the elements to create a dramatic landscape. Visitors can explore the rim, take challenging hikes to the canyon floor, and marvel at the diverse ecosystems.",
    image: 'kings-canyon.jpeg'
  },
  'SydneyOperaHouse': {
    name: 'Sydney Opera House',
    description: "An iconic image of Australia, the Sydney Opera House is celebrated for its distinctive sail-like design. It's a multi-venue performing arts center at Sydney Harbour, recognized as a masterpiece of 20th century architecture.",
    image: 'sydney-opera-house.jpeg'
  }
  
};


function learnMore(destinationKey) {
  var destination = destinationDetails[destinationKey];

  // Update modal content
  document.getElementById('dynamicModalLabel').innerText = destination.name; // Dynamic modal title with destination name
  var modalBody = document.getElementById('dynamicModal').querySelector('.modal-body');
  
  // Clear previous content
  modalBody.innerHTML = '';

  // Create and append the image element
  var img = document.createElement('img');
  img.src = destination.image;
  img.alt = destination.name + ' image';
  img.className = 'img-fluid mb-3';
  modalBody.appendChild(img);

  // Create and append the description paragraph
  var p = document.createElement('p');
  p.innerText = destination.description;
  modalBody.appendChild(p);

  // Show the modal
  $('#dynamicModal').modal('show');
}