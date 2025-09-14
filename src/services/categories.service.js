const { models } = require('../models/models.js');

const getAll = async () => {
  const categories = await models.Categories.findAll();

  return categories;
};

const get = async (id) => {
  const category = await models.Categories.findByPk(id);

  return category;
};

const create = async (category) => {
  const created = await models.create({ category });

  return created;
};

const update = async (id, category) => {
  const updated = await models.Categories.update(
    { category },
    {
      where: { id },
    },
  );

  return updated;
};

const remove = async (id) => {
  await models.Categories.destroy({
    where: { id },
  });
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
