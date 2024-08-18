import Category from '#models/category';

export default class CategoriesController {
  async index() {
    const categories = await Category.query();

    return categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
      };
    });
  }
}
