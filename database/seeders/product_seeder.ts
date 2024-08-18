import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        content: {
          "Salade feta": {
              "price": 500,
              "title": "Salade feta",
              "category_id": 3,
              "description": "Salade feta, croûton de pain, oignons, olives noires"
          },
          "Salade verte": {
              "price": 400,
              "title": "Salade verte",
              "category_id": 3,
              "description": "Salade verte, tomates, oignons, olives noires"
          },
          "Cannette 33cl": {
              "price": 150,
              "title": "Cannette 33cl",
              "category_id": 4,
              "description": "Description bidon"
          },
          "Salade mimosa": {
              "price": 450,
              "title": "Salade mimosa",
              "category_id": 3,
              "description": "Salade verte, tomates, oeuf nappé mayonnaise, olives noires"
          },
          "Bouteille 1.5L": {
              "price": 400,
              "title": "Bouteille 1.5L",
              "category_id": 4,
              "description": "Description bidon"
          },
          "Bouteille 50cl": {
              "price": 250,
              "title": "Bouteille 50cl",
              "category_id": 4,
              "description": "Description bidon"
          },
          "Tarte aux pommes": {
              "price": 250,
              "title": "Tarte aux pommes",
              "category_id": 5,
              "description": "Description bidon"
          },
          "Penne à la russe": {
              "price": 750,
              "title": "Penne à la russe",
              "category_id": 2,
              "description": "Sauce tomate, crème crevettes"
          },
          "Soupe de légumes": {
              "price": 600,
              "title": "Soupe de légumes",
              "category_id": 1,
              "description": "Soupe maison, faite avec produits locaux"
          },
          "Concombre au yaourt": {
              "price": 600,
              "title": "Concombre au yaourt",
              "category_id": 1,
              "description": "Description bidon"
          },
          "Le gratin des dunes": {
              "price": 1000,
              "title": "Le gratin des dunes",
              "category_id": 2,
              "description": "Description bidon"
          },
          "Tarte aux myrtilles": {
              "price": 350,
              "title": "Tarte aux myrtilles",
              "category_id": 5,
              "description": "Description bidon"
          },
          "Moelleux au chocolat": {
              "price": 250,
              "title": "Moelleux au chocolat",
              "category_id": 5,
              "description": "Description bidon"
          },
          "Penne à la syracuse": {
              "price": 750,
              "title": "Penne à la syracuse",
              "category_id": 2,
              "description": "Escalope, champignons, crème fraîche"
          },
          "Penne quatre fromages": {
              "price": 700,
              "title": "Penne quatre fromages",
              "category_id": 2,
              "description": "Crème, quatre fromages"
          },
          "Tarte aux poires chocolat": {
              "price": 250,
              "title": "Tarte aux poires chocolat",
              "category_id": 5,
              "description": "Description bidon"
          },
          "Escalope panée fromagère": {
              "price": 900,
              "title": "Escalope panée fromagère",
              "category_id": 2,
              "description": "Description bidon"
          },
          "Escalope de veau (à la crème ou au poivre)": {
              "price": 1100,
              "title": "Escalope de veau (à la crème ou au poivre)",
              "category_id": 2,
              "description": "Description bidon"
          }
      },
        website_id: 2,
      }
    ])
  }
}
