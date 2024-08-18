import Product from '#models/product'
import Website from '#models/website'
import { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ params }: HttpContext) {
    const { uuid } = params
    const { id: websiteId } = await Website.query().where('uuid', uuid).firstOrFail()
    const products = await Product.query().where('website_id', websiteId)

    return products[0]
  }

  async update({ request, params }: HttpContext) {
    const { uuid } = params
    const { id: websiteId } = await Website.query().where('uuid', uuid).firstOrFail()
    const { id: productId } = await Product.query().where('website_id', websiteId).firstOrFail()
    const { content } = request.all()
    const updatedProduct = await Product.query()
      .where('id', productId)
      .update({ content: JSON.stringify(content) });

    return updatedProduct

  }
}
