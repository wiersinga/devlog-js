console.log("exo-7");

console.log(jsonDatas);


    for (var article  of jsonDatas){
        console.log(article);
    }
var traduction = {
    videoGame: "jeux Videos",
    car:"voiture",
    house:"maison",
    game:"jeu",
    show:"spectacle",
}
    traduction['newKey']='';
    console.log(traduction);

    for (let i=0; i< jsonDatas.length; i++){
        jsonDatas[i]['translateWord']=traduction[jsonDatas[i].type];
}
console.log(jsonDatas);

document.querySelector(".articleList");
let articleListElement = document.querySelector(".articleList");
console.log(articleListElement);
articleListElement.innerHTML += `
    <h2 class="article-title">${ jsonDatas[0].type}</h2>
    <p>jcgqkjsgqskgfklqsj</p>
    <p>${ 1 + 3}</p>
`;

console.log(`J'ai ${ 42 + 2 } ans`)

