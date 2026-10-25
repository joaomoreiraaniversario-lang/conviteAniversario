# Convite do João

Convite digital de uma página para comemorar o primeiro ano do João, com o tema **365 dias de sorrisos**.

O convite mantém o vídeo em tela cheia com uma camada azul translúcida e recupera o visual claro do convite original, com faixa azul-céu, foto do João, catavento animado e sugestões de presentes. Nuvens flutuam suavemente na área azul do convite, próximas à foto, e o catavento gira no canto inferior da tela. No celular, os botões de localização e confirmação ficam empilhados. O áudio tenta iniciar automaticamente com som; se o navegador bloquear a reprodução automática, o vídeo começa silencioso e a música é ativada no primeiro toque ou tecla, sem exibir um botão de música.

## Informações da comemoração

- **Data:** 22 de novembro
- **Horário:** 14 horas
- **Localização:** [Abrir no Google Maps](https://maps.app.goo.gl/nEaftPHZkqN953a4A?g_st=iw)
- **Confirmação de presença:** [Chamar no WhatsApp](https://wa.me/qr/4CZNJUC5L7FHG1)

## Como visualizar

Sirva a pasta do projeto por uma extensão como Live Server no Visual Studio Code para que o vídeo de fundo e seu áudio sejam carregados corretamente. Não é necessário instalar dependências.

## Publicação

O GitHub Actions publica o site no GitHub Pages automaticamente a cada envio para a branch `main`. Depois da primeira publicação, o convite ficará disponível em:

https://joaomoreiraaniversario-lang.github.io/conviteAniversario/

## Arquivos principais

- `index.html`: conteúdo do convite.
- `styles/style.css`: estilos responsivos, fundo em vídeo e camada azul.
- `scripts/music.js`: tentativa de reprodução automática e início do áudio no primeiro gesto quando exigido pelo navegador.
- `assets/catavento-transparente.png`: catavento extraído do convite original com o fundo removido.
- `assets/fotobalao.jpeg`: foto usada no convite.
- `video/videoplayback (1).mp4`: vídeo de fundo e faixa de áudio.

Os arquivos restantes da antiga página da barbearia foram mantidos na pasta, mas não são carregados pelo convite.
