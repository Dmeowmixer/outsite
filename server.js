const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/locations', (req, res) => {
  return res.json(mockData);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);


const mockData = [
      {
        id: "sc1",
        name: "Pleasure Point",
        city: "Santa Cruz",
        country: "US",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 8,
        available: true
      }, {
        id: "sc2",
        name: "Green House",
        city: "Santa Cruz",
        country: "US",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 5,
        available: false
      }, {
        id: "sc3",
        name: "West Cliff",
        city: "Santa Cruz",
        country: "US",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 5,
        available: false
      }, {
        id: "sc4",
        name: "Canggu",
        city: "Bali",
        country: "Indonesia",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 9,
        available: true
      }, {
        id: "sc5",
        name: "Chile",
        city: "Santiago",
        country: "Chile",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 9,
        available: true
      }, {
        id: "sc6",
        name: "Chile",
        city: "Santiago",
        country: "Chile",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 9,
        available: true
      }, {
        id: "sc7",
        name: "Chile",
        city: "Santiago",
        country: "Chile",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 9,
        available: true
      }, {
        id: "sc8",
        name: "Chile",
        city: "Santiago",
        country: "Chile",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 9,
        available: false
      }, {
        id: "sc9",
        name: "West Cliff",
        city: "Santa Cruz",
        country: "US",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 5,
        available: false
      }, {
        id: "sc10",
        name: "West Cliff",
        city: "Santa Cruz",
        country: "US",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 5,
        available: false
      }, {
        id: "sc11",
        name: "West Cliff",
        city: "Santa Cruz",
        country: "US",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 5,
        available: false
      }, {
        id: "sc12",
        name: "West Cliff",
        city: "Santa Cruz",
        country: "US",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 5,
        available: false
      }, {
        id: "sc13",
        name: "West Cliff",
        city: "Santa Cruz",
        country: "US",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 5,
        available: false
      }, {
        id: "sc14",
        name: "Chile",
        city: "Santiago",
        country: "Chile",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 9,
        available: true
      }, {
        id: "sc15",
        name: "Chile",
        city: "Santiago",
        country: "Chile",
        image: "https://uploads-ssl.webflow.com/5ab30f883c0d5f3ebc626470/5c00683b93af77a8fc105200_ny-header.jpg",
        numberOfBeds: 9,
        available: false
      }
    ]