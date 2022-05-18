import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
// import { Request, Response, NextFunction } from 'express'
import TodoModel from '../../../database/models/todoModel';
import { Response } from 'superagent';
// import TodoController from '../../../api/controllers/todoController';
// import TodoService from '../../../api/services/todoService';
import { ITodo } from '../../../interfaces/todoInterfaces';
import {
  allTodos,
  toodsSortedBySubject,
  toodsSortedByDescription,
  toodsSortedByCreatedAt,
  toodsSortedByStatus,
  doneTodos,
  inProgressTodos,
  pendingTodos,
  insertedTodo,
  incompleteBody,
  todoByPk,
} from '../../__mocks__/todoMocks';
import { app } from '../../../app';

chai.use(chaiHttp);

const { expect } = chai;

// const todoService = new TodoService();
// const todoController = new TodoController(todoService);

describe('(I&T Tests) TodoController ~ 1-Testing routes ', () => {
  let chaiHttpResponse: Response;

  describe('(Routes GET "/todos" and "/todos?sortBy") Testing method getAllTodos', () => {
    before(() => {
      sinon
        .stub(TodoModel, 'findAll')
        .resolves(allTodos as any);
    });

    after(() => {
      (TodoModel.findAll as sinon.SinonStub).restore();
    });

    it('Without sortBy query, returns status 200 and body containing all tasks unsorted', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/todos');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allTodos);
    });

    it('With sortBy="subject", returns status 200 and body containing sorted tasks by subject', async () => {
      (TodoModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(TodoModel, 'findAll')
        .resolves(toodsSortedBySubject as any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/todos')
        .query({ sortBy: 'subject' });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(toodsSortedBySubject);
    });

    it('With sortBy="description", returns status 200 and body containing sorted tasks by description', async () => {
      (TodoModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(TodoModel, 'findAll')
        .resolves(toodsSortedByDescription as any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/todos')
        .query({ sortBy: 'description' });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(toodsSortedByDescription);
    });

    it('With sortBy="createdAt", returns status 200 and body containing sorted tasks by createdAt', async () => {
      (TodoModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(TodoModel, 'findAll')
        .resolves(toodsSortedByCreatedAt as any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/todos')
        .query({ sortBy: 'createdAt' });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(toodsSortedByCreatedAt);
    });

    it('With sortBy="status", returns status 200 and body containing sorted tasks by status', async () => {
      (TodoModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(TodoModel, 'findAll')
        .resolves(toodsSortedByStatus as any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/todos')
        .query({ sortBy: 'status' });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(toodsSortedByStatus);
    });
  });

  describe('(Routes GET "/todos/:status") Testing method getTodosByStatus', () => {
    before(() => {
      sinon
        .stub(TodoModel, 'findAll')
        .resolves(doneTodos as any);
    });

    after(() => {
      (TodoModel.findAll as sinon.SinonStub).restore();
    });

    it('Returns status 200 and only tasks with status "done"', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/todos/done')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(doneTodos);
    });

    it('Returns status 200 and only tasks with status "inProgress"', async () => {
      (TodoModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(TodoModel, 'findAll')
        .resolves(inProgressTodos as any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/todos/done')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(inProgressTodos);
    });

    it('Returns status 200 and only tasks with status "pending"', async () => {
      (TodoModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(TodoModel, 'findAll')
        .resolves(pendingTodos as any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/todos/done')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(pendingTodos);
    });
  });

  describe('(Route POST "/todos") Testing method insertNewTodo', () => {
    before(() => {
      sinon
        .stub(TodoModel, 'create')
        .resolves(insertedTodo as any);
    });

    after(() => {
      (TodoModel.create as sinon.SinonStub).restore();
    });

    it('Returns status 201 and a json containing inserted task', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/todos')
        .send({
          "subject": "Teste2",
          "description": "Testing insert new todo",
          "status": "pending",
          "userId": 1,
        })

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(insertedTodo);
    });

    it('Returns status 400 and a explanatory message if body is incomplete', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/todos')
        .send({
          "subject": "Teste2",
          "description": "Testing insert new todo",
          "status": "pending",
        })

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body.message).to.be.equal(incompleteBody);
    });
  });

  describe('(Route PATCH "/todos/:id") Testing method updateTodo', () => {
    before(() => {
      sinon
        .stub(TodoModel, 'findByPk')
        .resolves(todoByPk as any);

        sinon
        .stub(TodoModel, 'update')
        .resolves();
    });

    after(() => {
      (TodoModel.findByPk as sinon.SinonStub).restore();
      (TodoModel.update as sinon.SinonStub).restore();
    });

    it('Returns only status 204 when task was updated sucessfully', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .patch('/todos/1')
        .send({ newPropertyInfo: 'new info'})
        .query({ todoProperty: 'subject' });

      expect(chaiHttpResponse.status).to.be.equal(204);
    });

    it('Returns status 400 and a explanatory message if body not exists', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .patch('/todos/1')
        .query({ todoProperty: 'subject' });

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body.message).to.be.equal('Body must contain a property "newPropertyInfo"');
    });

    it('Returns status 400 and a explanatory message if query params not exists', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .patch('/todos/1')
        .send({ newPropertyInfo: 'new info'});

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body.message).to.be.equal('Query must contain a property "todoProperty"');
    });

    it('Returns status 404 and a explanatory message if todo not exists', async () => {
      (TodoModel.findByPk as sinon.SinonStub).restore();

      sinon
        .stub(TodoModel, 'findByPk')
        .resolves(null as any);

      chaiHttpResponse = await chai
        .request(app)
        .patch('/todos/1')
        .send({ newPropertyInfo: 'new info'})
        .query({ todoProperty: 'subject' });

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body.message).to.be.equal('Task not found');
    });
  });

  describe('(Route DELETE "/todos/:id") Testing method deleteTodo', () => {
    before(() => {
      sinon
        .stub(TodoModel, 'findByPk')
        .resolves(todoByPk as any);

        sinon
        .stub(TodoModel, 'destroy')
        .resolves();
    });

    after(() => {
      (TodoModel.findByPk as sinon.SinonStub).restore();
      (TodoModel.destroy as sinon.SinonStub).restore();
    });

    it('Returns only status 204 when task was deleted sucessfully', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .delete('/todos/1');

      expect(chaiHttpResponse.status).to.be.equal(204);
    });

    it('Returns only status 404 when task was deleted sucessfully', async () => {
      (TodoModel.findByPk as sinon.SinonStub).restore();

      sinon
        .stub(TodoModel, 'findByPk')
        .resolves(null as any);

      chaiHttpResponse = await chai
        .request(app)
        .delete('/todos/1');

      expect(chaiHttpResponse.status).to.be.equal(404);
    });
  });
});