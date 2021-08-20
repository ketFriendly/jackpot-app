# Dummy client

## Description

Dummy client used to interact with Jackpot Simulator.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start
```

## Usage

List of available routes at local server.

| Method | Route      |
| ------ | ---------- |
| GET    | /          |

### GET /

Registers the client machine and retrieves the machine id, with the optional query string (?win=true) for the forced win. Sends the received id in order to spin to try to win or force one.



