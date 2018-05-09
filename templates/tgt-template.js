/**
 * <%= controllerName %>
 *
 * @description :: Server-side logic for managing <%= modelName %>
 * @help 		:: See http://links.sailsjs.org/docs/controllers
 */

declare var sails: any;

export function hello(req: any, res: any, next: Function): any {
  res.status(200).send('Hello Controller');
}
