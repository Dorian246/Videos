const searchForm = document.getElementById("search-form");
		const videoContainer = document.getElementById("video-container");
		searchForm.addEventListener("submit", function(event) {
			event.preventDefault(); 
			
		
			const searchValue = document.getElementById("search").value;
			
			
			const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAMR5PSpbs9ZjSWmdyl2OJnnT-3c6YqKMA&part=snippet&maxResults=5&q=${searchValue}`;
			fetch(apiUrl)
				.then(response => response.json())
				.then(data => {
					
					videoContainer.innerHTML = "";
					
					
					data.items.forEach(item => {
						const videoId = item.id.videoId;
						const videoTitle = item.snippet.title;
						const videoDescription = item.snippet.description;
						const videoThumbnail = item.snippet.thumbnails.medium.url;
						
						const videoElement = `
							<div>
								<h3>${videoTitle}</h3>
								<p>${videoDescription}</p>
								<iframe width="320" height="240" src="https://www.youtube.com/embed/${videoId}" frameborder="0"></iframe>
							</div>
						`;
						
						videoContainer.innerHTML += videoElement;
					});
				})
				.catch(error => console.log(error));
		});