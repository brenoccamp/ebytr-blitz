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
  toodsSortedByStatus
} from '../../__mocks__/todoMocks';
import { app } from '../../../app';

chai.use(chaiHttp);

const { expect } = chai;

// const todoService = new TodoService();
// const todoController = new TodoController(todoService);

describe('(I&T Tests) TodoController ~ 1-Testing routes ', () => {
  let chaiHttpResponse: Response;

  describe('(Routes GET "/todos" and "/todos?sortBy) Testing method getAllTodos', () => {
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
});