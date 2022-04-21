// defines Create , Read, Update and Delete operations
const index=(schema, mongoose) => {
/**************************create user**************************** */
schema.statics.addUser = async function (data) {
  try {
    const user = await this.create(data);//user added to db
    return user;
  } catch (error) {
    throw error;
  }
}
/**************************get user by id**************************** */
schema.statics.findUser = async function (data) {
  try {
    const user = await this.findOne(data);
    return user;
  } catch (error) {
    throw error;
  }
}
/**************************get all users **************************** */
schema.statics.findUsers = async function () {
  try {
    const users = await this.find();
    return users;
  } catch (error) {
    throw error;
  }
}
/**************************update user by id**************************** */
schema.statics.updateUser = async function (id, data) {
  try {
    const user = await this.findOneAndUpdate(id, data, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
}
/**************************remove user by id**************************** */
schema.statics.deleteUser = async function (data) {
  try {
    const user = await this.findOneAndRemove(data);
    return user;
  } catch (error) {
    throw error;
  }
}

  return schema;
}
export default index;

  