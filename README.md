# Disconnected

Runs a specified callback with custom data when a client disconnects (closes browser etc.). It works without authentication and you can pass any data that's possible with Meteor.subscribe().

## Usage

Client:    

```js
// client/example.js

Disconnected.assign(Session.get('someData'));
```

Server:    

```js
// server/example.js

Disconnected.onDisconnect = function(data) {
	// do something with data
	console.log(data);
};
```