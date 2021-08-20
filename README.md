# Progressive Jackpot Simulator

## Description

Application that simulates slot machines server using Express.js, Sequelize and PostgreSQL. Written in CommonJS.
It uses seed data to create and populate the db. 

Documentation for the dummy client can be found [here](./clients/README.md).

## Configuration

You can configure levels and clients in the seed files (client.seed.json and level.seed.json). You can also configure client's bets and probablility to win a jackpot in the constants.js file. 

## Installation

```bash
$ npm install
```

## Running the app

Create the database (PostgreSQL) and adjust the .env file (see .env.example).

```bash
$ npm start
```

## Usage

List of available routes at local server.

| Method | Route      |
| ------ | ---------- |
| POST   | /spin      |
| POST   | /force-win |
| GET    | /          |

### POST /spin

Sends the users bet value and id of the machine. Returns a message informing the user if he won, and how much.

```json
{
  "clientId": "client"
  "bet": 5 | 10 | 20 | 50
}
```

### POST /force-win

Forces a win for the user on the certain machine.

```json
{
  "clientId": "client"
  "bet": 5 | 10 | 20 | 50
}
```

### GET /

Registers machine, returns an id.

### Left to do:

- Saving data before process ends
- Error handling
- Returning more detailed responses
