/* jshint jquery: true */

(function () {
  'use strict';

  function hello() {
    return 'world';
  }

  var FIREBASE_URL = 'https://mcaddressbook.firebaseio.com/contacts.json';

  $(document).ready(function(evt) {
    var $form = $('.contacts-form'),
        $newContact = $('.newContact'),
        $addContact = $('.addContact'),
        $removeContact = $('.remove');

    $newContact.click(function() {
      console.log('clicked new contact');
      $form.show();
      $addContact.show();
      $newContact.hide();
    });

    $addContact.click(getContact);
    $('table').on('click', $removeContact, removeContact);
  });

  $.get(FIREBASE_URL, function(data){
    Object.keys(data).forEach(function(contact) {
      addContactToTable(data[contact]);
    });
  });

  function addContactToTable(contact) {
    var $tr = $('<tr><td class="image"><img class="image" src="' + contact.photo +
               '"></td><td class="name">' + contact.name +
                '</td><td class="phone">' + contact.phone +
                '</td><td class="email">' + contact.email +
               '</td><td><button class="remove">Remove</button></td></tr>');

    $('.target').append($tr);
  }

  function getContact(event) {
    event.preventDefault();

    var $name = $('.name').val(),
        $phone = $('.phone').val(),
        $email = $('.email').val(),
        $photo = $('.photo').val();

    var contact = {name: $name, phone: $phone, email: $email, photo: $photo};
    var data = JSON.stringify(contact);
    $.post(FIREBASE_URL, data, function(res){
    });
  }

  function removeContact() {
    var $tr = $(this);
    $tr.remove();
  }

})();


