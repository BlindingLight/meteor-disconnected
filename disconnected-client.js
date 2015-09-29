Disconnected = Disconnected || {
	assign: function(data) {
		Meteor.subscribe('_disconnected', data);
	}
};