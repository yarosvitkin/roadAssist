getData();
console.log('Get data started');
var markers = [];
var carWashes;
var carService;
var carInsuranceCompany;
var carRental;
var carSales;

function getData() {
  carWashes = firebase.database().ref('PlacesOnMap/CarWashes');
  carService = firebase.database().ref('PlacesOnMap/CarService');
  carInsuranceCompany = firebase.database().ref('PlacesOnMap/CarInsuranceCompany');
  carRental = firebase.database().ref('PlacesOnMap/CarRental');
  carSales = firebase.database().ref('PlacesOnMap/CarSales');

  carSales.on('child_added', function(value) {
    testVal = value.val();
    //  console.log(testVal);

    addMarker({
      coordinates: {
        lat: testVal.lat,
        lng: testVal.lng
      },
      info: testVal.name,
      image: './img/markers/new_markers/carsales.png'
    });

    // markers.push({
    //   coordinates: {
    //     lat: testVal.lat,
    //     lng: testVal.lng
    //   },
    //   info: testVal.name
    // });

  });

  carWashes.on('child_added', function(value) {
    testVal = value.val();
    //  console.log(testVal);

    addMarker({
      coordinates: {
        lat: testVal.lat,
        lng: testVal.lng
      },
      info: testVal.name,
      image: './img/markers/new_markers/carwash.png'
    });

    // markers.push({
    //   coordinates: {
    //     lat: testVal.lat,
    //     lng: testVal.lng
    //   },
    //   info: testVal.name
    // });

  });
  carService.on('child_added', function(value) {
    testVal = value.val();
    //  console.log(testVal);

    addMarker({
      coordinates: {
        lat: testVal.lat,
        lng: testVal.lng
      },
      info: testVal.name,
      image: './img/markers/new_markers/workshop.png'
    });
    // markers.push({
    //   coordinates: {
    //     lat: testVal.lat,
    //     lng: testVal.lng
    //   },
    //   info: testVal.name
    // });

  });
  carInsuranceCompany.on('child_added', function(value) {
    testVal = value.val();
    //console.log(testVal);

    addMarker({
      coordinates: {
        lat: testVal.lat,
        lng: testVal.lng
      },
      info: testVal.name,
      image: './img/markers/new_markers/carrinsurance.png'
    });

    // markers.push({
    //   coordinates: {
    //     lat: testVal.lat,
    //     lng: testVal.lng
    //   },
    //   info: testVal.name
    // });
  });

  carRental.on('child_added', function(value) {
    testVal = value.val();
    //  console.log(testVal);
    addMarker({
      coordinates: {
        lat: testVal.lat,
        lng: testVal.lng
      },
      info: testVal.name,
      image: './img/markers/new_markers/carrental.png'
    });
  })

}
