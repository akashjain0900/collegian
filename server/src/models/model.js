var sql = require("../../config/connection");
var Details = require("./vari");

//Adding New-User values to the DB.
Details.newUser = (data, result) => {
  sql.query(
    "INSERT INTO cred SET id=?, password=?, role=?",
    [data.id, data.password, data.role],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      } else {
        result(null, res);
        return;
      }
    }
  );
};

//Retriving the User info based on the ID - Check if user exists or no.
Details.checkuser = (data, result) => {
  sql.query(
    "SELECT password, role FROM cred WHERE id = ?",
    [data.id],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

Details.profile = (data, result) => {
  sql.query(
    "INSERT into std_details SET id=?, name=?; INSERT INTO personal_details SET id=?, father_name=?, father_mob=?, mom_name=?, mom_mob=?",
    [
      data.id,
      data.name,
      data.id,
      data.father_name,
      data.father_mob,
      data.mom_name,
      data.mom_mob,
    ],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      } else {
        result(null, res);
        return;
      }
    }
  );
};

module.exports = Details;
