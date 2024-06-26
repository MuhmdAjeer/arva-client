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
import { Product } from './product';

/**
 * 
 * @export
 * @interface Shop
 */
export interface Shop {
    /**
     * 
     * @type {string}
     * @memberof Shop
     */
    '_id': string;
    /**
     * 
     * @type {string}
     * @memberof Shop
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Shop
     */
    'location': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Shop
     */
    'images': Array<string>;
    /**
     * 
     * @type {Array<Product>}
     * @memberof Shop
     */
    'products': Array<Product>;
}

