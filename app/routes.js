module.exports = function(app) {
	var mongoose = require('mongoose'),
    	Image = mongoose.model('Image');
    // Get Images from database
	app.get('/api/images', function(req, res) {
		Image.find(function(err, images) {
			if (err)
				res.send(err);

			res.json(images); // return all images in JSON format
		});
	});
	// Insert Image into database
	app.post('/upload', function(req,res){
		var image = new Image({ name: 'image2', picture: req.body.image});
		image.save(function (err) {
  			if (err) {
  				console.log(err);
  			}
		});
		res.send(200);
	});	
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};