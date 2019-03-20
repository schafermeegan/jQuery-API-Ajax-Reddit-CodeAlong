
// // API EXERCISE 1
// // Skills: API’s, jQuery’s get method
// // Task: Create a webpage that displays the posts from the AWW Subreddit.
// // Build Specifications
// // Use jQuery to request data from the https://www.reddit.com/r/aww/.json API.
// // Display the results on the page.
// // At a minimum, include a title and thumbnail image.

// // Extended Challenges
// // Only show the first ten results.
// // Include a link to the original post (use permalink)

//Resourses that I used: Reached out to classmates, Jessica and Hannah.  API in the text book page 388, and websites, https://api.jquery.com/jquery.get/   https://www.google.com/amp/s/amp.reddit.com/r/redditdev/comments/a22152/reddit_json_data/

$(()=> {

    $.get('https://www.reddit.com/r/aww/.json', (data) => {
      console.log(data);
      let posts;
      let thumbnails;
      let permalink;
      $.each(data.data.children, (i) => {
        
        posts = (data.data.children[i].data.title);
        thumbnails = (data.data.children[i].data.thumbnail);
        permalink = (data.data.children[i].data.permalink);

  
        $('body').append(`<div><a href="http://reddit.com/${permalink}"><img src="${thumbnails}"></img>${posts}</a></div>`);
        return i <10;

      });
    });
});



// $(() => {

//     $.get(`https://www.reddit.com/r/aww/.json`, (data) => {
//         console.log(data);
//         // console.log(data.title);
//         // console.log(data.language);
//         // console.log(data.posts.length);
//     });
// });

// // $(() => {

// //     $.get(`https://www.reddit.com/r/aww/.json`, (data) => {
// //         console.log(data.title);
// //         console.log(data.language);
// //         console.log(data.posts.length);
// //         console.log(data.posts[0].title);

// //         console.log(`Posts:`);
// //         data.posts.forEach((posts) => {
// //             console.log(post.title);

// //             console.log(`Tags:`);
// //             post.tags.forEach((tag) => {
// //                 console.log(tag);
// //             });
// //         });
// //     });
// // });