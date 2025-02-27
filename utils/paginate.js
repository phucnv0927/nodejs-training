const paginate = async (model, filter, options) => {
  const { attributes = ['*'], limit = 10, page = 1, order = [['id', 'DESC']], include = [] } = options;
  const offset = (page - 1) * limit;

  const result = await model.findAndCountAll({
    attributes,
    where: filter,
    limit,
    offset,
    order,
    include
  });

  return {
    page,
    limit,
    totalPages: Math.ceil(result.count / limit),
    totalRecords: result.count,
    data: result.rows
  };
};

module.exports = paginate;
