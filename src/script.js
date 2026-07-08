/* ==========================================================================
   Descobrindo Poços de Caldas — Quiz
   JavaScript puro (Vanilla), sem dependências externas.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. DADOS DO QUIZ
     Cada pergunta tem: texto, 4 alternativas, índice da correta (0-3),
     dica, nome do local e o arquivo de imagem (dentro de /images).
     ------------------------------------------------------------------ */
  var QUIZ_DATA = [
    {
      question: "Qual famoso ponto turístico leva os visitantes ao topo da Serra de São Domingos para ter uma vista panorâmica e visitar o Cristo Redentor?",
      options: ["Trem Maria Fumaça", "Teleférico", "Elevador Panorâmico", "Funicular"],
      correct: 1,
      hint: "É considerado um dos maiores do Brasil em extensão e suspende os passageiros por cabos de aço.",
      place: "Teleférico da Serra de São Domingos",
      image: "teleferico.webp"
    },
    {
      question: "As imponentes Thermas Antônio Carlos, inauguradas em 1931, são famosas pelo quê?",
      options: ["Suas pistas de patinação no gelo", "Seus banhos termais com águas sulfurosas", "Por abrigar o maior museu de arte moderna do estado", "Por ter sido a primeira estação de trem da cidade"],
      correct: 1,
      hint: "As pessoas frequentam o local há décadas para relaxar, cuidar da pele e da saúde em águas naturalmente quentes.",
      place: "Thermas Antônio Carlos",
      image: "thermas-antonio-carlos-1.png"
    },
    {
      question: "Onde fica localizado o famoso Relógio Floral, um dos grandes cartões-postais de Poços de Caldas?",
      options: ["Praça Pedro Sanches", "Parque Municipal", "Represa Bortolan", "Praça dos Macacos"],
      correct: 0,
      hint: "Fica na praça central mais movimentada da cidade, bem em frente ao imponente Palace Hotel.",
      place: "Relógio Floral",
      image: "relogio_floral_true.jpg"
    },
    {
      question: "Na Fonte dos Amores, além de apreciar a bela estátua esculpida por Giulio Starace e a natureza, qual animal é comumente visto interagindo com os turistas?",
      options: ["Capivara", "Macaco-prego", "Tucano", "Bicho-preguiça"],
      correct: 1,
      hint: "Eles são muito espertos, andam em bando e adoram pular de galho em galho pedindo comida.",
      place: "Fonte dos Amores",
      image: "fonte_dos_amores.jpg"
    },
    {
      question: "(Difícil) O Recanto Japonês é uma bela réplica de um jardim oriental. Qual é o nome da tradicional casa de chá de arquitetura nipônica que existe no local?",
      options: ["Sakura", "Kyoto", "Azumaya", "Hanami"],
      correct: 2,
      hint: "O nome começa com a letra 'A' e remete a um pavilhão ou caramanchão tradicional japonês.",
      place: "Recanto Japonês",
      image: "recanto_japa.jpg"
    },
    {
      question: "Qual atração natural possui três quedas d'água e pode ser vista através de um mirante ou por um nostálgico passeio de trenzinho?",
      options: ["Cachoeira Véu das Noivas", "Cascata das Antas", "Cachoeira da Rapadura", "Salto do Rio Verde"],
      correct: 0,
      hint: "O nome da cachoeira faz uma comparação entre a cor e a espuma da água com uma peça clássica de casamentos.",
      place: "Cachoeira Véu das Noivas",
      image: "veu_das_noivas.jpg"
    },
    {
      question: "(Difícil) A Pedra Balão é uma formação rochosa curiosa na Serra de São Domingos. Qual é a origem geológica dessa formação e de toda a região do planalto de Poços de Caldas?",
      options: ["Impacto de um grande meteoro", "Movimento abrupto de placas tectônicas (terremoto)", "Origem vulcânica (caldeira de um vulcão extinto)", "Erosão glacial da Era do Gelo"],
      correct: 2,
      hint: "A presença de águas sulfurosas quentes na cidade tem forte ligação com o passado magmático dessa região.",
      place: "Pedra Balão",
      image: "pedra_balao.jpg"
    },
    {
      question: "Para onde os turistas costumam ir em Poços de Caldas quando querem passear de lancha, jet-ski, escuna ou pedalinho?",
      options: ["Lago do Parque José Affonso Junqueira", "Represa Bortolan", "Rio Capivari", "Cascata das Antas"],
      correct: 1,
      hint: "Fica na entrada/saída da cidade (para quem vem do interior de SP) e possui vários quiosques e clubes náuticos na orla.",
      place: "Represa Bortolan",
      image: "bortolam.jpg"
    },
    {
      question: "O Palace Casino, um dos prédios de arquitetura mais deslumbrante do centro, deixou de funcionar como um cassino por qual motivo histórico?",
      options: ["Um grande incêndio na década de 50", "A proibição nacional dos jogos de azar no Brasil em 1946", "A crise financeira do café em 1929", "Uma ordem do governo de Minas Gerais por questões religiosas"],
      correct: 1,
      hint: "Foi uma decisão tomada por decreto pelo então presidente da República, Eurico Gaspar Dutra.",
      place: "Palace Casino",
      image: "palace casino.jpg"
    },
    {
      question: "O Calendário Floral de Poços de Caldas, que atrai muitos turistas para fotos, é atualizado com que frequência para mostrar a data correta?",
      options: ["Mensalmente", "Semanalmente", "Diariamente", "Apenas nos feriados"],
      correct: 2,
      hint: "Se você tirar uma foto lá hoje e voltar amanhã, ele já estará diferente.",
      place: "Calendário Floral",
      image: "calendario_floral.jpg"
    },
    {
      question: "Qual é a principal igreja católica de Poços de Caldas, que domina o centro da cidade e é famosa por sua bela arquitetura e afrescos interiores?",
      options: ["Basílica de Nossa Senhora da Saúde", "Catedral de São Dimas", "Igreja de São Benedito", "Santuário de Nossa Senhora Aparecida"],
      correct: 0,
      hint: "O título da santa padroeira faz todo o sentido em uma cidade procurada por pessoas em busca de curas através das águas termais.",
      place: "Basílica de Nossa Senhora da Saúde",
      image: "nossa_senhora_da_saude.jpg"
    },
    {
      question: "O Mercado Municipal de Poços de Caldas é parada obrigatória. O que os turistas mais buscam comprar nos corredores internos deste mercado?",
      options: ["Roupas de couro e lã pesada", "Queijos artesanais, doces em compota e cachaças locais", "Equipamentos eletrônicos e antiguidades", "Frutos do mar e peixes frescos"],
      correct: 1,
      hint: "São as iguarias mais famosas e cobiçadas da culinária de Minas Gerais.",
      place: "Mercado Municipal",
      image: "mercado_municipal.webp"
    },
    {
      question: "(Difícil) O imponente complexo que engloba o Palace Hotel, as Thermas Antônio Carlos e o Palace Casino foi planejado com forte inspiração em qual estilo europeu?",
      options: ["Gótico", "Modernismo Brasileiro", "Neoclassicismo / Ecletismo (inspirado em spas europeus)", "Barroco Mineiro"],
      correct: 2,
      hint: "A arquitetura reflete o período da 'Belle Époque' e a grandiosidade dos balneários da Europa do início do século XX.",
      place: "Palace Hotel",
      image: "palace_hotel.jpg"
    },
    {
      question: "A Fonte iluminada, conhecida por seus jatos d'água coloridos e iluminados à noite, está situada em qual praça de Poços de Caldas?",
      options: ["Praça dos Macacos", "Praça Pedro Sanches", "Praça Dom Pedro II", "Praça Tiradentes"],
      correct: 1,
      hint: "É a praça principal, bem no coração do complexo central e ao lado do Palace Hotel.",
      place: "Fonte Iluminada",
      image: "fonte_iluminada.webp"
    },
    {
      question: "(Difícil) O Museu Histórico e Geográfico de Poços de Caldas (conhecido pelo seu acervo de moedas, fotos e história local) funciona em um casarão histórico. Esse prédio pertenceu a quem no passado?",
      options: ["Ao ex-presidente Juscelino Kubitschek", "À Família Junqueira (sendo a antiga Villa Junqueira)", "A Dom Pedro II", "Ao Conde Silvio Penteado"],
      correct: 1,
      hint: "O sobrenome dessa família também batiza o mais famoso e arborizado parque do centro da cidade.",
      place: "Museu Histórico e Geográfico",
      image: "museo.jpg"
    },
    {
      question: "O Zoo das Aves é um dos atrativos ecológicos de Poços de Caldas. Qual é a característica principal deste zoológico?",
      options: ["Ele exibe apenas grandes felinos resgatados", "É focado exclusivamente na imersão e conservação de centenas de espécies de pássaros", "É um aquário subterrâneo de peixes de água doce", "Abriga primatas de todo o continente sul-americano"],
      correct: 1,
      hint: "O próprio nome do lugar já diz que os animais lá têm penas.",
      place: "Zoo das Aves",
      image: "zoo-_aves.jpg"
    },
    {
      question: "A Praça Dom Pedro II é muito famosa na cidade por suas fontes de águas sulfurosas que brotam quentes nas torneiras ao ar livre. Por qual nome popular ela é mais conhecida?",
      options: ["Praça do Relógio", "Praça das Águas", "Praça dos Macacos", "Praça do Coreto"],
      correct: 2,
      hint: "O apelido peculiar foi dado por conta dos animais que frequentemente descem das árvores vizinhas para interagir com os frequentadores.",
      place: "Praça dos Macacos",
      image: "placa_macacos.jpg"
    },
    {
      question: "(Difícil) A Cascata das Antas não é apenas uma atração natural. Ela abrigou uma importante construção histórica em ruínas na sua base. Que construção era essa?",
      options: ["A primeira usina hidrelétrica de Poços de Caldas", "A primeira fábrica de engarrafamento de água mineral do Brasil", "O primeiro palácio de verão do governo de Minas", "Uma antiga estação ferroviária de carga"],
      correct: 0,
      hint: "Foi inaugurada no final do século XIX para prover energia elétrica à cidade.",
      place: "Cascata das Antas",
      image: "cascata_antas.jpg"
    },
    {
      question: "Qual é o nome do monumento religioso, caracterizado por sua pequena capela com arquitetura de origem alemã, situado em um ponto alto e calmo da cidade?",
      options: ["Cristo Redentor da Zona Leste", "Santuário da Mãe Rainha Três Vezes Admirável de Schoenstatt", "Mosteiro Cisterciense", "Capela de Santa Cruz da Serra"],
      correct: 1,
      hint: "O nome é bem longo e faz referência a um famoso movimento apostólico mariano de origem europeia.",
      place: "Santuário da Mãe Rainha",
      image: "mae_rainha.jpg"
    },
    {
      question: "(Difícil) A estátua esculpida na 'Fonte dos Amores' retrata dois jovens abraçados. Segundo o imaginário popular e o poema de Ribeiro Couto que inspirou o local, o que essa obra representa?",
      options: ["O momento exato da fundação da cidade de Poços de Caldas", "Um amor trágico e impossível (semelhante a Romeu e Julieta)", "Dois irmãos que descobriram as propriedades curativas da água", "O primeiro casal de turistas a visitar as fontes da cidade"],
      correct: 1,
      hint: "A obra transmite uma ideia de romance melancólico, fuga e uma paixão que não podia ser vivida publicamente.",
      place: "Fonte dos Amores",
      image: "estatua_fonte_amores.jpeg"
    }
  ];

  var TOTAL = QUIZ_DATA.length;

  /* ------------------------------------------------------------------
     2. ESTADO
     ------------------------------------------------------------------ */
  var sessionQuestions = [];
  var TOTAL = 10; 

  var state = {
    current: 0,
    score: 0,
    answered: false
  };

  /* ------------------------------------------------------------------
     3. REFERÊNCIAS DOM
     ------------------------------------------------------------------ */
  var el = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),

    startScreen: document.getElementById('start-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    endScreen: document.getElementById('end-screen'),

    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn'),

    questionCounter: document.getElementById('question-counter'),
    scoreDisplay: document.getElementById('score-display'),
    progressTrack: document.getElementById('progress-track'),
    progressFill: document.getElementById('progress-fill'),

    questionBody: document.getElementById('question-body'),
    questionText: document.getElementById('question-text'),
    optionsGrid: document.getElementById('options-grid'),

    hintBtn: document.getElementById('hint-btn'),
    hintPanel: document.getElementById('hint-panel'),
    hintText: document.getElementById('hint-text'),

    feedbackBlock: document.getElementById('feedback-block'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackImageWrap: document.getElementById('feedback-image-wrap'),
    feedbackImage: document.getElementById('feedback-image'),
    feedbackImageCaption: document.getElementById('feedback-image-caption'),
    nextBtn: document.getElementById('next-btn'),

    endEmoji: document.getElementById('end-emoji'),
    endScore: document.getElementById('end-score'),
    endMessage: document.getElementById('end-message'),

    confettiLayer: document.getElementById('confetti-layer')
  };

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     4. UTILITÁRIOS
     ------------------------------------------------------------------ */
  function imageSrc(filename) {
    return encodeURI('images/' + filename);
  }

  function showScreen(target) {
    [el.startScreen, el.quizScreen, el.endScreen].forEach(function (screen) {
      if (screen === target) {
        screen.hidden = false;
        screen.classList.remove('screen--enter');
        // força reflow para reiniciar a animação
        void screen.offsetWidth;
        screen.classList.add('screen--enter');
      } else {
        screen.hidden = true;
      }
    });
  }

  /* ------------------------------------------------------------------
     5. TEMA CLARO / ESCURO
     ------------------------------------------------------------------ */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    el.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    el.themeToggle.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'
    );
  }

  el.themeToggle.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  /* ------------------------------------------------------------------
     6. RENDERIZAÇÃO DA PERGUNTA
     ------------------------------------------------------------------ */
  function renderQuestion() {
var q = sessionQuestions[state.current];
    state.answered = false;

    // Cabeçalho de progresso
    el.questionCounter.textContent = 'Pergunta ' + (state.current + 1) + ' de ' + TOTAL;
    el.scoreDisplay.textContent = '⭐ ' + state.score + ' pontos';
    var pct = Math.round((state.current / TOTAL) * 100);
    el.progressFill.style.width = pct + '%';
    el.progressTrack.setAttribute('aria-valuenow', String(state.current));
    el.progressTrack.setAttribute('aria-valuemax', String(TOTAL));

    // Pergunta
    el.questionText.textContent = q.question;

    // Alternativas
    el.optionsGrid.innerHTML = '';
    var letters = ['A', 'B', 'C', 'D'];
    q.options.forEach(function (optionText, index) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.setAttribute('data-index', String(index));
      btn.setAttribute('aria-label', letters[index] + ') ' + optionText);

      var letterSpan = document.createElement('span');
      letterSpan.className = 'option-letter';
      letterSpan.setAttribute('aria-hidden', 'true');
      letterSpan.textContent = letters[index];

      var textSpan = document.createElement('span');
      textSpan.className = 'option-text';
      textSpan.textContent = optionText;

      var iconSpan = document.createElement('span');
      iconSpan.className = 'option-icon';
      iconSpan.setAttribute('aria-hidden', 'true');

      btn.appendChild(letterSpan);
      btn.appendChild(textSpan);
      btn.appendChild(iconSpan);
      btn.addEventListener('click', function () { selectAnswer(index); });

      el.optionsGrid.appendChild(btn);
    });

    // Dica: reseta fechada
    el.hintPanel.classList.remove('is-open');
    el.hintBtn.setAttribute('aria-expanded', 'false');
    el.hintText.textContent = q.hint;

    // Mostra corpo da pergunta, esconde feedback
    el.questionBody.hidden = false;
    el.feedbackBlock.hidden = true;
  }

  /* ------------------------------------------------------------------
     7. DICA
     ------------------------------------------------------------------ */
  el.hintBtn.addEventListener('click', function () {
    var isOpen = el.hintPanel.classList.toggle('is-open');
    el.hintBtn.setAttribute('aria-expanded', String(isOpen));
    el.hintBtn.innerHTML = isOpen
      ? '<span aria-hidden="true">💡</span> Esconder Dica'
      : '<span aria-hidden="true">💡</span> Ver Dica';
  });

  /* ------------------------------------------------------------------
     8. RESPONDER
     ------------------------------------------------------------------ */
  function selectAnswer(selectedIndex) {
    if (state.answered) { return; }
    state.answered = true;

    var q = sessionQuestions[state.current];
    var isCorrect = selectedIndex === q.correct;
    var buttons = el.optionsGrid.querySelectorAll('.option-btn');

    buttons.forEach(function (btn) {
      var idx = Number(btn.getAttribute('data-index'));
      btn.disabled = true;

      if (idx === q.correct) {
        btn.classList.add('is-correct');
        btn.querySelector('.option-icon').textContent = '✓';
      } else if (idx === selectedIndex) {
        btn.classList.add('is-incorrect');
        btn.querySelector('.option-icon').textContent = '✗';
      } else {
        btn.classList.add('is-muted');
      }
    });

    if (isCorrect) {
      state.score += 1;
      el.scoreDisplay.textContent = '⭐ ' + state.score + ' pontos';
      launchConfetti();
    }

    window.setTimeout(function () { showFeedback(isCorrect, q); }, 650);
  }

  function showFeedback(isCorrect, q) {
    el.questionBody.hidden = true;
    el.feedbackBlock.hidden = false;
    el.feedbackBlock.classList.remove('screen--enter');
    void el.feedbackBlock.offsetWidth;
    el.feedbackBlock.classList.add('screen--enter');

    el.feedbackIcon.className = 'feedback-icon ' + (isCorrect ? 'is-correct' : 'is-incorrect');
    el.feedbackIcon.textContent = isCorrect ? '✓' : '✗';

    if (isCorrect) {
      el.feedbackTitle.textContent = 'Isso mesmo! 🎉';
      el.feedbackText.textContent = 'Você acertou! Veja a foto deste lugar incrível:';
      el.feedbackImageWrap.hidden = false;
      el.feedbackImage.src = imageSrc(q.image);
      el.feedbackImage.alt = 'Foto de: ' + q.place;
      el.feedbackImageCaption.textContent = q.place;
    } else {
      el.feedbackTitle.textContent = 'Não foi dessa vez';
      el.feedbackText.textContent = 'A resposta certa era: "' + q.options[q.correct] + '". Vamos para a próxima!';
      el.feedbackImageWrap.hidden = true;
      el.feedbackImage.src = '';
      el.feedbackImage.alt = '';
    }

    var isLast = state.current === TOTAL - 1;
    el.nextBtn.textContent = isLast ? 'Ver Resultado 🏁' : 'Próxima Pergunta';
    el.nextBtn.focus();
  }

  el.nextBtn.addEventListener('click', function () {
    state.current += 1;
    if (state.current >= TOTAL) {
      showEndScreen();
    } else {
      renderQuestion();
    }
  });

  /* ------------------------------------------------------------------
     9. CONFETE (reforço visual extra ao acertar)
     ------------------------------------------------------------------ */
  function launchConfetti() {
    if (prefersReducedMotion) { return; }
    var colors = ['#EE7A1E', '#2E6B4F', '#1D7293', '#C9971D', '#D6455A'];
    for (var i = 0; i < 24; i++) {
      var piece = document.createElement('span');
      piece.className = 'confetti-piece';
      var size = 6 + Math.random() * 6;
      piece.style.width = size + 'px';
      piece.style.height = (size * 0.4) + 'px';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      var duration = 1.6 + Math.random() * 1.2;
      piece.style.animationDuration = duration + 's';
      piece.style.animationDelay = (Math.random() * 0.3) + 's';
      el.confettiLayer.appendChild(piece);
      (function (node, ms) {
        window.setTimeout(function () { node.remove(); }, ms * 1000 + 400);
      })(piece, duration);
    }
  }

  /* ------------------------------------------------------------------
     10. TELA FINAL
     ------------------------------------------------------------------ */
  function showEndScreen() {
    el.progressFill.style.width = '100%';

    var pct = state.score / TOTAL;
    var emoji, message;

    if (pct >= 0.9) {
      emoji = '🏆';
      message = 'Uau! Você é um verdadeiro mestre de Poços de Caldas. Conhece a cidade como ninguém!';
    } else if (pct >= 0.7) {
      emoji = '🥇';
      message = 'Excelente! Você manja muito sobre os pontos turísticos da nossa cidade.';
    } else if (pct >= 0.5) {
      emoji = '🥈';
      message = 'Muito bom! Você já conhece bastante Poços de Caldas. Que tal explorar mais um pouco?';
    } else if (pct >= 0.3) {
      emoji = '🥉';
      message = 'Bom começo! Poços de Caldas tem muitas histórias legais para você descobrir.';
    } else {
      emoji = '🌱';
      message = 'Vamos continuar aprendendo! Toda vez que você joga, aprende algo novo sobre a cidade.';
    }

    el.endEmoji.textContent = emoji;
    el.endScore.textContent = state.score + ' / ' + TOTAL;
    el.endMessage.textContent = message;

    showScreen(el.endScreen);
  }

  /* ------------------------------------------------------------------
     11. INÍCIO / REINÍCIO
     ------------------------------------------------------------------ */
  function shuffleArray(array) {
    var newArray = array.slice();
    for (var i = newArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  }

  function startQuiz() {
    // Shuffle the main array and pick 10 questions
    sessionQuestions = shuffleArray(QUIZ_DATA).slice(0, TOTAL);
    
    state.current = 0;
    state.score = 0;
    state.answered = false;
    showScreen(el.quizScreen);
    renderQuestion();
  }

  el.startBtn.addEventListener('click', startQuiz);
  el.restartBtn.addEventListener('click', startQuiz);

  el.startBtn.addEventListener('click', startQuiz);
  el.restartBtn.addEventListener('click', startQuiz);

  /* ------------------------------------------------------------------
     12. INICIALIZAÇÃO
     ------------------------------------------------------------------ */
  setTheme(document.documentElement.getAttribute('data-theme') || 'light');
  showScreen(el.startScreen);
})();
