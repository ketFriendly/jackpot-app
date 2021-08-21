# Progressive Jackpot Simulator

## Description

Application that simulates slot machines server using Express.js, Sequelize and PostgreSQL. Written in CommonJS.
It uses seed data to create and populate the db.

Documentation for the dummy client can be found [here](./clients/README.md).

## Configuration

You can configure levels and clients in the seed files (client.seed.json and level.seed.json). You can also configure client's bets and probablility to win a jackpot in the constants.js file. client_server

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
  "client_server": "client"
  "bet": 5 | 10 | 20 | 50
}
```

### POST /force-win

Forces a win for the user on the certain machine.

```json
{
  "client_server": "client"
  "bet": 5 | 10 | 20 | 50
}
```

### GET /

Registers machine, returns an id.

## Models

You can find the client model [here](./src/db/models/client.model.js)


| clients           |
| ----------------- |
| uuid              |
| moneyIn           |
| moneyOut          |
| probabilityForWin |

You can find the level model [here](./src/db/models/level.model.js)

| levels          |
| --------------- |
| uuid            |
| type            |
| lowerBoundary   |
| seed            |
| actualAmount    |
| displayedAmount |

### Left to do:

- Saving data before process ends
- Error handling
- Returning more detailed responses
- Model validation
