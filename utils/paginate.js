const paginate = async (model, filter, options) => {
  const { limit = 10, page = 1, order = [['id', 'DESC']] } = options;
  const offset = (page - 1) * limit;

  const result = await model.findAndCountAll({
    where: filter,
    limit,
    offset,
    order
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
