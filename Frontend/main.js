function sendPosts() {
    const titleValue = document.getElementById("title").value;
    const bodyValue = document.getElementById("body").value;

    const postData = {
        'title': titleValue,
        'body': bodyValue
    }

    fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .catch(error => console.error(error));
}

function updatePosts() {
    let postsList = {}
    fetch('http://localhost:5000/posts')
        .then(response => response.json()).then()
        .then(data => {
            postsList = data

            const postsDiv = document.getElementById('postsDiv')
            postsDiv.innerHTML = '';
        
            for (i in postsList) {
                const newBody = document.createElement('p');
                const newTitle = document.createElement('h2');
        
                newBody.innerHTML = postsList[i].body
                newTitle.innerHTML = postsList[i].title
        
                postsDiv.appendChild(newTitle);
                postsDiv.appendChild(newBody);
            }
        })
        .catch(error => console.error(error));
}