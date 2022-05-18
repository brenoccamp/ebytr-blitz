// import * as chai from 'chai';
// import * as sinon from 'sinon';
// // import chaiHttp = require('chai-http');
// import { Request, Response, NextFunction } from 'express'
// import TodoController from '../../../api/controllers/todoController';
// import TodoService from '../../../api/services/todoService';
// import { ITodo } from '../../../interfaces/todoInterfaces';
// import { allTodos } from '../../__mocks__/todoMocks';
// // import { app } from '../../../app';

// // chai.use(chaiHttp);

// const { expect } = chai;

// const todoService = new TodoService();
// const todoController = new TodoController(todoService);

// describe('(Todo Controller) 1 - Testing todoController ', () => {
//   let req = {} as Request;
//   let res = {} as Response;
//   function next() {};

//   describe('(Todo methods) Testing method getAllTodos', () => {
//     before(() => {
//       res.status = sinon.stub().resolves(res);
//       res.json = sinon.stub().resolves();

//       sinon.stub(todoService, 'getAllTodos').resolves(allTodos);
//     });

//     after(() => {
//       (todoService.getAllTodos as sinon.SinonStub).restore();
//     });

//     it('', async () => {
//       await todoController.getAllTodos(req, res, next);

//       expect(res.status).to.be.have.been.calledWith(200);
//       // expect(chaiHttpResponse.body).to.be.deep.equal(allTodos);
//     });
//   });
// });