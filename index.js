const perguntas = [
    {
      pergunta: "Qual é a função usada para imprimir algo no console?",
      respostas: ["print()",
                  "log()",
                  "console()"
                  ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador usado para comparar valores e tipos em JavaScript?",
      respostas: ["==",
                  "===",
                  "!="
                  ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: ["5",
                  "32",
                  "Erro"],
      correta: 1
    },
    {
      pergunta: "Qual é o método utilizado para remover o último elemento de um array em JavaScript?",
      respostas: ["pop()",
                  "push()",
                  "remove()"],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar variáveis em JavaScript?",
      respostas: ["var",
                  "let",
                  "const"],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar um elemento pelo seu ID?",
      respostas: ["getElementById()",
                  "querySelector()",
                  "getById()"],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      respostas: ["Remove um evento",
                  "Adiciona um evento",
                  "Substitui um evento"],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para arredondar um número para o inteiro mais próximo?",
      respostas: ["Math.round()",
                  "Math.ceil()",
                  "Math.floor()"],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
      respostas: ["// Este é um comentário",
                  "' Este é um comentário",
                  "<!-- Este é um comentário -->"],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
      respostas: ["parseInt()",
                  "convertToNumber()",
                  "toNumber()"],
      correta: 0
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template= document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
  
  //clonar as perguntas
    const quizItem = template.content.cloneNode(true)
    //aplica o conteúdo das perguntas no modelo html
    quizItem.querySelector('h3').textContent= item.pergunta
     
  //loop ou laço de repetição
  
     for(const resposta of item.respostas){
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', "pergunta-" + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => { const estaCorreta = event.target.value == item.correta
       corretas.delete(item)
          if(estaCorreta) { 
            corretas.add(item)
  
          }
  
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
             }
  
              
  
      quizItem.querySelector('dl').appendChild(dt)
     }
     quizItem.querySelector('dl dt').remove()
  
  
  
  
  
  
  
  
  
    quiz.appendChild(quizItem)
  }
  
    
  
    