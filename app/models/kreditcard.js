const Table = require('./table'); // eslint-disabled-this-line no-unused-vars


class KreditCards extends Table {


  constructor() {
    const table_name = 'kreditcards';
    super(table_name);
  }


// For now only checks if it has not expired
  isValid(card) { // eslint-disable-line
    return new Promise((resolve, reject) => {
      const now = new Date();
      const expire_date = new Date(card.expire_date);
      if (now.getTime() > expire_date.getTime()) {
        return reject(false, 'it has expired');
      }
      return resolve(card, true);
    });
  }

  update(id, attributes) {
    return new Promise((resolve, reject) => {
      if (attributes && attributes.user_id) {
        return reject('Not authorized to change the owner of this card');
      }
      super.update(id, attributes).then((card) => {
        return resolve(card);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}

const instance = new KreditCards();


module.exports = instance;
