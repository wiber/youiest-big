Meteor.publish(null,function(){
	return Recommend.find({});
});