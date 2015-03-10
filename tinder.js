
       

	
                var fbtoken = "";
                var fbId = "";
				

				
                 jQuery.ajax({
				 	url: "https://api.gotinder.com/auth",
                    type: "POST",
                    async: false,
                    headers: {"UserAgent": "Tinder/3.0.2 (iPhone; iOS 7.1; Scale/2.00)"},
                    data: {
                     "facebook_token": fbtoken,
                     "facebook_id": fbId
                    },
                    
                    complete: function(data) {
					var Dataparse = JSON.parse(data.responseText);
                        console.log(Dataparse.token);
						//insert recs here
						
						jQuery.ajax({
				 	url: "https://api.gotinder.com/user/recs",
                    type: "POST",
                    async: false,
                    headers: {"UserAgent": "Tinder/3.0.2 (iPhone; iOS 7.1; Scale/2.00)",
								"X-Auth-Token" : Dataparse.token
								},
                    data: {
                     "limit": "40",
                    },
                    
                    complete: function(data) {
					var recsparse = JSON.parse(data.responseText);
					var i;
for (i = 0; i < recsparse.results.length; i++) {
                      //  console.log(recsparse.results[i]._id);

						//start liker
						jQuery.ajax({
				 	url: "https://api.gotinder.com/like/" + recsparse.results[i]._id ,
                    type: "GET",
                    async: false,
                    headers: {"UserAgent": "Tinder/3.0.2 (iPhone; iOS 7.1; Scale/2.00)",
								"X-Auth-Token" : Dataparse.token
								},
							complete: function(data)
							{
							console.log(data.responseText);
							}
								});
						
						//end liker
						
						
						}
                    },
                });
						//end recs
						
						
						
						
                    },
                });
                             