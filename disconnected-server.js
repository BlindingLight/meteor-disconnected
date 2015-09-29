Disconnected = Disconnected || {
	onDisconnect: function(data) {
		console.log('Disconnected with data: ' + data);
	}
};

Meteor.publish('_disconnected', function(data) {
	this._session.socket.on('close', Meteor.bindEnvironment(function() {
		Disconnected.onDisconnect(data);
	}));

	return this.ready();
});