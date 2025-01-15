


const { Pool } = require('pg');
jest.mock('pg'); // Mock du module `pg`

describe('Database Connection', () => {
  let poolMock;

  beforeEach(() => {
    poolMock = {
      on: jest.fn(),
      connect: jest.fn(),
      query: jest.fn(),
      end: jest.fn(),
    };
    Pool.mockImplementation(() => poolMock);
  });

  test('should log connection status when connected', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const pool = require('./path/to/your/db.js');

    expect(Pool).toHaveBeenCalledWith({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });

    // Simuler l'événement `connect`
    poolMock.on.mock.calls.find(([eventName]) => eventName === 'connect')[1]();

    expect(logSpy).toHaveBeenCalledWith('Connected to the database');
    logSpy.mockRestore();
  });

  test('should log error on database connection failure', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const pool = require('./path/to/your/db.js');

    const testError = new Error('Connection failed');
    // Simuler l'événement `error`
    poolMock.on.mock.calls.find(([eventName]) => eventName === 'error')[1](testError);

    expect(errorSpy).toHaveBeenCalledWith('Error connecting to the database:', testError);
    errorSpy.mockRestore();
  });

  test('should correctly call the query method on the pool', async () => {
    const pool = require('./path/to/your/db.js');
    const queryResult = { rows: [{ id: 1, name: 'Test' }] };

    poolMock.query.mockResolvedValueOnce(queryResult);

    const result = await pool.query('SELECT * FROM test_table');

    expect(poolMock.query).toHaveBeenCalledWith('SELECT * FROM test_table');
    expect(result).toBe(queryResult);
  });
});
