# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Fri| Game Idea, Wireframes and Priority Matrix|
|Day 2: Mon| Pseudocode\Actual code\Basic Clickable Model|
|Day 3: Tue| Working Prototype |
|Day 4: Wed| App Completed / Slides |
|Day 5: Thur| Project Presentations |

## Project Description

This project is an anime image search using safebooru's api to pull data from their website. Users can select images and save them for later, adding comments if they would like. Users can also search through the tags that have been saved, coming with the images they saved and sort through their images that way. Users can also delete images they no longer like.

## Priority Matrix

![pic](http://res.cloudinary.com/andytham/image/upload/v1515439399/project2/tp.jpg)

## MVP

- CRUD
- user favorites (images and tags)
- image API
- database (images, favorites)
- Users can search tags for images, then add the images or tags into their saved/favorite
- Users can bring up their favorites and see what they liked

## POST MVP

- multiple image APIs
- OAuth
- Allow users to download

## Wireframes

![pic](http://res.cloudinary.com/andytham/image/upload/v1515439400/project2/wireframe.jpg)

## App Components

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| app.js | M | 1 hrs| 2 hrs | 2 hrs  |
| config | H | 1 hrs| 1 hrs | 1 hrs  |
| db | H | 2 hrs| 2 hrs | 2 hrs  |
| api | H | 10 hrs| 15 hrs | 15 hrs  |
| controllers | H | 10 hrs| 12 hrs | 12 hrs  |
| models | H | 3 hrs| 5 hrs | 5 hrs  |
| routes | H | 1 hrs| 3 hrs | 3 hrs  |
| views | H | 10 hrs| 20 hrs | 20 hrs  |
| css | H | 15 hrs| 20 hrs | 20 hrs  |

### Creating Items

Users select whatever images they like pulled from the API that are displayed on the view, and these selected images are then inserted into a database, housing all their saved images.

### Deleting Items

Users can delete images from their saved images, removing it from the database, along with the related tags database.

### Editing Items

Users can create comments for the images they saved, and edit them, updating it.

### Getting Items

Data is displayed on the view, pulling image links and comments from the database and displaying it.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Search | H | 2 hrs| 4 hrs | 4 hrs |
| Display Search | H | 4 hrs| 8 hrs | 8 hrs |
| Display Saved | H | 4 hrs| 5 hrs | 5 hrs |
| Tags | H | 2 hrs| 4 hrs | 4 hrs |
| Display Saved By Tags | M | 2 hrs| 3 hrs | 3 hrs |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Search | Search using API, could be used for similar image boards. |

## Additional Libraries

JQuery for one AJAX call.

## Code Snippet

```
imageController.create = (req,res) => {
  //return SELCT

  Image.grab({
    image: req.body.image
  })
  .then(image => {
    if(image == null){ //checks if image already exists in database
      Image.create({
        image: req.body.image,
        tags: req.body.tags
      })
      .then(image => {
        // console.log('successfully created an image', image)
          Safeboorutag.create({ //create tags after creating image in db
            image: req.body.image,
            tags: req.body.tags
          }, image.id)
          .then( testData => {
            console.log('test creation method works')

          })
          .catch(err => {
            console.log('test error', err)
            res.status(400).json(err);
          })
        })
      .catch(err => {
          res.status(400).json(err);
        })
    } else {
      console.log(image.image, "already exists")
    }
  })
  .catch(err => {
    console.log('test error', err)
    res.status(400).json(err);
  })
}

```
This code snippet is the controller method to push two different sets of data to two different database tables, one which require the other.

## Change Log

Auth no longer in the MVP because users tables does not fit requirement in using two databases and relating them together. Therefore Oauth is simply the POST MVP.

## Issues and Resolutions
**ERROR**: View using POST method which requires a response or it will refuse connection, but wanting to stay on the page.
**RESOLUTION**: Use AJAX instead to make the call.

**ERROR**: Inputs don't count as flex items

**RESOLUTION**: Wrap them in a div

**ERROR**: Couldn't click on a div

**RESOLUTION**: Any element with a negative z-index will be unclickable, visible on top or not.

**ERROR**: Justify-content doing nothing

**RESOLUTION**: Margin sometimes mess it up, use padding instead.

**ERROR**: Can't push to two databases at the same time, when one relies on the other.

**RESOLUTION**: Nest the model methods inside the controller method, or use next();
