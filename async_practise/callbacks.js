const posts = [{title: "Top 10 books" },{title :"Top 20 books"}];
console.log("coming")

function getPosts(){
    setTimeout(()=>{
        let item = "";
        posts.forEach((data)=>{
            item +=`<li>${data.title}</li>`
        });
        document.body.innerHtml = item;
    },1000)
}
function CreatePosts(){
    setTimeout(()=>{
        posts.push({title: "Top 30 books"});
    },2000)
}
getPosts();
createPosts();