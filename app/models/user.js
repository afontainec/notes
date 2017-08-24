const Table = require('./table'); // eslint-disabled-this-line no-unused-vars
const bcrypt = require('bcrypt-nodejs');


class Users extends Table {


  constructor() {
    const tableName = 'users';
    super(tableName);
  }

  // Passwords methods
  //eslint-disable-next-line
  generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }

  // checking if password is valid
  //eslint-disable-next-line
  validPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
  }

  changeArquicoins(id, amount) {
    return new Promise((resolve, reject) => {
      super.findById(id).then((user) => {
        if (!user) {
          return reject('No user found');
        }
        const newArquicoins = user.arquicoins + amount;
        this.table().where({
          id,
        }).update({
          arquicoins: newArquicoins,
        }).returning('*')
          .then((user) => {
            resolve(user);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }

  findByUsername(username) {
    const attributes = {
      username,
    };
    return new Promise((resolve, reject) => {
      super.find(attributes).then((users) => {
        if (users.length !== 0) {
          return resolve(users[0]);
        }
        resolve(null);
      })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const instance = new Users();


module.exports = instance;
