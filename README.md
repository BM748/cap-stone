# cap-stone
This App is social media website, artist can post there works, and be discover by patron for jobs or being ccommissioned.
# Installtion 
some requiments in order to have the project to work is
React
npm install React
Bootstrap 
MUI
npm install @mui/material @emotion/react @emotion/styled
https://user-images.githubusercontent.com/135775380/284011720-38fb2517-d487-4c86-81a7-d185721df3ab.png
npm install @mui/icons-material
Nodemon
npm nodemon

Axios
npm install axios
#Functions Avabile 
people can create an account as artist or user. After creating it the person can log in based off the selection they choose. There's a search where it will direct them to a profile page name Bo. For testing purposes the user/artist can upload photos where it will produce as a slide. in the bottom of page the user can leave a review/comment.
https://user-images.githubusercontent.com/135775380/284011235-511dac20-69dd-4c51-97f8-ba759dfddaad.png

# Bugs at the moment
One major bug is on App.Jsx. There are two sections of code, where one is commented and one is not. Top section of the code is for the login function where the token is set, but if the page is refresh it will go back to the log in screen. https://user-images.githubusercontent.com/135775380/284011116-49622852-b99a-43dd-80b3-0f298bff4565.png
the second section of code is where the login token is set to a local storage and will delete after closing the tab. but the issue with the code is that after impleting it. https://user-images.githubusercontent.com/135775380/284011135-ca88781d-aece-4559-bff4-a6de0be8b062.png 
It moves all ui elements to the left side of screen. As of now there's two section code to comment in and out in order to test other functions until finding a solution for the bug.

# Local host run
front end: local:5081 
npm run /cap-stone\client npm run dev

# Backend run
/cap-stone\npm start

