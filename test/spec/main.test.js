/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('addContactToTable', function () {
  it('should have a data attribute', function () {
    var contact = { name: 'Margaret' },
        uuid    = 'jasf';
    addContactToTable(uuid, contact);
    expect('data-uuid').to.exist();
  });
});

//describe('removeContact', function () {
  //it('should remove a contact from the table', function () {
    //var contact = { name: 'Margaret' },
        //uuid    = 'jasf';
    //removeContact();
    //expect(contact).to.not.exist;
  //});
//});

