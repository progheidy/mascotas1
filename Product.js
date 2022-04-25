/**
 * Product Class
 */
export class Product {
  /**
   *
   * @param {string} name Nombre del producto
   * @param {number} price Precio del producto
   * @param {number} year El año de creación del producto
   */
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}
