import superheroes from 'superheroes';
for(let i =0;i<5;i++){
    let random_number =  Math.floor(Math.random() * superheroes.length);
    console.log(random_number,'.',superheroes[random_number]);
}