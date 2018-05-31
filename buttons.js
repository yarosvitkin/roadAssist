function reports() {
  var userFrom = document.getElementById('userFromEmail');
  var userTo = document.getElementById('userToEmail');
  var description = document.getElementById('description');

  var reportsRef = firebase.database().ref('/Reports');

  reportsRef.on('child_added', function(value) {
    data = value.val();
    userFrom.innerHTML += 'from ' + data.userFromEmail + '<br>' + '<br>';
    userTo.innerHTML += 'to ' + data.userToEmail + '<br>' + '<br>';
    description.innerHTML += data.description + '<br>' + '<br>';

  });

  $('#reports').fadeIn('slow');
  document.getElementById("user_div").style.display = "none";
  // document.getElementById("reports").style.display = "block";

}

function search() {
  $('#search').fadeIn('slow');
  document.getElementById("user_div").style.display = "none";
  // document.getElementById("search").style.display = "block";

}

function addPoint() {
  $('#addPoint').fadeIn('slow');
  document.getElementById("user_div").style.display = "none";

}

function submitPointToDatabase() {

  //checkbox Data
  var carWash = document.getElementById('carWash');
  var carRentalCompany = document.getElementById('carRentalCompany');
  var carService = document.getElementById('carService');
  var carInsuranceCompany = document.getElementById('carInsuranceCompany');
  var shabbat = document.getElementById('Shabbat');

  //input Data
  var companyName = document.getElementById('companyName').value;
  var companyPhone = document.getElementById('companyPhone').value;
  var companyEmail = document.getElementById('companyEmail').value;
  var companyAddress = document.getElementById('companyAddress').value;
  var companyLat = parseFloat(document.getElementById('companyLat').value);
  var companyLong = parseFloat(document.getElementById('companyLong').value);

  if (carWash.checked) {

    firebase.database().ref('PlacesOnMap/CarWashes').child(companyName).set({
      'name': companyName,
      'lat': companyLat,
      'lng': companyLong,
      'shabbat': 'false',
      'email': companyEmail,
      'phone': companyPhone,
      'address': companyAddress,
      'image': './img/markers/new_markers/carwash.png'
    });
    if (shabbat.checked) {
      firebase.database().ref('PlacesOnMap/CarWashes').child(companyName).update({'shabbat': 'true'});

    }

  }
  if (carRentalCompany.checked) {
    firebase.database().ref('PlacesOnMap/CarRental').child(companyName).set({
      'name': companyName,
      'lat': companyLat,
      'lng': companyLong,
      'shabbat': 'false',
      'email': companyEmail,
      'phone': companyPhone,
      'address': companyAddress,
      'image': './img/markers/new_markers/carrental.png'

    });
    if (shabbat.checked) {
      firebase.database().ref('PlacesOnMap/CarRental').child(companyName).update({'shabbat': 'true'});

    }

  }
  if (carService.checked) {

    firebase.database().ref('PlacesOnMap/CarService').child(companyName).set({
      'name': companyName,
      'lat': companyLat,
      'lng': companyLong,
      'shabbat': 'false',
      'email': companyEmail,
      'phone': companyPhone,
      'address': companyAddress,
      'image': './img/markers/new_markers/maint.png'

    });
    if (shabbat.checked) {
      firebase.database().ref('PlacesOnMap/CarService').child(companyName).update({'shabbat': 'true'});

    }

  }
  if (carInsuranceCompany.checked) {
    firebase.database().ref('PlacesOnMap/CarInsuranceCompany').child(companyName).set({
      'name': companyName,
      'lat': companyLat,
      'lng': companyLong,
      'shabbat': 'false',
      'email': companyEmail,
      'phone': companyPhone,
      'address': companyAddress,
      'image': './img/markers/new_markers/carrinsurance.png'

    });
    if (shabbat.checked) {
      firebase.database().ref('PlacesOnMap/CarInsuranceCompany').child(companyName).update({'shabbat': 'true'});

    }
  }

  console.log('Point added');
  setTimeout(addMarker, 500);
  back();
  $('#user_div').slideDown('slow');
  document.getElementById("addPoint").style.display = "none";

}

