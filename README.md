# PhotoLabs 📷
PhotoLabs is a client-side application developed using the React. It provides users with the ability to browse and interact with an extensive collection of photos submitted by users under various categories. 

Initial project setup was forked from Lighthouse Labs starter code [found here](https://github.com/lighthouse-labs/photolabs-starter).

## Typical User Experience
PhotoLabs has set of core features available to users:

- Users can Like photos by pressing the `heart` icons
- Notification in the Top Right if user has any saved favourites
- Previewing images in original scale and quality
- Filtering photo listings by selected topic
- Light/Dark mode <i>`coming soon`</i>

### Tech Stack
- React
- JSX
- Babel
- Express
- Webpack
- SCSS
- Postgres

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Photolabs In Action 
#### Photolabs Landing page
![Landing Page](https://raw.githubusercontent.com/ChrisPytel/photolabs/main/resources/01_landing.JPG)
#### Users can favourite photos
![Favouriting Photos](https://raw.githubusercontent.com/ChrisPytel/photolabs/main/resources/02_favourites.JPG)
#### Filtering by topics, Here `Animals` was selected
![Filter by Animals topic](https://raw.githubusercontent.com/ChrisPytel/photolabs/main/resources/02_animals.jpg)
#### Opening a modal to view a full size photo
![Toggle Modal](https://raw.githubusercontent.com/ChrisPytel/photolabs/main/resources/04_modal.JPG)
#### Users can view similar photos to the selected image
![Similar photos in modal](https://raw.githubusercontent.com/ChrisPytel/photolabs/main/resources/05_similar_images.JPG)