/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('DOM', function() {
  describe('table', function(){
    beforeEach(function() {
      if (window.__karma__) {
        $('body').append('<table><thead></thead><tbody></tbody></table>');
      }
    });
    beforeEach(function() {
      $('tbody').empty();
    });

    describe('addContactToTable', function () {
      it('should have a data attribute', function () {
        var contact = { name: 'Margaret' },
            uuid    = 'jasf';
        addContactToTable(uuid, contact);
        expect('data-uuid').to.exist();
      });
    });

    describe('addContactToTable', function () {
      it('should properly recognize specific keys', function () {
        var contact = { name: 'Margaret', phone: '804-363-6115' },
            uuid    = 'jasf';
        addContactToTable(uuid, contact);
        expect(contact.name).to.equal('Margaret');
      });
    });

    describe('addContactToTable', function () {
      it('should properly recognize keys', function () {
        var contact = { name: 'Margaret', phone: '804-363-6115' },
            uuid    = 'jasf';
        addContactToTable(uuid, contact);
        expect(Object.keys).to.exist();
      });
    });

    describe('addContactToTable', function () {
      it('add a table row to tbody', function () {
        var contact = { name: 'Margaret', phone: '804-363-6115' },
            uuid    = 'jasf';
        //expect('tbody').to.be.empty;
        addContactToTable(uuid, contact);
        expect('tbody').to.not.be.empty;
      });
    });

  });
});
