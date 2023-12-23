const languages = {
    'pt-BR': {
      headerMenu__Portifolio: 'Projetos',  
      introTitle: 'Olá, eu sou <span>Leonardo</span>',
      introPosition: 'Desenvolvedor Python Junior',
      introText: `
        Em meu portfólio tenho projetos variados do frontend ao backend, utilizando tecnologias como HTML, CSS, Bootstrap, JavaScript. No entanto, desde o início da minha jornada, foquei principalmente no aprimoramento em Python, dedicando esforços em frameworks como Django, Flask, FastAPI e Selenium. Além disso, possuo alguns projetos em ciência de dados, onde utilizo o Jupyter como IDE e as bibliotecas Pandas, Numpy, Matplotlib e Seaborn.
        <br><br>
        Atualmente, sou estudante do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas no IFPR.
        <br><br>
        Minha busca por conhecimento inclui estudos em estrutura de dados, arquitetura de software e práticas de DevOps, com interesse recente em tecnologias como Docker e Kubernetes.
        <br><br>
        Profissionalmente, atuo no desenvolvimento de sites, sistemas web e scripts para automação de processos. Busco oportunidades para expandir meu conhecimento em projetos desafiadores e contribuir significativamente. Estou disponível para colaborar com OSCs e dedicar tempo para causas sociais. Meu foco é buscar constantemente novos desafios e oportunidades para crescimento profissional.
      `
      // ... Outros elementos do seu conteúdo em português ...
    },
    'en-US': {
      headerMenu__Portifolio: 'Projects',
      introTitle: 'Hello, I am <span>Leonardo</span>',
      introPosition: 'Junior Python Developer',
      introText: `
        In my portfolio, I have diverse projects ranging from frontend to backend, utilizing technologies like HTML, CSS, Bootstrap, and JavaScript. However, since the beginning of my journey, I have primarily focused on improving my skills in Python, dedicating efforts to frameworks such as Django, Flask, FastAPI, and Selenium. Additionally, I have some projects in data science where I use Jupyter as an IDE along with libraries like Pandas, Numpy, Matplotlib, and Seaborn.
        <br><br>
        Currently, I am a student pursuing a Bachelor's Degree in Systems Analysis and Development at IFPR.
        <br><br>
        My quest for knowledge involves studies in data structures, software architecture, and DevOps practices, with a recent interest in technologies like Docker and Kubernetes.
        <br><br>
        Professionally, I engage in the development of websites, web systems, and process automation scripts. I am seeking opportunities to expand my expertise in challenging projects and make significant contributions. I am available to collaborate with NGOs and dedicate time to social causes. My focus is to constantly seek new challenges and opportunities for professional growth.
      `
      // ... Outros elementos do seu conteúdo em inglês ...
    }
  };
  
  function changeLanguage() {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
  
    document.documentElement.lang = newLanguage;
  
    const currentContent = languages[newLanguage];
  
    // Seleciona os elementos existentes e atualiza seu conteúdo
    
    const introTitle = document.querySelector('.intro__title');
    const introPosition = document.querySelector('.intro__position');
    const introText = document.querySelector('.intro__text');
    const headerMenu__Portifolio = document.querySelector('.header-menu__Portifolio');
    // Verifica se o conteúdo em inglês existe, se não, mantém o conteúdo atual
    introTitle.innerHTML = currentContent.introTitle || introTitle.innerHTML;
    introPosition.innerHTML = currentContent.introPosition || introPosition.innerHTML;
    introText.innerHTML = currentContent.introText || introText.innerHTML;
    headerMenu__Portifolio.innerHTML = currentContent.headerMenu__Portifolio || headerMenu__Portifolio.innerHTML;
    
  }
  
  document.getElementById('languageButton').addEventListener('click', changeLanguage);
  
 
  