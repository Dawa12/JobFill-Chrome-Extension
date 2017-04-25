window.onload = function () {
  // loop values array and store each value of input to local storage

  var button = document.getElementById('extButton');

  button.addEventListener('click', function() {
    saveFields();

  });

  fillPopupFields();

  function saveFields() {
    console.log('saving inputs!!!');

    var extension = document.getElementsByClassName('extField');

    for (var i = 0; i < extension.length; i++) {
      console.log(extension[i].name);
      console.log(extension[i].value);

      var pair = {};
      var key = extension[i].name;
      pair[key] = extension[i].value;
      console.log(`pair: ${pair}`);

      chrome.storage.sync.set(pair, function() {
        console.log('Settings saved');
      });

      window.close();

      // alert('Successfully updated!!!');
    }
  }

  function fillPopupFields() {
    console.log('populating popup fields!!!');

    chrome.storage.sync.get(null, function(items) {
      console.log(`items stringify: ${JSON.stringify(items)}`);
      console.log(`items.firstName: ${JSON.stringify(items.firstName)}`);

      var fields = document.querySelectorAll('#extension .extField');

      for (var i = 0; i < fields.length; i++) {
        console.log(`fields[i].name: ${fields[i].name}`);
        const name = fields[i].name;
        fields[i].value = items[name]
      }
    });
  }
}


