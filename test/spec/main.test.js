/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('hello', function () {
  it('should return world', function () {
    hello().should.equal('world');
  });
});

describe('addContactToTable', function () {
  it('should add a row to the table', function () {
    var contact = { name: 'Margaret' },
        uuid    = 'jasf';
    addContactToTable(uuid, contact);
    expect('data-uuid').to.exist();
  });
});

describe('removeContact', function () {
  it('should remove a contact from the table', function () {
    var contact = { name: 'Margaret' },
        uuid    = 'jasf';
    removeContact();
    expect(contact).to.not.exist;
  });
});

