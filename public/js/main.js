/* jshint jquery: true */

'use strict';

function hello() {
  return 'world';
}

var FIREBASE_URL = 'https://mcaddressbook.firebaseio.com/contacts.json',
    $form = $('.contacts-form'),
    $newContact = $('.newContact'),
    $addContact = $('.addContact'),
    $removeContact = $('.remove');

$(document).ready(function () {
  $newContact.click(function() {
    $form.show();
    $addContact.show();
    $newContact.hide();
  });

  $addContact.click(getContact);
  removeContact();
});

$.get(FIREBASE_URL, function(data){
  Object.keys(data).forEach(function(uuid) {
    addContactToTable(uuid, data[uuid]);
  });
});

function addContactToTable(uuid, contact) {
  var $tr = $('<tr><td class="image"><img class="image" src="' + contact.photo +
             '"></td><td class="name">' + contact.name +
              '</td><td class="phone">' + contact.phone +
              '</td><td class="email">' + contact.email +
             '</td><td><button class="remove">Remove</button></td></tr>');
  $tr.attr('data-uuid', uuid);
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
  $.post(FIREBASE_URL, data, function(){
    addContactToTable(data.uuid, contact);
  });
  $form.hide();
  $addContact.hide();
  $newContact.show();
}

function removeContact() {
  $('tbody').on('click', $removeContact, function(evt){
    var $tr = $(evt.target).closest('tr');
    $tr.remove();
    var uuid = $tr.data('uuid');
    var url = 'https://mcaddressbook.firebaseio.com/contacts/' + uuid + '.json';
    $.ajax(url, {type: "DELETE"});
  });
}

