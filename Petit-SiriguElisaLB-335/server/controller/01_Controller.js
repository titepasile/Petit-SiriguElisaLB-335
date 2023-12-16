const { getInitialData } = require("./data");

let datadefinition = require("./data");
let data = datadefinition.InitialData;

// Initialisiere die Kategorien (hinzugefügt)
let categories = datadefinition.Categories.map((category, index) => ({
  ...category,
  id: index,
}));

function updateId() {
  data = data.filter(function (el) {
    return el != null;
  });

  data.forEach((item, i) => {
    item.id = i;
  });
  categories.forEach((item, i) => {
    item.id = i;
  });
}

module.exports = {
  async getAll(req, res) {
    try {
      updateId();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "server error",
      });
    }
  },
  async getAllCategories(req, res) {
    try {
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "server error",
      });
    }
  },
  async addCategory(req, res) {
    try {
      const newCategory = { ...req.body.category, id: categories.length };
      categories.push(newCategory);
      res.json({
        err: false,
        msg: "Category added successfully",
      });
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "server error, could not add category",
      });
    }
  },

  async updateCategory(req, res) {
    try {
      const categoryId = req.body.id;
      const updatedCategory = req.body.category;
      if (categories[categoryId]) {
        categories[categoryId] = { ...updatedCategory, id: categoryId };
        res.json({
          err: false,
          msg: "Category updated successfully",
        });
      } else {
        res.json({
          err: true,
          msg: "Category not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "server error, could not update category",
      });
    }
  },

  async deleteCategory(req, res) {
    try {
      const categoryId = req.body.id;
      if (categories[categoryId]) {
        categories.splice(categoryId, 1);
        res.json({
          err: false,
          msg: "Category deleted successfully",
        });
      } else {
        res.json({
          err: true,
          msg: "Category not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "server error, could not delete category",
      });
    }
  },
  async getOne(req, res) {
    try {
      if (data[req.params.id]) {
        one = data[req.params.id];
        res.json(one);
      } else {
        res.json({
          err: true,
          msg: "id not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "Details of ID not found",
      });
    }
  },
  async addOne(req, res) {
    try {
      let id = data.push(req.body.data) - 1;
      updateId();
      res.json({
        err: false,
        id: id,
      });
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "server error, could not add element",
      });
    }
  },
  async changeOne(req, res) {
    try {
      let id = parseInt(req.body.data.id);
      if (data[id]) {
        data[id] = req.body.data;
        res.json({
          err: false,
          id: id,
        });
      } else {
        res.json({
          err: true,
          msg: "id not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "server error, could not change element",
      });
    }
  },
  async deleteOne(req, res) {
    try {
      if (data[req.body.id]) {
        delete data[req.body.id];
        res.json({
          err: false,
          msg: `${req.body.id} deleted`,
        });
        updateId();
      } else {
        res.json({
          err: true,
          msg: "nothing to delete",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        err: true,
        msg: "server error, could not delete element",
      });
    }
  },
};
