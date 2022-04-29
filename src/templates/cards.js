{/* <div class="card">
  <div class="card-img-top">
    <img src="{{sprites.front_default}}" alt="{{name}}">
  </div>
  <div class="card-body">
    <h2 class="card-title">Имя: {{name}}</h2>
    <p class="card-text">Вес: {{weight}}</p>
    <p class="card-text">Рост: {{height}}</p>

    <p class="card-text"><b>Умения</b></p>
    <ul class="list-group"></ul>
    {{#each abilities}}
      <li class="list-group-item">{{ability.name}}</li>
    {{/each}}
    </ul>
  </div>
</div> */}


export default function template({name, weight, height, sprites:{front_shiny}} ){
  return `<div class="card">
  <div class="card-img-top">
    <img src="${front_shiny}" alt="${name}">
  </div>
  <div class="card-body">
    <h2 class="card-title">Имя: ${name}</h2>
    <p class="card-text">Вес: ${weight}</p>
    <p class="card-text">Рост: ${height}</p>

    <p class="card-text"><b>Умения</b></p>
  </div>
</div>`
}