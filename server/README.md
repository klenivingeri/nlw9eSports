# Server eSports
## Entidades

### Game
- id
- title
- bannerUrl

### Ad
- id
- gameId
- name
- yearsPlaying
- discord
- weekDays
- hourStart
- hourEnd
- useVoiceChannel
- createdAt

## Casos de uso
* rotas == casos de uso
- Listagem de games com contagem de anúncios
- Criação de novo anúncios
- Listagem de anúncio por games
- Buscar discord pelo ID do anúncio

## Pacotes instalados
- express
- @types/express -D
- typescript -D
- ts-node-dev -D // parecido com nodemon, mas para ts
- npm i prisma -D
- npx prisma init --datasource-provider SQLite // cria configuração
### Prisma

### Dicas
- Alterar de require para import:
Dentro da arquivo package.json adicionar `type: module` e alterar a extenção do arquivo para `mjs`
* Se for usar ts no projeto, verificar o tsconfig.json e package.json que foram alterados para não quebrar


- Configurar typescript
 Executar `npx tsc --init` criar um arquivo de configuração tsconfig.json
 Quando instalamos o typescript a extenção do arquivo muda para `.ts`

- Quando for trabalhar com tempo, procurar salvar em minutos 1:30h -> 90min
- Quando for trabalhar com dinheiro, 179,89 * 100 -> 17989

### Extenção
- Prisma