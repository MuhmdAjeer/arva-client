/* tslint:disable */
/* eslint-disable */
/**
 * Coffee Shop Finder API
 * API documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Shop } from './shop';

/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    '_id': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    'price': number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    'stock': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Product
     */
    'images': Array<string>;
    /**
     * 
     * @type {Shop}
     * @memberof Product
     */
    'shop': Shop;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'category': CategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'updatedAt': string;
}

/**
    * @export
    * @enum {string}
    */
export enum CategoryEnum {
    Coffee = 'coffee',
    Drinks = 'drinks',
    Foods = 'foods'
}


