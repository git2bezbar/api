import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        name: 'Penne quatre fromages',
        description: 'Crème, quatre fromages',
        price: 700,
        website_id: 1,
        category_id: 1,
      },
      {
        name: 'Penne à la syracuse',
        description: 'Escalope, champignons, crème fraîche',
        price: 750,
        website_id: 1,
        category_id: 1,
      },
      {
        name: 'Penne à la russe',
        description: 'Sauce tomate, crème crevettes',
        price: 750,
        website_id: 1,
        category_id: 1,
      },
      {
        name: 'Escalope panée fromagère',
        price: 900,
        website_id: 1,
        category_id: 2,
      },
      {
        name: 'Escalope de veau (à la crème ou au poivre)',
        price: 1100,
        website_id: 1,
        category_id: 2,
      },
      {
        name: 'Le gratin des dunes',
        price: 1000,
        website_id: 1,
        category_id: 2,
      },
      {
        name: 'Salade verte',
        description: 'Salade verte, tomates, oignons, olives noires',
        price: 400,
        website_id: 1,
        category_id: 3,
      },
      {
        name: 'Salade mimosa',
        description: 'Salade verte, tomates, oeuf nappé mayonnaise, olives noires',
        price: 450,
        website_id: 1,
        category_id: 3,
      },
      {
        name: 'Salade feta',
        description: 'Salade feta, croûton de pain, oignons, olives noires',
        price: 500,
        website_id: 1,
        category_id: 3,
      },
      {
        name: 'Cannette 33cl',
        price: 150,
        website_id: 1,
        category_id: 4,
      },
      {
        name: 'Bouteille 50cl',
        price: 250,
        website_id: 1,
        category_id: 4,
      },
      {
        name: 'Bouteille 1.5L',
        price: 400,
        website_id: 1,
        category_id: 4,
      },
      {
        name: 'Tarte aux pommes',
        price: 250,
        website_id: 1,
        category_id: 5,
      },
      {
        name: 'Tarte aux poires chocolat',
        price: 250,
        website_id: 1,
        category_id: 5,
      },
      {
        name: 'Moelleux au chocolat',
        price: 250,
        website_id: 1,
        category_id: 5,
      },
      {
        name: 'Expresso',
        price: 140,
        website_id: 1,
        category_id: 6,
      },
      {
        name: 'Chocolat chaud',
        price: 250,
        website_id: 1,
        category_id: 6,
      },
      {
        name: 'Théière 2 personnes',
        price: 250,
        website_id: 1,
        category_id: 6,
      },
    ])
  }
}