function startSearchByUser() {
  var usersRef = firebase.database().ref('Users');
  var searchField = document.getElementById('search_field');

  var searchPhone = document.getElementById('searchPhone');
  var searchName = document.getElementById('searchName');
  var searchAddress = document.getElementById('searchAddress');

  document.getElementById("user_div").style.display = "none";
  document.getElementById("search").style.display = "none";
  $('#serchResultDiv').fadeIn('slow');

  usersRef.on('child_added', function(value) {

    data = value.val();

    if (data.email === searchField.value) {

      searchPhone.innerHTML = data.phone;
      searchName.innerHTML = data.name;
      searchAddress.innerHTML = data.surname;
    }
  });

}

function startSearchByGarage() {
  var serviceRef = firebase.database().ref('PlacesOnMap/CarService');
  var insuranceCompanyRef = firebase.database().ref('PlacesOnMap/CarInsuranceCompany');
  var rentalCompanyRef = firebase.database().ref('PlacesOnMap/CarRental');
  var washesRef = firebase.database().ref('PlacesOnMap/CarWashes');
  var salesRef = firebase.database().ref('PlacesOnMap/CarSales');

  var searchField = document.getElementById('search_field');

  var searchPhone = document.getElementById('searchPhone');
  var searchName = document.getElementById('searchName');
  var searchAddress = document.getElementById('searchAddress');

  document.getElementById("user_div").style.display = "none";
  document.getElementById("search").style.display = "none";
  $('#serchResultDiv').fadeIn('slow');

  salesRef.on('child_added', function(value) {
    data = value.val();
    if (data.email === searchField.value) {
      searchPhone.innerHTML = data.phone;
      searchName.innerHTML = data.name;
      searchAddress.innerHTML = data.adress;
    }
  });

  serviceRef.on('child_added', function(value) {
    data = value.val();
    if (data.email === searchField.value) {
      searchPhone.innerHTML = data.phone;
      searchName.innerHTML = data.name;
      searchAddress.innerHTML = data.address;
    }
  });

  insuranceCompanyRef.on('child_added', function(value) {
    data = value.val();

    if (data.email === searchField.value) {
      searchPhone.innerHTML = data.phone;
      searchName.innerHTML = data.name;
      searchAddress.innerHTML = data.address;
    }
  });
  rentalCompanyRef.on('child_added', function(value) {
    data = value.val();

    if (data.email === searchField.value) {
      searchPhone.innerHTML = data.phone;
      searchName.innerHTML = data.name;
      searchAddress.innerHTML = data.address;
    }
  });
  washesRef.on('child_added', function(value) {
    data = value.val();

    if (data.email === searchField.value) {
      searchPhone.innerHTML = data.phone;
      searchName.innerHTML = data.name;
      searchAddress.innerHTML = data.address;
    }
  });

}

function back() {
  $('#user_div').slideDown('slow');
  $('#reports').slideDown('slow');
  $('#search').slideDown('slow');
  $('#serchResultDiv').slideDown('slow');
  $('#addPoint').slideDown('slow');
  document.getElementById("reports").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("serchResultDiv").style.display = "none";
  document.getElementById("addPoint").style.display = "none";
  //Clear reports
  var userFrom = document.getElementById('userFromEmail');
  var userTo = document.getElementById('userToEmail');
  var description = document.getElementById('description');
  userFrom.innerHTML = " ";
  userToEmail.innerHTML = " ";
  description.innerHTML = " ";
  //Clear search results
  var searchPhone = document.getElementById('searchPhone');
  var searchName = document.getElementById('searchName');
  var searchAddress = document.getElementById('searchAddress');
  searchPhone.innerHTML = '';
  searchName.innerHTML = '';
  searchAddress.innerHTML = '';
  //Clear all inputs
  document.getElementById('search_field').value = '';
  document.getElementById('companyName').value = '';
  document.getElementById('companyLat').value = '';
  document.getElementById('companyLong').value = '';
  document.getElementById('companyPhone').value = '';
  document.getElementById('companyEmail').value = '';
  //Clear checkboxes
  document.getElementById('carRentalCompany').checked = false;
  document.getElementById('carWash').checked = false;
  document.getElementById('carService').checked = false;
  document.getElementById('carInsuranceCompany').checked = false;
  document.getElementById('Shabbat').checked = false;

}
