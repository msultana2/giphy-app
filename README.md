# ReactJS & JavaScript

Project: This is a simple React application to search for gifs using the giphy api. The application search for gifs as you type. The gifs animate when you hover over it. Its also a responsive design for best user experience.

Explanation: There are total 4 components (App.js, SearchBar.js, GifList.js & GifImage.js) including statefull, stateless & pure component.

1. SearchBar(child component) takes user input to search gifs. Here I passed data from child to parent(App.js).

2. App.js works as parent component and pass data down flow to child component GifList.js. I made the API call here inside the 'handleInputChange' method and updated the state 'gifs' to hold the data. Then pass it to functional component GifList just to display the gifs in the browser.

3. I used 2 types image to control hover over image. One is static image 'images.downsized_still.url'and otherone is 'images.downsized.url' to display animation.
I made a custom image component(GifImage.js) that has above 2 images. And place them when mouse enter / leave the image.

4. App.css is used for custom styles and to make the page responsive design.

Cloud Solution: I deployed the react-create-app on github-pages. But functionally its not working because we can't fetch insecure (http) resources from a secure (https) origin.
It's called mixed-content and browsers block it for security reasons. Here is the link of github.io:

https://msultana2.github.io/giphy-app/
