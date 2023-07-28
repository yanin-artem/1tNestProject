import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/categories (GET)', () => {
    return request(app.getHttpServer())
      .get('/categories')
      .expect(200)
      .expect([]);
  });

  it('/categories (POST)', () => {
    return request(app.getHttpServer())
      .post('/categories')
      .send({ name: '' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          }),
        );
      });
  });

  it('/categories (GET)', () => {
    return request(app.getHttpServer())
      .get('/categories')
      .expect(200)
      .expect([
        {
          id: 1,
          name: '',
        },
      ]);
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer()).get('/products').expect(200).expect([]);
  });

  it('/products (POST)', () => {
    return request(app.getHttpServer())
      .post('/products')
      .send({
        image: '',

        name: '',

        price: 1000,

        available: true,

        category: null,

        about: '',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(Number),

            available: expect.any(Boolean),

            category: null,

            about: expect.any(String),
          }),
        );
      });
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect([
        {
          id: 1,
          image: '',

          name: '',

          price: 1000,

          available: true,

          category: null,

          about: '',
        },
      ]);
  });

  it('/product-in-cart (GET)', () => {
    return request(app.getHttpServer())
      .get('/product-in-cart')
      .expect(200)
      .expect([]);
  });

  it('/product-in-cart (POST)', () => {
    return request(app.getHttpServer())
      .post('/product-in-cart')
      .send({ product: null, cart: null })
      .expect(401);
  });

  it('/product-in-cart (GET)', () => {
    return request(app.getHttpServer()).get('/product-in-cart').expect(401);
  });

  it('/auth/register (GET)', () => {
    return request(app.getHttpServer())
      .get('/auth/register')
      .expect(200)
      .expect([]);
  });

  it('/auth/register (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: '',
        fullname: '',
        password: '',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            email: expect.any(String),
            fullname: expect.any(String),
            password: expect.any(String),
          }),
        );
      });
  });

  it('/users/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/1')
      .expect(200)
      .expect([
        {
          id: 1,
          email: '',
          fullname: '',
          password: '',
        },
      ]);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
