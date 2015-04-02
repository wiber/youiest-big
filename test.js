var toUser = {
	  "_id": "nicolsondsouza",
	  "inbox": [],
	  "outbox": [],
	  "follow": []
	};
var fromUser = {
  "_id": "eliasmoosman",
  "inbox": [],
  "outbox": [],
  "follow": []
}
DummyData = {
  "_id": "mTFJJYEMHscg62HdP",
  "from_user": fromUser._id,
  "to_user": toUser._id,
  "picture_low": "http://i.imgur.com/DM4ZEp8.jpg"
}

if(Meteor.isServer){
	Meteor.publish(null,function(){
		return W.find({});
	});
	Meteor.publish(null,function(){
		return WI.find({});
	});

	WI.remove({});
	W.remove({});

	

	Meteor.users.insert(fromUser);
	Meteor.users.insert(toUser);

	Unionize.connect(DummyData);
}
if(Meteor.isClient){
	Tinytest.add("big - Check if data and DOM there",function(test,next){
		Session.set("imageId",DummyData._id);
		// setTimeout(function(){
		var DomElement = React.renderComponentToString(Big.big(null))
		// console.log(DomElement.match("DM4ZEp8")[0])
		test.equal(DomElement.match("DM4ZEp8")[0],"DM4ZEp8", "didn't found image");
		// if(next)
		// 	next();
		// },1000);
	});
}
